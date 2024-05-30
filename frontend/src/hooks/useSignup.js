// import { compareSync } from "bcrypt";
import { useState } from "react"
import toast from "react-hot-toast";


  
const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {

        const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        if(!success){
            toast.error("something wrong");
            return ;
            /*
            Little note you should always check for return of functions, only if you remember how much problem tihs gave me
            
            */
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, gender}),
            })

            // console.log("just above the data from useSignup");
            const data = await res.json();
            console.log(data);
            
        } catch(error){
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return {loading, signup};
    }


export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Password do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("passowrd must be at leasat 6 character")
        return false;
    }

    return true;
}
