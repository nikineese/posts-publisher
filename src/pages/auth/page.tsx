import {AuthItemsWrapper, AuthWrapper} from "./styled";
import {useEvent, useStore} from "effector-react";
import * as model from './model'
import {AuthType} from "shared/api";
import {useNavigate} from "react-router-dom";
import {Input} from "../../entities";
import {ChangeEvent, useEffect} from "react";
import {Button} from "entities/general/button";

export const AuthPage = () => {
    const navigate = useNavigate()

    const userSignUp = useEvent(model.userSignUp)
    const nicknameChanged = useEvent(model.nicknameChanged)
    const emailChanged = useEvent(model.emailChanged)
    const passwordChanged = useEvent(model.passwordChanged)
    const userLogin = useEvent(model.userLogin)
    const authTypeChanged = useEvent(model.authTypeChanged)

    const user = useStore(model.$user)
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
            <AuthItemsWrapper>
                <Button onClick={() => authTypeChanged(!authType)}>{authType ? AuthType.SIGNUP : AuthType.LOGIN}</Button>
                <Input title='Email' type='text' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => emailChanged(e.target.value)} />
                {!authType &&
                    <Input title='Username' type='text' value={nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => nicknameChanged(e.target.value)} />}
                <Input title='Password' type='password' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => passwordChanged(e.target.value)} />
                <Button onClick={authType ? userLogin : userSignUp}>{authType ? AuthType.LOGIN : AuthType.SIGNUP}</Button>
            </AuthItemsWrapper>
        </AuthWrapper>
    )
}