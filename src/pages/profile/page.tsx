import {useEvent, useStore} from "effector-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import * as authModel from "../auth/model";
import {ProfileEmail, ProfileLogoutButton, ProfileNickname, ProfilePostsWrapper, ProfileWrapper} from "./styled";
import {Wrapper} from "../styled";
import {PostsList} from "../../entities/posts";
export const ProfilePage = () => {
    const navigate = useNavigate()

    const userSignOut = useEvent(authModel.userSignOut)

    const user = useStore(authModel.$user)

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