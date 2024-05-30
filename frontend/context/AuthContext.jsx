import  { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ childern }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    
    return <AuthContextProvider value = {{authUser, setAuthUser}}>
        {childern}
    </AuthContextProvider>
}