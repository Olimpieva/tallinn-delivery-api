import { combineReducers } from "redux";
import user from "./user";
import orders from "./orders";
import currentOrder from "./currentOrder";
import newOrder from "./newOrder";

export default combineReducers({
    user,
    orders,
    currentOrder,
    newOrder,
});