import { lazy, Suspense } from 'react';
import cn from 'classnames';

import { NavLink, Route, Routes } from 'react-router-dom';

import s from './App.module.css';

const LazyContacts = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LazyLogIn = lazy(() => import('../pages/LogInPage/LogInPage'));
const LazyRegister = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <div className={s.App}>
      <nav>
        <NavLink
          className={({ isActive }) => cn(s.navLink, { [s.active]: isActive })}
          to="contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={({ isActive }) => cn(s.navLink, { [s.active]: isActive })}
          to="register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) => cn(s.navLink, { [s.active]: isActive })}
          to="login"
        >
          Log In
        </NavLink>
      </nav>
      <Suspense>
        <Routes>
          <Route path="contacts" element={<LazyContacts />} />
          <Route path="register" element={<LazyRegister />} />
          <Route path="login" element={<LazyLogIn />} />
        </Routes>
      </Suspense>
    </div>
  );
};
