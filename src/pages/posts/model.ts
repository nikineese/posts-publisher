import {createEvent, restore, sample} from "effector";
import {Post, postsApi} from "shared/api";

export const postMessageChanged = createEvent<string>()
export const postPublishClicked = createEvent<Post>()

export const pageMounted = createEvent()


export const $postMessage = restore(postMessageChanged, '').reset(postPublishClicked)

sample({
    clock: postPublishClicked,
    filter: (post: Post) => {
        return !!post.author?.uid && !!post.message
    },
    target: postsApi.publishPostFx,
})



sample({
    clock: pageMounted,
    target: postsApi.loadPostsFx,
})




