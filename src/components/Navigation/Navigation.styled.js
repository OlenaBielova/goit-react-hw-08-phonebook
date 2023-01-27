import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    color: rgb(7, 132, 249);
    cursor: pointer;
  }

  &.active {
    color: rgb(7, 132, 249);
  }
`;
