import { Switch, Route, Routes, Redirect } from 'react-router-dom';
import {lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/authOperations';
import { Layout } from 'components/Layout/Layout';
import React from 'react';
import { PrivateRoute } from 'components/PrivatRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';


const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    }, [dispatch]);
  
  return (
<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path='/register' element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterView />} />
        } />
        <Route path='/login' element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginView />} />
        } />
        <Route path='/contacts' element={
          <PrivateRoute redirectTo="/login" component={<ContactsView />} />
        } />
      </Route>
    </Routes> 
  )
};

export default App;