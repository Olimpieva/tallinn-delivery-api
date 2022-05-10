import React from 'react';
import { Link } from 'react-router-dom';

import { handleDate } from '../../utils/constants';

import './OrderItem.css';

function OrderItem({ order }) {

    const { orderId, name, time } = order;
    const orderDate = handleDate(time);

    return (
        <Link to={`/order/${orderId}`} className="order-short-info__link">
            <div className="order-short-info">
                <span className="order-short-info__item order-short-info__item_bold">{orderId}</span>
                <span className="order-short-info__item">{name}</span>
                <span className='order-short-info__item' data-name={'order-date'}>{orderDate.date} at {orderDate.time}</span>
            </div>
        </Link>

    );
};

export default OrderItem;