import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-style: italic;
  color: #c920fa;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  width: 150px;
`;
