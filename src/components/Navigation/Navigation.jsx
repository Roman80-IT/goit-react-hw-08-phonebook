import { useSelector } from 'react-redux';
import { StyledNavLink } from './Navigation.styled';
import { selectAuthAuthenticated } from 'redux/auth.selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <div>
      <header>
        <nav>
          {authenticated ? (
            <>
              <ul>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <StyledNavLink to="/">
                  <span>Home</span>
                </StyledNavLink>
              </ul>
              <ul>
                <StyledNavLink to="/register">Sign Up</StyledNavLink>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </ul>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};
