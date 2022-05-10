const ALLOWED_CORS = [
  'http://localhost:3000',
  'localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const errorMessages = {
  serverError: 'Произошла ошибка на сервере.',
  userNotFound: 'Пользователь с указанным id не найден.',
  invalidCreateUserData: 'Переданы некорректные данные при создании пользователя.',
  invalidAuthUserData: 'Переданы некорректные данные при авторизации пользователя.',
  orderNotFound: 'Заказ с указанным id не найден.',
  invalidCreateOrderData: 'Переданы некорректные данные при создании заказа.',
  needAuth: 'Необходима авторизация.',
  pageNotFound: 'Запрашиваемая страница не найдена.',
  tooManyRequests: 'Слишком много запросов с одного адреса. Попробуйте повторить позднее.',
  tooManyCreateAccountRequests: 'Создано слишком много аккаунтов с одного адреса. Попробуйте повторить позднее.',
};

const validationErrorMessages = {
  nameRequired: 'Поле "username" должно быть заполнено.',
  nameMinLength: 'Поле "username" должно содержать минимум 2 символа.',
  nameMaxLength: 'Поле "username" должно содержать максимум 30 символов.',
  passwordRequired: 'Поле "password" должно быть заполнено.',
  passwordNotStrong: 'Пароль должен содержать минимум 8 символов, символы нижнего и верхнего регистра, цифры.',
  orderIdRequired: 'Поле "orderId" должно быть заполнено.',
  orderIdInvalid: 'Поле "orderId" должно быть валидным id.',
  commentRequired: 'Поле "comment" должно быть заполнено.',
  phoneRequired: 'Поле "phone" должно быть заполнено.',
};

const noticeMessages = {
  successLogin: 'Авторизация прошла успешно.',
  successLogout: 'Выход из системы прошёл успешно.',
};

module.exports = {
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
  errorMessages,
  validationErrorMessages,
  noticeMessages,
};
