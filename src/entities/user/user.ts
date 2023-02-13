import {createEvent, sample} from "effector";
import * as userApi from 'shared/api/user'
import {UserLoginData, UserSignUpData} from "shared/api/user";

export const userSignUp = createEvent<UserSignUpData>()
export const userLogin = createEvent<UserLoginData>()
export const userSignOut = createEvent()

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