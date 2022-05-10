import React from 'react';

import { ReactComponent as NotFoundImage } from '../../images/order-not-found.svg';
import Header from '../Header/Header';

import './NotFound.css';

function NotFound({ title = 'Страница не найдена', message = '' }) {

    return (
        <div className='not-found-page'>
            <Header hideTitle />
            <main className='not-found' data-name={'orderNotFound-container'}>
                <h1 className='not-found__title'>{title}</h1>
                <span className='not-found__description'>{message}</span>
                <NotFoundImage className='not-found__image' />
            </main>
        </div>
    );
};

export default NotFound;
