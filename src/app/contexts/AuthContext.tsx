'use client'

import React, { createContext, ReactNode, useState } from "react";

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
    const [userId, setUserId] = useState(localStorage.getItem('user@id')||'');
    const [userData, setUserData] = useState({} as IUsuarioData);

    return (
        <AuthContext.Provider value={{ userCookie, setUserCookie, userId, setUserId, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;