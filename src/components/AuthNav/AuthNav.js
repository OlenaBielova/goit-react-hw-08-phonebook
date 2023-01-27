import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthNavWrapper = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;
        align-items: center;
`;

export const Link = styled(NavLink)`
color: black;
font-weight: bold;
text-decoration: none;

  &:hover {
    color: rgb(7, 132, 249);
    cursor: pointer;
  }

    &.active {
    color: rgb(7, 132, 249);
  }
`;