import {createEvent, restore, sample} from "effector";
import {userApi} from "shared/api";

export const nicknameChanged = createEvent<string>()
export const passwordChanged = createEvent<string>()
export const emailChanged = createEvent<string>()
export const userChanged = createEvent<string | null>()
export const authTypeChanged = createEvent<boolean>()

export const $authType = restore(authTypeChanged, false)

export const $email = restore(emailChanged, '').reset(authTypeChanged)
export const $nickname = restore<string>(nicknameChanged, '').reset(authTypeChanged)
export const $password = restore<string>(passwordChanged, '').reset(authTypeChanged)

sample({
    clock: userChanged,
    target: userApi.getAuthUserFx
})

