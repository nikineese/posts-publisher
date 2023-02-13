import {createEffect, createStore} from "effector";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, db} from "./firebase";

export type UserSignUpData = {
    email: string
    nickname: string
    password: string
}
export enum AuthType {
    LOGIN = 'Login',
    SIGNUP = 'Sign Up',
}
export type User = Omit<UserSignUpData, 'password'> & { uid: string }
export type UserLoginData = Omit<UserSignUpData, 'uid' | 'nickname' | 'createdAt'>

export const getAuthUserFx = createEffect(async (uid: string | null) => {
    if (!uid) return null
    const docRef = doc(db, 'users',uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data() as User
    }
    throw { message: 'User not found' }
})
export const signUpUserFx = createEffect(async (user: UserSignUpData) => {
    const response = await createUserWithEmailAndPassword(auth, user.email, user.password)
    const userRef = doc(db,'users', response.user.uid)
    await setDoc(userRef, { uid: response.user.uid, email: user.email, nickname: user.nickname , createdAt: new Date().toISOString()})
    const docSnap = await getDoc(userRef)

    if (docSnap.exists()){
        return docSnap.data() as User
    } else return
})
export const loginUserFx = createEffect(async ({ email, password }: UserLoginData) => {
    const response = await signInWithEmailAndPassword(auth, email, password)

    const docRef = doc(db, 'users', response.user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap.data() as User
    } else return
})
export const signOutUserFx = createEffect(async () => {
    await signOut(auth)
    return
})

export const $user = createStore<User | null>(null)
$user.on(getAuthUserFx.doneData, (_, user) => user)