import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';


const useLogin = () => {
  const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ username, password })
            })

            const data =  await response.json();
            if (!response.ok) {
                throw new Error (data.error);
            }


            localStorage.setItem(
            "chat-user", JSON.stringify(data)
            )
            setAuthUser(data);

        } catch(error){
            console.log("from inside catch of uselogin")
            toast.error(error.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }


    return {loading, login}
}

export default useLogin