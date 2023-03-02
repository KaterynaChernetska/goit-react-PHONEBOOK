import { MiniLoader } from 'components/MiniLoader/MiniLoader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/selectors';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = event => {
    const target = event.target.name;
    const inputValue = event.target.value;

    setValue(prevState => {
      return {
        ...prevState,
        [target]: inputValue,
      };
    });
  };

  const handleFormSumbit = event => {
    event.preventDefault();

    const { email, password } = value;
    const newContact = {
      email,
      password,
    };
    dispatch(loginRequest(newContact));

    setValue({
      email: '',
      password: '',
    });
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleFormSumbit}>
        <h2 className={css.title}>Please LogIn</h2>
        <p className={css.inputTitle}>Email</p>
        <input
          className={css.input}
          type="email"
          name="email"
          value={value.email}
          placeholder={'Enter your email'}
          onChange={handleFormChange}
          required
        />
        <p className={css.inputTitle}>Password</p>
        <input
          className={css.input}
          type="password"
          name="password"
          minLength={7}
          value={value.password}
          placeholder={'Enter your password'}
          onChange={handleFormChange}
          required
        />
        <button disabled={isLoading} className={css.submitBtn} type="submit">
          {isLoading ? <MiniLoader /> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
