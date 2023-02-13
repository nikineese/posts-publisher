import {useEvent, useList, useStore} from "effector-react";
import * as postsModel from "./model";
import {format} from "date-fns";
import {DateFormats} from "shared/lib/constants";
import {PostsListDeleteButton, PostsListItem, PostsListNickname, PostsListWrapper} from "./styled";
import {User, userApi} from "shared/api";

export const PostsList = ({ user }: { user?: User | null }) => {

    const authorizedUser = useStore(userApi.$user)

    const handleDeletePost = useEvent(postsModel.postDeleteClicked)

    const postsList = useList(postsModel.$posts, (post) => {
        if (user && post.author?.uid !== user.uid) return
        return (
        <PostsListItem key={post.id}>
            <div>
                <PostsListNickname>{post.author?.nickname}</PostsListNickname>
                <p>{post.message}</p>
                <p>{format(new Date(post.publishedAt), DateFormats.DayMonthYear)}</p>
            </div>
            {authorizedUser?.uid === post.author?.uid && <PostsListDeleteButton onClick={() => handleDeletePost(post)}>Delete</PostsListDeleteButton>}
        </PostsListItem>
    )})
    return (
        <PostsListWrapper>{postsList}</PostsListWrapper>
    )
}