// import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';


const useLogin = () => {
  const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {

        const success = handleInputErrors(username, password)
        if(!success){
            toast.error("something wrong from success in handleinputs");
            return ;
            
            // Little note you should always check for return of functions, only if you remember how much problem tihs gave me
            // finally back to this code 

            // had problem with server side as i wasnot storing confirmpassowrd
            // on backend
        }

        setLoading(true);
        try {


            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ username, password }),
            })

            const data =  await response.json();
            if (data.error) {
                console.log("inside response ok")
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


function handleInputErrors( username, password) {
    if(!username || !password ) {
        toast.error("Please fill in all fields coming from userLogin");
        return false;
    }

    return true;
}
