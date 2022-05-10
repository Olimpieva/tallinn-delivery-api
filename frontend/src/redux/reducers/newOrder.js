import { CREATE_ORDER, REQUEST, SUCCESS, FAILURE, CLEAR_ORDER, RESET_ERROR } from "../actions/actionTypes";

const initialState = {
    order: null,
    loading: false,
    error: null,
};

const newOrder = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_ORDER + REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_ORDER + SUCCESS:
            return { ...state, order: action.payload, loading: false, error: null };
        case CREATE_ORDER + FAILURE:
            return { ...state, order: null, loading: false, error: action.payload };
        case CLEAR_ORDER:
            return initialState;
        case RESET_ERROR:
            return { ...state, error: null };
        default:
            return state;
    };
};

export default newOrder;