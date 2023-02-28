import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Home } from '../pages/Home';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshCurrentUser } from 'redux/auth/operation';
import { selectIsrefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestricyedRoute';
import { PrivateRoute } from './PrivateRoute';

// const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useffect in app');
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsrefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={RegisterPage} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={ContactsPage} />
          }
        />
        <Route path="*" element={<Home />} />
        <Route />
      </Route>
    </Routes>
  );
};
