import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
};
export default RegistrationPage;
