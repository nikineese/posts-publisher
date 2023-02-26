import {AuthItemsWrapper, AuthWrapper} from "./styled";
import {useEvent, useStore} from "effector-react";
import * as model from './model'
import {AuthType} from "shared/api";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect} from "react";
import {Input, Button} from "shared/lib/ui";
import { userEntity } from "entities/user";

export const AuthPage = () => {
    const navigate = useNavigate()

    const userSignUp = useEvent(userEntity.userSignUp)
    const nicknameChanged = useEvent(model.nicknameChanged)
    const emailChanged = useEvent(model.emailChanged)
    const passwordChanged = useEvent(model.passwordChanged)
    const userLogin = useEvent(userEntity.userLogin)
    const authTypeChanged = useEvent(model.authTypeChanged)

    const user = useStore(userEntity.$user)
    const authType = useStore(model.$authType)
    const nickname = useStore(model.$nickname)
    const email = useStore(model.$email)
    const password = useStore(model.$password)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    },[user])

    return (
        <AuthWrapper>
            <AuthItemsWrapper onSubmit={(e) => {
                e.preventDefault()
                return authType ? userLogin({ email, password }) : userSignUp({ email, nickname, password })}
            }>
                <Button onClick={() => authTypeChanged(!authType)}>{authType ? AuthType.SIGNUP : AuthType.LOGIN}</Button>
                <Input required title='Email' type='text' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => emailChanged(e.target.value)} />
                {!authType &&
                    <Input required title='Username' type='text' value={nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => nicknameChanged(e.target.value)} />}
                <Input required title='Password' type='password' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => passwordChanged(e.target.value)} />
                <Button>
                    {authType ? AuthType.LOGIN : AuthType.SIGNUP}
                </Button>
            </AuthItemsWrapper>
        </AuthWrapper>
    )
}