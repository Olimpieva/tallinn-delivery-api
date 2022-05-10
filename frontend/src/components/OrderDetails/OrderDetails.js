import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { currentOrderSelector } from '../../redux/selectors';
import { orderActions } from '../../redux/actions';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import { defaultOrderStatus, userFields, statusFields, handleDate } from '../../utils/constants';

import './OrderDetails.css';

function OrderDetails(props) {

    const { id: orderId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderActions.getOrderById({ orderId }));
    }, [orderId, dispatch]);

    const { order, loading, error } = useSelector(currentOrderSelector);

    const orderDate = handleDate(order?.time);

    const renderOrderDetails = () => userFields.map(({ title, field }, index) => {
        return (
            <li className='order-list__item' key={`order-item_${index}`} data-name={`order-item-${index}`}>
                <h3 className='order-list__title'>{title}</h3>
                <span className='order-list__description'>{order[field]}</span>
            </li>
        );
    });


    const renderStatusDetails = () => statusFields.map(({ name, description }, index) => {
        return (
            <li className='status-list__item' key={`status-item_${index}`} data-name={`status-item-${index}`}>
                <div className='status-list__info'>
                    <span className={`status-list__status ${order.status === defaultOrderStatus[name] && 'status-list__status_active'}`}>
                        {name}
                    </span>
                    <h3 className={`status-list__description ${order.status === defaultOrderStatus[name] && 'status-list__description_active'}`}>
                        {description}
                    </h3>
                </div>
                <div className='status-list__line'></div>
            </li>
        );
    });

    if (loading) {
        return (
            <div className='order-details-page'>
                <Preloader />
            </div>
        );
    };

    if (!order) {
        return <NotFound title={error?.title} message={error?.message} />
    };

    return (
        <div className='order-details-page'>
            <Header />
            <main className='order-details'>
                <input className='order-details__input' data-name={'useless-input'}></input>
                <div className='order-details__content'>
                    <ul className='order-details__order-list order-list'>
                        <span className='order-list__date' data-name={'order-date'}>{orderDate.date} at {orderDate.time}</span>
                        {renderOrderDetails()}
                    </ul>
                    <ul className='order-details__status-list status-list'>
                        {renderStatusDetails()}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default OrderDetails;
