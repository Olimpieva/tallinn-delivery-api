import { REQUEST, SUCCESS, FAILURE, RESET_ERROR, GET_ALL_ORDERS } from "../actions/actionTypes";

const initialState = {
    all: null,
    loading: false,
    error: null,
};

const currentOrder = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_ORDERS + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ALL_ORDERS + SUCCESS:
            return { ...state, all: action.payload, loading: false, error: null };
        case GET_ALL_ORDERS + FAILURE:
            return { ...state, all: null, loading: false, error: action.payload };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default currentOrder;