import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  // max-width: 720px;
  margin: 0 auto;
`;

export const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
`;

export const NavBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
`;

export const UserNavBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-decoration: none;
`;

export const TextColor = styled.span`
  font-weight: bold;
  color: beige;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 12px;
  color: white;
  text-decoration: none;

  border: 1px solid white;
  border-radius: 10px;

  transition: all 300ms ease-out;

  cursor: pointer;

  &.active {
    // color: white;

    border: 1px solid white;
    background-color: #007fff;

    // border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    // color: white;
    background-color: royalblue;

    // border: 1px solid white;
    // border-radius: 10px;

    transform: scale(1.05);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    // color: white;
    background-color: royalblue;

    outline: none;
    // border: 1px solid white;
    // border-radius: 10px;

    transform: scale(1.05);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
