import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    LOGIN,
    LOGOUT,
    REQUEST,
    SUCCESS,
    FAILURE,
} from "./actionTypes";

export const setLoggedIn = () => ({ type: LOGIN + SUCCESS });

export const checkToken = () => async (dispatch, getState) => {

    const { user: { loading } } = getState();

    dispatch({ type: LOGIN + REQUEST });

    if (loading) {
        return;
    };

    try {
        await api.checkToken();

        dispatch(setLoggedIn());
    } catch (error) {
        dispatch({ type: LOGIN + FAILURE });
    };
};

export const login = (userData) => async (dispatch, getState) => {

    const { user: { loading } } = getState();

    dispatch({ type: LOGIN + REQUEST });

    if (loading) {
        return;
    };

    try {
        await api.login(userData);

        dispatch(setLoggedIn());
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: LOGIN }));
    };
};

export const logout = () => async (dispatch, getState) => {

    try {
        await api.logout();

        dispatch({ type: LOGOUT });
    } catch (error) {
        dispatch(handleError({ errorCode: error.status || 500, action: LOGOUT }));
    };
};

