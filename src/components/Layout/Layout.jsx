import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <nav className={css.nav_bar}>
        <ul className={css.nav_list}>
          <li>
            <NavLink to="/" className={css.nav_link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.nav_link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
