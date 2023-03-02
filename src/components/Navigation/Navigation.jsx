import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

export const  Navigation = () => {
    return (    
        <nav className={css.navigation}>
          <NavLink
            to="/register"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#f53b57' : '#485460',
            })}
          >
            REGISTER
          </NavLink>
          <NavLink
            to="/login"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#f53b57' : '#485460',
            })}
          >
            LOG IN
          </NavLink>
        </nav>
    )
}