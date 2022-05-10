import { FAILURE } from "./actionTypes";
import { requestErrorMessages } from "../../utils/constants";

const getErrorMessages = ({ errorCode = 500, action }) => {

    switch (errorCode) {
        case 404:
            return requestErrorMessages.orderNotFound();
        case 401:
            return requestErrorMessages.invalidAuthUserData();
        case 500:
            return requestErrorMessages.serverError();
        default:
            return requestErrorMessages.otherError({ errorCode, action });
    };
};

const handleError = ({ errorCode = 500, action }) => {

    return {
        type: action + FAILURE,
        payload: getErrorMessages({ errorCode, action }),
    };
};

export default handleError;
