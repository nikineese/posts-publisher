import { createEvent, merge, restore, sample } from "effector";
import {userApi} from "shared/api";

export const nicknameChanged = createEvent<string>()
export const passwordChanged = createEvent<string>()
export const emailChanged = createEvent<string>()
export const userChanged = createEvent<string | null>()
export const authTypeChanged = createEvent<boolean>()
export const userDataCleared = merge([authTypeChanged, userChanged])

export const $authType = restore(authTypeChanged, false)

export const $email = restore(emailChanged, '').reset(userDataCleared)
export const $nickname = restore<string>(nicknameChanged, '').reset(userDataCleared)
export const $password = restore<string>(passwordChanged, '').reset(userDataCleared)

sample({
    clock: userChanged,
    target: userApi.getAuthUserFx
})

