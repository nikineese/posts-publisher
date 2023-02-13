import {createEffect} from "effector";
import { doc, setDoc, getDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import {db} from "./firebase";
import {User} from "./user";


export type Post = {
    id: string
    author: User | null
    message: string
    publishedAt: string
}

export const loadPostsFx = createEffect(async () => {
    const posts = await getDocs(collection(db, "posts"))
    return posts.docs.map((post) => post.data() as Post).reverse()
})
export const publishPostFx = createEffect(async ({ id, author, publishedAt, message }: Post) => {
    const postsRef = doc(db, 'posts', id)
    await setDoc(postsRef, { id, author, message, publishedAt })
    const snapPost = await getDoc(postsRef)
    if (snapPost.exists()){
        return snapPost.data() as Post
    }
    return {} as Post
})
export const deletePostFx = createEffect(async (post: Post) => {
    const postRef = doc(db,'posts', post.id)
    return deleteDoc(postRef)
})