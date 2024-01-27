import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  font-size: 25px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    color: rgb(84, 13, 13);
  }

  &.active {
    color: rgb(84, 13, 13);
  }
`;

export const NavContact = styled.div`
  display: inline-block;
  margin-left: 20px;
`;
