import {createEvent, createStore, restore, sample} from "effector";
import {User, userApi} from "shared/api";

export const nicknameChanged = createEvent<string>()
export const passwordChanged = createEvent<string>()
export const emailChanged = createEvent<string>()
export const userChanged = createEvent<string | null>()
export const userSignUp = createEvent()
export const userLogin = createEvent()
export const userSignOut = createEvent()
export const authTypeChanged = createEvent<boolean>()

export const $authType = restore(authTypeChanged, false)
export const $user = createStore<User | null>(null)
export const $email = restore(emailChanged, '').reset(authTypeChanged)
export const $nickname = restore<string>(nicknameChanged, '').reset(authTypeChanged)
export const $password = restore<string>(passwordChanged, '').reset(authTypeChanged)

sample({
    clock: userSignUp,
    source: { email: $email, nickname: $nickname, password: $password },
    target: userApi.signUpUserFx
})

sample({
    clock: userLogin,
    source: { email: $email, password: $password },
    target: userApi.loginUserFx
})

sample({
    clock: userSignOut,
    target: userApi.signOutUserFx
})

sample({
    clock: userChanged,
    target: userApi.getAuthUserFx
})
$user.on(userApi.getAuthUserFx.doneData, (_, user) => user)
