import styled from "styled-components";
import {colors} from "shared/lib/constants";

export const Button = styled.button`
  width: 80px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.blue};
  padding: 10px;
  color: white;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 15px 0 ${colors.blueT50}
  }
`