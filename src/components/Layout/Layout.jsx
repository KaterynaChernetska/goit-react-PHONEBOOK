import css from './Layout.module.css';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { LogedInNavigation } from 'components/LogedInNavigation/LogedInNavigation';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.header}>
        <NavLink
          to="/"
          className={css.homeLink}
          style={({ isActive }) => ({
            color: isActive ? '#f53b57' : '#485460',
          })}
        >
          HOME
        </NavLink>
        {isLoggedIn ? <LogedInNavigation /> : <Navigation />}
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};
