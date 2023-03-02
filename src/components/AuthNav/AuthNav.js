import { StyledLink, Div } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Div>
  );
};
