import { useCallback, useState } from 'react';
import { validationErrorMessages } from './constants';

export function useValidation(initialState = { values: {}, isFormValid: true }) {
  const [values, setValues] = useState(initialState.values);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(initialState.isFormValid);

  const handleChange = (event) => {
    const input = event.target;
    const { name, value, minLength, validity: validityState } = input;
    let errorMessage;

    if (!validityState.valid) {

      const [, getValidationMessage] = Object.entries(validationErrorMessages).find(([errorKey]) => {
        const hasError = validityState[errorKey];
        if (hasError) {
          return true;
        }
        return false;
      });

      errorMessage = getValidationMessage({ minLength });
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
    setIsFormValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsFormValid = true) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsFormValid(newIsFormValid);
  },
    [setValues, setErrors, setIsFormValid]);

  return { values, setValues, handleChange, errors, setErrors, isFormValid, setIsFormValid, resetForm, };
}