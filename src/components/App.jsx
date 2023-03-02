import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { userInfo } from 'redux/auth/authOperations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
