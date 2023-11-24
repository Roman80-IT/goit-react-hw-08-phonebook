import styled from 'styled-components';

export const UserNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-decoration: none;
`;

export const RegisteredUser = styled.span`
  color: black;
  font-weight: 700;
`;

export const LogOutBtn = styled.button`
  padding: 10px 12px;
  background: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 10px;

  transition: all 300ms ease-out;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid white;
    background-color: transparent;
    color: white;
    border-radius: 10px;
  }
`;
