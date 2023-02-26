import {useEffect} from "react";
import {useEvent, useStore} from "effector-react";
import * as model from './model'
import {
    PostsListPublishButton,
    PostsPublishWrapper,
    PostsWrapper,
} from "./styled";
import {createGuid} from "shared/lib/guid";
import {ExpandingInput} from "shared/lib/ui";
import {Wrapper} from "../styled";
import {PostsList} from "widgets";
import { userEntity } from "entities/user";


export const PostsPage = () => {
    const message = useStore(model.$postMessage)
    const user = useStore(userEntity.$user)
    const error = useStore(model.$error)

    const handlePostMessageChange = useEvent(model.postMessageChanged)
    const handlePublishPost = useEvent(model.postPublishClicked)

    useEffect(() => {
        model.pageMounted()
    },[user])

    return (
        <Wrapper>
            <PostsWrapper>
                <PostsPublishWrapper onSubmit={(e) => {
                    e.preventDefault()
                    handlePublishPost({ id: createGuid(), author: user, message, publishedAt: new Date().toISOString() })
                }}>
                    <ExpandingInput
                      error={error}
                      id='message'
                      value={message}
                      onChange={(e) => handlePostMessageChange(e.target.value)}
                      placeholder={error.message ? error.message : "What's news?"}
                    />
                    <PostsListPublishButton type='submit'>Publish</PostsListPublishButton>
                </PostsPublishWrapper>
                <PostsList/>
            </PostsWrapper>
        </Wrapper>
    )
}