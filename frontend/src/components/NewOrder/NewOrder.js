import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { orderActions } from '../../redux/actions';
import { newOrderSelector } from '../../redux/selectors';
import { useValidation } from '../../utils/useValidation';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import FormError from '../FormError/FormError';
import Header from '../Header/Header';
import NotificationPopup from '../NotificationPopup/NotificationPopup';

import './NewOrder.css';

const initialOrderState = {
    name: '',
    phone: '',
    comment: '',
};

function NewOrder() {

    const dispatch = useDispatch();
    const { order: newOrderFromApi, error } = useSelector(newOrderSelector);
    const { values: { name, phone, comment }, errors, isFormValid, handleChange, resetForm } = useValidation({
        values: initialOrderState,
        isFormValid: true
    });

    const handleCreateOrder = async (event) => {
        event.preventDefault();
        dispatch(orderActions.createOrder({ name, phone, comment }));
    };

    const handleClosePopup = () => {
        dispatch(orderActions.resetOrder());
        resetForm(initialOrderState);
    };

    return (
        <div className='new-order-page'>
            <Header />
            <main className='new-order'>
                <h2 className='new-order__title'>Создать заказ</h2>
                <form className='new-order__form' onSubmit={handleCreateOrder}>
                    <fieldset className='new-order__fieldset fieldset'>
                        <input className={`input new-order__input ${errors.name && 'input_invalid'}`} id="name"
                            type='text'
                            name='name'
                            placeholder='Имя'
                            minLength='2'
                            maxLength="30"
                            required
                            value={name}
                            onChange={handleChange}
                            data-name={'username-input'}
                        />
                        <FormError message={errors.name} dataName={'username-input-error'} />
                    </fieldset>

                    <fieldset className='new-order__fieldset fieldset'>
                        <input className={`input new-order__input ${errors.phone && 'input_invalid'}`} id="phone"
                            type='tel'
                            name='phone'
                            placeholder='Телефон'
                            minLength='6'
                            maxLength="14"
                            pattern='^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$'
                            required
                            value={phone}
                            onChange={handleChange}
                            data-name={'phone-input'}
                        />
                        <FormError message={errors.phone} dataName={'phone-input-error'} />
                    </fieldset>

                    <fieldset className='new-order__fieldset fieldset'>
                        <input className={`input new-order__input ${errors.comment && 'input_invalid'}`} id="comment"
                            type='text'
                            name='comment'
                            placeholder='Комментарий'
                            maxLength="30"
                            value={comment}
                            onChange={handleChange}
                            data-name={'comment-input'}
                        />
                        <FormError message={errors.comment} dataName={'comment-input-error'} />
                    </fieldset>

                    <button className='button new-order__button' type='submit' data-name={'createOrder-button'} disabled={!isFormValid}>Заказать</button>
                </form>
                <NotificationPopup dataName={'orderSuccessfullyCreated-popup'} newOrderId={newOrderFromApi?.orderId} onClose={handleClosePopup} />
                <ErrorPopup message={error} dataName={'orderCreationError-popup'} />
            </main>
        </div>
    );
};

export default NewOrder;
