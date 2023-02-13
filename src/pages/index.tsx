import React, {useEffect} from "react";
import { PostsPage } from './posts'
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {AuthPage} from "./auth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "shared/api/firebase";
import {useEvent} from "effector-react";
import * as authModel from './auth/model'
import {PagesWrapperS} from "./styled";
import {ProfilePage} from "./profile";
import {Header} from "entities/header";
export const Pages = () => {
    const handleUserChange = useEvent(authModel.userChanged)
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user){
                const uid = user.uid
                handleUserChange(uid)
            } else {
                handleUserChange(null)
            }
        })
    })
    return (
    <BrowserRouter>
        <div>
            <Header/>
            <PagesWrapperS>
                <Routes>
                    <Route path='/' element={<PostsPage/>} />
                    <Route path='/auth' element={<AuthPage/>} />
                    <Route path='/profile' element={<ProfilePage/>} />
                </Routes>
            </PagesWrapperS>
        </div>
    </BrowserRouter>
)}