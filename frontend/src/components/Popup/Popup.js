import React from 'react';

import './Popup.css';

function Popup(props) {

    const { isOpened, onClose, children, dataName } = props;

    return (
        <div className={`popup ${isOpened && 'popup_opened'}`}>
            <div className='popup__container' data-name={dataName}>
                <button className='popup__button-close' type='button' onClick={onClose} data-name={dataName && `${dataName}-close-button`}>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
