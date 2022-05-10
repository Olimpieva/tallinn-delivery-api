import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Popup from '../Popup/Popup';

import './OrderSearchPopup.css';

function OrderSearchPopup({ isOpened, onClose }) {

    const navigate = useNavigate();
    const [orderId, setOrderId] = useState('');

    const handleInputChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleOrderSearch = (event) => {
        event.preventDefault();
        onClose();
        navigate(`/order/${orderId}`);
    };

    return (
        <Popup isOpened={isOpened} onClose={onClose} dataName={'searchOrder-popup'}>
            <form className='order-search-popup__form' onSubmit={handleOrderSearch}>
                <fieldset className='order-search-popup__fieldset'>
                    <label className='order-search-popup__label'>Введите номер заказа</label>
                    <input className='order-search-popup__input'
                        type='number'
                        name='id'
                        required
                        value={orderId}
                        onChange={handleInputChange}
                        data-name={'searchOrder-input'}
                    />
                </fieldset>
                <button className='order-search-popup__button button' data-name={'searchOrder-submitButton'} type='submit'>Отслеживание</button>
            </form>
        </Popup>
    );
};

export default React.memo(OrderSearchPopup);
