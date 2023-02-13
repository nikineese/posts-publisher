import {useStore} from "effector-react";
import {HeaderWrapper, NavLinkS} from "./styled";
import { userApi } from "shared/api";

export const Header = () => {
    const user = useStore(userApi.$user)

    return (
        <HeaderWrapper>
            <NavLinkS to='/'>Home</NavLinkS>
            {!user?.uid
                ? <NavLinkS to='/auth'>Login/Sign Up</NavLinkS>
                : <NavLinkS to='/profile'>
                    {user.nickname}
                </NavLinkS>
            }
        </HeaderWrapper>
    )
}