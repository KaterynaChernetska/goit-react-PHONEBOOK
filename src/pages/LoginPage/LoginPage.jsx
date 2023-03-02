import LoginForm from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
