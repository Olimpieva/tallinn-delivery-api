import React from 'react';

import { useDispatch } from 'react-redux';
import { resetError } from '../../redux/actions';
import Popup from '../Popup/Popup';

import './ErrorPopup.css';

function ErrorPopup({ message, dataName }) {

    const dispatch = useDispatch();

    const handleClosePopup = () => {
        dispatch(resetError());
    };

    return (
        <Popup dataName={dataName} isOpened={message} onClose={handleClosePopup}>
            <span className='error-popup__text'>{message}</span>
        </Popup>
    );
};

export default ErrorPopup;
