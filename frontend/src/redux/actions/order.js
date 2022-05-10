import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    CREATE_ORDER,
    GET_ORDER_BY_ID,
    REQUEST,
    SUCCESS,
    FAILURE,
    CLEAR_ORDER,
    GET_ALL_ORDERS,
} from "./actionTypes";

export const getAllOrders = () => async (dispatch, getState) => {

    const { orders: { loading } } = getState();

    dispatch({ type: GET_ALL_ORDERS + REQUEST });

    if (loading) {
        return;
    };

    try {
        const allOrders = await api.getAllOrders();

        dispatch({ type: GET_ALL_ORDERS + SUCCESS, payload: allOrders });
    } catch (error) {
        dispatch({ type: GET_ALL_ORDERS + FAILURE });
    };
};

export const getOrderById = (orderData) => async (dispatch, getState) => {
    const { currentOrder: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_ORDER_BY_ID + REQUEST });

    try {
        const order = await api.getOrderById(orderData);

        dispatch({ type: GET_ORDER_BY_ID + SUCCESS, payload: order });
    } catch (error) {
        dispatch(handleError({ errorCode: 404, action: GET_ORDER_BY_ID }));
    };
};

export const createOrder = (orderData) => async dispatch => {

    try {
        const newOrder = await api.createOrder(orderData);

        dispatch({ type: CREATE_ORDER + SUCCESS, payload: newOrder });
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: CREATE_ORDER }));
    };
};

export const resetOrder = () => ({ type: CLEAR_ORDER });