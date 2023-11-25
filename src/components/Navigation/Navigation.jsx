import { useSelector } from 'react-redux';

import { selectAuthAuthenticated } from 'redux/auth.selectors';

import UserMenu from 'components/UserMenu/UserMenu';
import {
  NavBox,
  NavContainer,
  Navi,
  StyledNavLink,
  TextColor,
  UserNavBox,
} from './Navigation.styled';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <NavContainer>
      <header>
        <Navi>
          {authenticated ? (
            <>
              <NavBox>
                <StyledNavLink to="/">
                  <TextColor>H O M E</TextColor>
                </StyledNavLink>
                <StyledNavLink to="/contacts">C O N T A C T S</StyledNavLink>
              </NavBox>
              <UserMenu />
            </>
          ) : (
            <>
              <NavBox>
                <StyledNavLink to="/">
                  <TextColor>H O M E</TextColor>
                </StyledNavLink>
              </NavBox>
              <UserNavBox>
                <StyledNavLink to="/register">R E G I S T E R</StyledNavLink>
                <StyledNavLink to="/login">L O G&nbsp;&nbsp;I N</StyledNavLink>
              </UserNavBox>
            </>
          )}
        </Navi>
      </header>
    </NavContainer>
  );
};
