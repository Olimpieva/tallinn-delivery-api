import React from "react";

import './FormError.css'

function FormError({ message, dataName }) {

    return (
        <span className={`form-error ${message && 'form-error_active'}`} data-name={dataName}>{message}</span>
    );
};

export default FormError;
