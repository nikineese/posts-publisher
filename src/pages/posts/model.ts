import { createEvent, merge, restore, sample } from "effector";
import {Post, postsApi} from "shared/api";

export const postMessageChanged = createEvent<string>()
export const postPublishClicked = createEvent<Post>()
export const pageMounted = createEvent()
export const errorCleared = merge([pageMounted, postMessageChanged])

export const $error = restore(postsApi.publishPostFx.failData, { name: '', message: '' }).reset(errorCleared)
export const $postMessage = restore(postMessageChanged, '').reset(postPublishClicked)

sample({
    clock: postPublishClicked,
    target: postsApi.publishPostFx,
})

sample({
    clock: pageMounted,
    target: postsApi.loadPostsFx,
})




