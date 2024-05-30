
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
            
            // Little note you should always check for return of functions, only if you remember how much problem tihs gave me
            // finally back to this code 

            // had problem with server side as i wasnot storing confirmpassowrd
            // on backend
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password,confirmPassword,  gender}),
            })

            // console.log("just above the data from useSignup");
            const data = await res.json();
            // console.log("comming form useSignup file");
            // console.log(data);

            if(data.error){
                throw new Error(data.error);
            }

            // now have it in context, local storage
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



// import { useState } from "react";
// import toast from "react-hot-toast";


// const useSignup = () => {
//     const [loading, setLoading] = useState(false);

//     const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
//         console.log('Signup Inputs:', { fullName, username, password, confirmPassword, gender }); // Log inputs for debugging
//         const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
//         if (!success) {
//             toast.error("Something went wrong with input validation. client side");
//             return;
//         }

//         setLoading(true);
//         try {
//             const res = await fetch("/api/auth/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ fullName, username, password,confirmPassword, gender }),
//             });

//             const data = await res.json();
//             console.log('Server Response:', data); // Log server response for debugging

//             if (!res.ok) {
//                 toast.error(data.error || 'Signup failed');
//                 return;
//             }

//             toast.success('Signup successful');
//         } catch (error) {
//             toast.error(`Network Error: ${error.message}`);
//             console.error('Fetch Error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { loading, signup };
// };

// export default useSignup;

// function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
//     if (!fullName || !username || !password || !confirmPassword || !gender) {
//         toast.error("Please fill in all fields");
//         return false;
//     }
//     if (password != confirmPassword) {
//         toast.error("Passwords do not match");
//         return false;
//     }
//     if (password.length < 6) {
//         toast.error("Password must be at least 6 characters");
//         return false;
//     }
//     return true;
// }
