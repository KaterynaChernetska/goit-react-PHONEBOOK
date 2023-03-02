import { MiniLoader } from 'components/MiniLoader/MiniLoader';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userLogOut } from 'redux/auth/authOperations';
import { selectIsLoading, selectUserData } from 'redux/auth/selectors';
import css from './LogedInNavigation.module.css';

export const LogedInNavigation = () => {
  const isLoading = useSelector(selectIsLoading);
  const userInformation = useSelector(selectUserData);
  const dispatch = useDispatch();
  console.log(userInformation);

  const handleLogOut = () => {
    dispatch(userLogOut());
  };

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/contacts"
        className={css.navLink}
        style={({ isActive }) => ({
          color: isActive ? '#f53b57' : '#485460',
        })}
      >
        CONTACTS
      </NavLink>
      <div className={css.logout}>
        <span className={css.text}>Hello,{userInformation?.name}</span>
        <button
          disabled={isLoading}
          type="button"
          className={css.button}
          onClick={handleLogOut}
        >
          {' '}
          {isLoading ? <MiniLoader /> : 'LOG OUT'}{' '}
        </button>
      </div>
    </nav>
  );
};
