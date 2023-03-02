import { MiniLoader } from 'components/MiniLoader/MiniLoader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/selectors';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
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

    const { name, email, password } = value;
    const newContact = {
      name,
      email,
      password,
    };
    dispatch(registerRequest(newContact));

    setValue({
      name: '',
      email: '',
      password: '',
    });
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleFormSumbit}>
        <h2 className={css.title}>Please register</h2>
        <p className={css.inputTitle}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          value={value.name}
          placeholder={'Enter your name'}
          onChange={handleFormChange}
          required
        />
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
          {isLoading ? <MiniLoader /> : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
