import {useStore} from "effector-react";
import * as authModel from 'pages/auth/model'
import {HeaderWrapper, NavLinkS} from "./styled";

export const Header = () => {
    const user = useStore(authModel.$user)

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