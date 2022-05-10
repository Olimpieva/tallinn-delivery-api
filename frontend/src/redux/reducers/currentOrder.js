import { GET_ORDER_BY_ID, REQUEST, SUCCESS, FAILURE, RESET_ERROR } from "../actions/actionTypes";

const initialState = {
    order: null,
    loading: false,
    error: null,
};

const currentOrder = (state = initialState, action) => {

    switch (action.type) {
        case GET_ORDER_BY_ID + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ORDER_BY_ID + SUCCESS:
            return { ...state, order: action.payload, loading: false, error: null };
        case GET_ORDER_BY_ID + FAILURE:
            return { ...state, order: null, loading: false, error: action.payload };
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default currentOrder;