import { FAILURE, LOGIN, LOGOUT, REQUEST, RESET_ERROR, SUCCESS, } from "../actions/actionTypes";

const initialState = {
    loggedIn: null,
    loading: false,
    error: null,
};

const user = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN + REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN + SUCCESS:
            return { ...state, loggedIn: true, loading: false, error: null };
        case LOGIN + FAILURE:
            return { ...state, loggedIn: false, loading: false, error: action.payload || null };
        case LOGOUT:
            return { ...state, loggedIn: false };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default user;