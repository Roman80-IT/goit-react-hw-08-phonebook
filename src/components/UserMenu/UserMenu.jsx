import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authReducer';
import { UserNavContainer, RegisteredUser, LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <UserNavContainer>
      <RegisteredUser>{user}</RegisteredUser>
      <LogOutBtn onClick={onLogOut}>Log OUT</LogOutBtn>
    </UserNavContainer>
  );
};

export default UserMenu;
