import styled from "styled-components";
import {alignCss, colors} from "shared/lib/constants";
import {Button} from "shared/lib/uiKit";

export const PostsListItem = styled.li`
  position: relative;
  border: 1px solid ${colors.blackT30};
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const PostsListWrapper = styled.ul`
  padding: 0;
  margin: 0;
`
export const PostsListNickname = styled.span`
  font-weight: bold;
`

export const PostsListDeleteButton = styled(Button)`
  background-color: ${colors.red};
  ${alignCss.bottomRight}
`