import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userSlice/operations';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.user?.user?.user?.email);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p className={s.text}>{email}</p>
      <button className={s.btn} onClick={onClick}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
