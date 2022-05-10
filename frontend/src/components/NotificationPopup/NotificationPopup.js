import React from 'react';

import Popup from '../Popup/Popup';

import './NotificationPopup.css';

function NotificationPopup({ newOrderId, onClose, dataName }) {

    return (
        <Popup isOpened={newOrderId} onClose={onClose} dataName={dataName}>
            <h3 className='notification-popup__text'>Заказ создан!</h3>
            <span className='notification-popup__text'>Номер отслеживания: {newOrderId}</span>
            <button className='notification-popup__button' data-name={`${dataName}-ok-button`} type='button' onClick={onClose}>ok</button>
        </Popup>
    );
};

export default NotificationPopup;
