export const MAIN_URL = 'http://localhost:3001';

export const defaultOrderStatus = {
    OPEN: 'OPEN',
    ACCEPTED: 'ACCEPTED',
    INPROGRESS: 'INPROGRESS',
    DELIVERED: 'DELIVERED'
};

export const userFields = [{
    title: 'Имя',
    field: 'name'
}, {
    title: 'Телефон',
    field: 'phone'
}, {
    title: 'Комментарий',
    field: 'comment'
}];

export const statusFields = [{
    name: 'OPEN',
    description: 'Заказ создан'
}, {
    name: 'ACCEPTED',
    description: 'Заказ принят курьером'
}, {
    name: 'INPROGRESS',
    description: 'Заказ доставляется'
}, {
    name: 'DELIVERED',
    description: 'Заказ завершён'
}];

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Incorrect credentials',
    orderNotFound: () => ({ title: 'Заказ не найден', message: 'Проверьте номер отслеживания' }),
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const validationErrorMessages = {
    valueMissing: () => 'Поле должно быть заполнено.',
    tooShort: ({ minLength }) => `Поле должно содержать минимум ${minLength} символ${minLength < 5 ? `а` : `ов`}`,
    patternMismatch: () => 'Поле заполнено некорректно.',
    typeMismatch: () => 'Поле заполнено некорректно.'
};

export const handleDate = (dateToHandle) => {
    const date = new Date(dateToHandle);

    const handleDateDay = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    const handleDateMonth = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const handleDateYear = date.getFullYear();
    const handleDateHours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const handleDateMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

    return {
        time: `${handleDateHours}:${handleDateMinutes}`,
        date: `${handleDateDay}-${handleDateMonth}-${handleDateYear}`,
    };
};