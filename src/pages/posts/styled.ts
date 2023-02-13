import styled from "styled-components";
import {colors} from "shared/lib/constants";
import {Button} from "shared/lib/uiKit";


export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const PostsPublishWrapper = styled.form`
  position: relative;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 10px;
  border: 1px solid ${colors.blackT30};
  padding: 10px;
`
export const PostsListPublishButton = styled(Button)`
  margin-left: auto;
`
