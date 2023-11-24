import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export const Navi = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 12px;
  color: white;
  border: 1px solid white;
  border-radius: 12px;

  text-decoration: none;
  transition: all 300ms ease-out;
  cursor: pointer;

  &.active {
    border: 1px solid white;
    background-color: navy;
    color: white;
    border-radius: 12px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  :hover {
    border: 1px solid white;
    background-color: royalblue;
    color: white;
    border-radius: 12px;
    transform: scale(1.03);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  :focus {
    outline: none;
    border: 1px solid white;
    background-color: royalblue;
    color: white;
    border-radius: 12px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
