import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { userActions } from '../../redux/actions';
import { currentUserSelector } from '../../redux/selectors';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import NewOrder from '../NewOrder/NewOrder';
import NotFound from '../NotFound/NotFound';
import OrderDetails from '../OrderDetails/OrderDetails';
import Preloader from '../Preloader/Preloader';

import './App.css';
import OrderList from '../OrderList/OrderList';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(userActions.checkToken());
  }, [dispatch]);

  if (user.loggedIn === null) {
    return (
      <div className="app">
        <div className='app__preloader'>
          <Preloader />
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <Routes>
        <Route element={<ProtectedRoute loggedIn={user.loggedIn} />} >
          <Route path="/" element={<OrderList />} />
          <Route path="/order" element={<NewOrder />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>
        <Route path="/signin" element={user.loggedIn ? <Navigate replace to="/" /> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
