import {createEvent, createStore, sample} from "effector";
import {Post, postsApi} from "shared/api";

export const postDeleteClicked = createEvent<Post>()

export const $posts = createStore<Post[]>([])

$posts.on(postsApi.publishPostFx.doneData, (posts, post) => [post, ...posts])

sample({
    clock: postDeleteClicked,
    target: postsApi.deletePostFx,
})
$posts.on(postsApi.deletePostFx.done, (posts, { params: toDelete }) => posts.filter((post) => post.id !== toDelete.id))
$posts.on(postsApi.loadPostsFx.doneData, (_, data) => data)