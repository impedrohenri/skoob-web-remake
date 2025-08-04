'use client'
import { createContext, ReactNode, useState } from "react"

interface ThemeContextProps{
    children: ReactNode
}

interface ThemeMode{
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    mode: string,
    setMode: React.Dispatch<React.SetStateAction<string>>,
}

const noop = () => {}; 

const ThemeContext = createContext<ThemeMode>({
    theme: 'light',
    setTheme: noop as React.Dispatch<React.SetStateAction<string>>,
    mode: 'skoob',
    setMode: noop as React.Dispatch<React.SetStateAction<string>>
});

export const ThemeProvider: React.FC<ThemeContextProps> = ({children}) => {
    const [theme, setTheme] = useState('teste')
    const [mode, setMode] = useState('teste')

    return (
        <ThemeContext.Provider value={{theme, setTheme, mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;