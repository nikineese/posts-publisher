import styled from "styled-components";
import {colors} from "shared/lib/constants";

export const ExpandingInputWrapper = styled.textarea<{error: Error}>`
  resize: none;
  max-height: 250px;
  min-width: 500px;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid ${colors.blue};
  font-family: inherit;
  background-color: inherit;
  ::placeholder {
    ${({ error }) => error.message && `color: red`}
  }
`