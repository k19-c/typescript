import { createContext } from "react"
import { theme } from "./theme"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext1 = createContext(theme);


export const ThemeContextProvider = ({ children} : ThemeContextProviderProps) => {

    return <ThemeContext1.Provider value={theme}>{children}</ThemeContext1.Provider>
}