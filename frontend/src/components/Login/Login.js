import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';
import { useValidation } from '../../utils/useValidation';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import FormError from '../FormError/FormError';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

import './Login.css';

const initialState = { username: "test", password: "QWEqwe123123" };

function Login() {

    const dispatch = useDispatch();
    const { error, loading } = useSelector(currentUserSelector);
    const { values: { username, password }, errors, isFormValid, handleChange } = useValidation({
        values: initialState,
        isFormValid: true
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        dispatch(userActions.login({ username, password }));
    };

    if (loading) {
        return (
            <div className='login-page'>
                <Header hideInfo />
                <Preloader />
            </div>
        );
    };

    return (
        <div className='login-page'>
            <Header hideInfo />
            <main className="login">
                <form className='login__form form' onSubmit={handleLogin}>

                    <fieldset className='login__fieldset fieldset'>
                        <input className={`input login__input ${errors.username && 'input_invalid'}`} id="username"
                            type='text'
                            name='username'
                            placeholder='login'
                            minLength='2'
                            maxLength="30"
                            required
                            value={username}
                            onChange={handleChange}
                            data-name={"username-input"}
                        />
                        <FormError message={errors.username} dataName={'username-input-error'} />
                    </fieldset>

                    <fieldset className='login__fieldset fieldset'>
                        <input className={`input login__input ${errors.password && 'input_invalid'}`} id="password"
                            type='password'
                            name='password'
                            placeholder='password'
                            minLength='8'
                            maxLength="30"
                            required
                            value={password}
                            onChange={handleChange}
                            data-name={'password-input'}
                        />
                        <FormError message={errors.password} dataName={'username-input-error'} />
                    </fieldset>

                    <button className='button login__button' type='submit' data-name={'signIn-button'} disabled={!isFormValid}>Sign In</button>
                </form>
                <ErrorPopup dataName={'authorizationError-popup'} message={error} />
            </main>
        </div>
    );
};

export default Login;
