import { useSelector } from 'react-redux';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const authenticated = useSelector();

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
