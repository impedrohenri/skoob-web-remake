'use client'

import React, { createContext, ReactNode, useEffect, useState } from "react";

interface IAuthProviderProps{
    children: ReactNode
}

interface IAuthContext{
    userCookie: string;
    setUserCookie: React.Dispatch<React.SetStateAction<string>>;
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    userData: IUsuarioData;
    setUserData: React.Dispatch<React.SetStateAction<IUsuarioData>>;
}

const noop = () => {}; 

const AuthContext = createContext<IAuthContext>({
  userCookie: '',
  setUserCookie: noop as React.Dispatch<React.SetStateAction<string>>,
  userId: '',
  setUserId: noop as React.Dispatch<React.SetStateAction<string>>,
  userData: {} as IUsuarioData,
  setUserData: noop as React.Dispatch<React.SetStateAction<IUsuarioData>>,
});

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) =>{
    const [userCookie, setUserCookie] = useState("");
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState({} as IUsuarioData);

    useEffect(()=>{
        setUserId(localStorage.getItem('user@id') || '')
    }, [])

    return (
        <AuthContext.Provider value={{ userCookie, setUserCookie, userId, setUserId, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;