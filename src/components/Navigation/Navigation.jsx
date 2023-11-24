import { useSelector } from 'react-redux';

import { selectAuthAuthenticated } from 'redux/auth.selectors';

import UserMenu from 'components/UserMenu/UserMenu';
import { NavContainer, Navi, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <NavContainer>
      <header>
        <Navi>
          {authenticated ? (
            <>
              <div>
                <StyledNavLink to="/">H O M E</StyledNavLink>
                <StyledNavLink to="/contacts">C O N T A C T S</StyledNavLink>
              </div>
              <UserMenu />
            </>
          ) : (
            <>
              <div>
                <StyledNavLink to="/">
                  <span>H O M E</span>
                </StyledNavLink>
              </div>
              <div>
                <StyledNavLink to="/register">R E G I S T E R</StyledNavLink>
                <StyledNavLink to="/login">L O G&nbsp;&nbsp;I N</StyledNavLink>
              </div>
            </>
          )}
        </Navi>
      </header>
    </NavContainer>
  );
};
