import {useEvent, useStore} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ProfileEmail, ProfileLogoutButton, ProfileNickname, ProfilePostsWrapper, ProfileWrapper} from "./styled";
import {Wrapper} from "../styled";
import {PostsList} from "widgets";
import { userEntity } from 'entities/user'
export const ProfilePage = () => {
    const navigate = useNavigate()

    const userSignOut = useEvent(userEntity.userSignOut)

    const user = useStore(userEntity.$user)

    useEffect(() => {
        if (!user){
            navigate('/')
        }
    }, [user])

    return (
        <Wrapper>
            <ProfileWrapper>
                <ProfileNickname>@{user?.nickname}</ProfileNickname>
                <ProfileEmail>{user?.email}</ProfileEmail>
                <ProfilePostsWrapper>
                    <span>My posts</span>
                    <PostsList user={user} />
                </ProfilePostsWrapper>
                <ProfileLogoutButton onClick={userSignOut}>Logout</ProfileLogoutButton>
            </ProfileWrapper>
        </Wrapper>

    )
}