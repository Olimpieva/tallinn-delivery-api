const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../utils/config');

const User = require('../models/user');
const BadRequestError = require('../errors/bad-request-error');
const UnauthorizedError = require('../errors/unauthorized-error');
const { errorMessages, noticeMessages } = require('../utils/constants');
const NotFoundError = require('../errors/not-found-error');
const { initialUser } = require('../utils/fixtures');

module.exports.createUser = async (req, res, next) => {
  const { username = 'test', password = 'QWEqwe123123' } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash });

    res.send({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    let err = error;

    if (error.name === 'ValidationError') {
      err = new BadRequestError(errorMessages.invalidCreateUserData);
    }

    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username }).select('+password');

    if (!user) {
      // adding demo user
      if (username === initialUser.username && password === initialUser.password) {
        const hash = await bcrypt.hash(initialUser.password, 10);
        user = await User.create({ username: initialUser.username, password: hash });
      } else {
        throw new UnauthorizedError(errorMessages.invalidAuthUserData);
      }
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      throw new UnauthorizedError(errorMessages.invalidAuthUserData);
    }

    const token = jwt.sign(
      { _id: user._id },
      JWT_SECRET,
      { expiresIn: '7d' },
    );

    res.cookie('jwt', token, {
      maxAge: 3600000 * 24 * 7,
      sameSite: 'None',
      httpOnly: true,
      secure: true,
    });

    res.json({ token, message: noticeMessages.successLogin });
  } catch (error) {
    next(error);
  }

  return null;
};

module.exports.logout = async (req, res, next) => {
  try {
    await res.clearCookie('jwt', {
      sameSite: 'None',
      httpOnly: true,
      secure: true,
    });

    res.send({ message: noticeMessages.successLogout });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserInfo = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const userInfo = await User.findById(userId)
      .orFail(() => new NotFoundError(errorMessages.userNotFound));

    res.send(userInfo);
  } catch (error) {
    next(error);
  }
};
