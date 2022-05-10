import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { allOrdersStateSelector, sortedOrdersSelector } from '../../redux/selectors';
import Header from '../Header/Header';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import OrderItem from '../OrderItem/OrderItem';
import Preloader from '../Preloader/Preloader';

import './OrderList.css';
import { Link } from 'react-router-dom';
import { orderActions } from '../../redux/actions';

function OrderList() {

    const dispatch = useDispatch();
    const sortedOrders = useSelector(sortedOrdersSelector)
    const { error, loading } = useSelector(allOrdersStateSelector);

    useEffect(() => {
        dispatch(orderActions.getAllOrders());
    }, [dispatch]);

    if ((!sortedOrders && !error) || loading) {
        return (
            <div className='app__preloader'>
                <Preloader />
            </div>
        );
    }

    const renderOrdersList = () =>
        Object.entries(sortedOrders).map(([status, orders]) =>
            <div className="order-short-list" key={status}>
                <h2 className="order-short-list__title">{status}</h2>
                <ul className="order-short-list__list">
                    {orders.map(order =>
                        <li className="order-short-list__item" key={order._id} >
                            <OrderItem order={order} />
                        </li>
                    )}
                </ul>
            </div>
        );

    return (
        <div className='order-short-list-page'>
            <Header />
            <main className='order-short-list-page__content'>
                <Link to={`/order`} className="order-short-info__link">
                    <button className='header__button_check-order' data-name={'openNewOrderPage-button'}>Новый заказ</button>
                </Link>
                {renderOrdersList()}
                <ErrorPopup message={error} dataName={'orderCreationError-popup'} />
            </main>
        </div>
    );
};

export default OrderList;