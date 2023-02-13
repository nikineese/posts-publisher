import {useEffect} from "react";
import {useEvent, useStore} from "effector-react";
import * as postsPageModel from './model'
import {
    PostsListPublishButton,
    PostsPublishWrapper,
    PostsWrapper,
} from "./styled";
import {createGuid} from "shared/lib/guid";
import {ExpandingInput} from "shared/lib/uiKit";
import {Wrapper} from "../styled";
import {PostsList} from "widgets";
import { userEntity } from "entities/user";


export const PostsPage = () => {
    const message = useStore(postsPageModel.$postMessage)
    const user = useStore(userEntity.$user)

    const handlePostMessageChange = useEvent(postsPageModel.postMessageChanged)
    const handlePublishPost = useEvent(postsPageModel.postPublishClicked)

    useEffect(() => {
        postsPageModel.pageMounted()
    },[user])

    return (
        <Wrapper>
            <PostsWrapper>
                <PostsPublishWrapper onSubmit={(e) => {
                    e.preventDefault()
                    handlePublishPost({ id: createGuid(), author: user, message, publishedAt: new Date().toISOString() })
                }}>
                    <ExpandingInput
                        id='message'
                        value={message}
                        onChange={(e) => handlePostMessageChange(e.target.value)}
                        placeholder="What's news?"
                    />
                    <PostsListPublishButton type='submit'>Publish</PostsListPublishButton>
                </PostsPublishWrapper>
                <PostsList/>
            </PostsWrapper>
        </Wrapper>
    )
}