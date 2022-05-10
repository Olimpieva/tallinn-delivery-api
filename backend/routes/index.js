const router = require('express').Router();

const NotFoundError = require('../errors/not-found-error');
const { errorMessages } = require('../utils/constants');
const { validateCreateUser, validateLogin } = require('../middlewares/validation');
const { createAccountLimiter } = require('../middlewares/limiter');
const auth = require('../middlewares/auth');
const routerOrders = require('./orders');
const routerUsers = require('./users');
const { createUser, login, logout } = require('../controllers/users');

router.post(
  '/signup',
  createAccountLimiter,
  validateCreateUser,
  createUser,
);

router.post(
  '/signin',
  validateLogin,
  login,
);

router.use(auth);

router.use('/users', routerUsers);
router.use('/orders', routerOrders);
router.get('/signout', logout);

router.get('/', (req, res) => res.send('Ya super server'));

router.all('*', (req, res, next) => next(new NotFoundError(errorMessages.pageNotFound)));

module.exports = router;
