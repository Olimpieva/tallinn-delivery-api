const { celebrate, Joi } = require('celebrate');
const { default: mongoose } = require('mongoose');
const validator = require('validator');

const { validationErrorMessages } = require('../utils/constants');

module.exports.validateCreateUser = celebrate({
  body: Joi.object().keys({
    username: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': validationErrorMessages.nameRequired,
        'string.min': validationErrorMessages.nameMinLength,
        'string.max': validationErrorMessages.nameMaxLength,
      }),
    password: Joi.string().required()
      .custom((value, helpers) => {
        if (validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 0,
        })) {
          return value;
        }
        return helpers.message(validationErrorMessages.passwordNotStrong);
      })
      .messages({
        'any.required': validationErrorMessages.passwordRequired,
      }),
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    username: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': validationErrorMessages.nameRequired,
      }),
    password: Joi.string().required()
      .messages({
        'any.required': validationErrorMessages.passwordRequired,
      }),
  }),
});

module.exports.validateGetOrder = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required()
      .custom((value, helpers) => {
        if (mongoose.isValidObjectId(value)) {
          return value;
        }
        return helpers.message(validationErrorMessages.orderIdInvalid);
      })
      .messages({
        'any.required': validationErrorMessages.orderIdRequired,
      }),
  }),
});
