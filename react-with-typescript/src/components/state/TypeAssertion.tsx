import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

// Use Type Assertion to let typescript  know user is always type Authuser and won't be null .

export const TypeAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);


    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>Email is {user.email}</div>
        </div>
    )
}