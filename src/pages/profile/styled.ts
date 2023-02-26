import styled from "styled-components";
import {alignCss, colors} from "shared/lib/constants";
import {Button} from "shared/lib/ui";

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 800px;
  flex-direction: column;
`
export const ProfileNickname = styled.span`
  font-weight: bold;
  font-size: 20px;
`
export const ProfileLogoutButton = styled(Button)`
  background-color: ${colors.red};
  ${alignCss.topRight}
`
export const ProfileEmail = styled.span`
  color: ${colors.blackT30};
  font-size: 14px;
`
export const ProfilePostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`