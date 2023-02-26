import { createEvent, createStore, sample } from "effector";
import * as userApi from 'shared/api/user'
import { getAuthUserFx, User, UserLoginData, UserSignUpData } from "shared/api/user";

export const userSignUp = createEvent<UserSignUpData>()
export const userLogin = createEvent<UserLoginData>()
export const userSignOut = createEvent()
export const $user = createStore<User | null>(null)
$user.on(getAuthUserFx.doneData, (_, user) => user)


sample({
    clock: userSignUp,
    target: userApi.signUpUserFx
})

sample({
    clock: userLogin,
    target: userApi.loginUserFx
})

sample({
    clock: userSignOut,
    target: userApi.signOutUserFx
})