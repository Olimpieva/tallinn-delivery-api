const mongoose = require('mongoose');
const validator = require('validator');

const { validationErrorMessages } = require('../utils/constants');

const userShema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: {
      validator(v) {
        return validator.isStrongPassword(v, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 0,
        });
      },
      message: validationErrorMessages.passwordNotStrong,
    },
  },
});

module.exports = mongoose.model('user', userShema);
