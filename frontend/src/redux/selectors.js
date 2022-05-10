import { createSelector } from "reselect";

export const currentUserSelector = state => state.user;
export const currentOrderSelector = state => state.currentOrder;
export const newOrderSelector = state => state.newOrder;
export const allOrdersStateSelector = state => state.orders;
export const allOrdersSelector = state => state.orders.all;

export const sortedOrdersSelector = createSelector(
    allOrdersSelector,
    orders => orders?.reduce((acc, order) => {

        if (!acc[order.status]) {
            acc[order.status] = [];
        }

        acc[order.status] = [...acc[order.status], order];
        return acc;
    }, {})
);
