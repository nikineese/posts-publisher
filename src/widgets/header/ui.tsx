import {useStore} from "effector-react";
import {HeaderWrapper, NavLinkS} from "./styled";
import { userEntity } from 'entities/user'

export const Header = () => {
    const user = useStore(userEntity.$user)

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