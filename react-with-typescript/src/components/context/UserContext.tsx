import { createContext, useState } from "react"


export type AuthUser = {
    name: string,
    email: string
}

type contextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
 user: AuthUser | null
 setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// there is one detail we can improve in this one example .
// we can use the type Assertion again 
// this will allow us to get rid of null check against the User Context .
// Context always need to be created outside of the Component .
// where as it's future value always set inside the component .


export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children}: contextProviderProps) => {
    // how ever we also know that in the future user could login .

    const [user, setUser] = useState<AuthUser | null>(null);
    return <UserContext.Provider value={{ user, setUser}}>{children}</UserContext.Provider>

}