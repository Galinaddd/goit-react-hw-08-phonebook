import { NavLink } from 'react-router-dom';
import { StyledLink, Nav } from './Navigation.styled';
export const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </Nav>
  );
};
