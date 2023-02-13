import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colors} from "shared/lib/constants";

export const HeaderWrapper = styled.header`
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 22px -1px ${colors.blue};
`
export const NavLinkS = styled(NavLink)`
  display: block;
  text-decoration: none;
  box-sizing: border-box;
  color: inherit;
  transition: all ease-in-out .1s;
  :hover {
    color: ${colors.blue};
  }
`