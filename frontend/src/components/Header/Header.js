import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from '../../redux/actions';
import OrderSearchPopup from '../OrderSearchPopup/OrderSearchPopup';

import './Header.css';

function Header({ hideTitle = false, hideInfo = false }) {

    const dispatch = useDispatch();
    const [isOrderSearchPopupOpened, setIsOrderSearchPopupOpened] = useState(false);

    const exitButtonClickHandler = () => {
        dispatch(userActions.logout());
    };

    const handleOpenPopup = () => {
        setIsOrderSearchPopupOpened(true);
    };

    const handleClosePopup = () => {
        setIsOrderSearchPopupOpened(false);
    };

    return (
        <div className="header">
            <div className='logo_main'>
                <Link to="/" title="Главная страница" className='logo_main__image' data-name={'mainPage-link'} />
                <span className={`logo_main__text ${!hideInfo && 'logo_main__text_shown'}`}>Тренажёр</span>
            </div>
            {!hideTitle &&
                <h1 className='title'>
                    Tallin
                    <span className='title_highlight'> Delivery</span>
                </h1>
            }
            <div className={`header__buttons ${!hideInfo && 'header__buttons_shown'}`}>
                <button className='header__button_check-order' onClick={handleOpenPopup} data-name={'openStatusPopup-button'}>Статус</button>
                <Link to="/signin" title="Выход из аккаунта" className="header__button_exit" data-name={'logout-button'} onClick={exitButtonClickHandler} />
            </div>
            <OrderSearchPopup isOpened={isOrderSearchPopupOpened} onClose={handleClosePopup} />
        </div>
    );
};

export default Header;
