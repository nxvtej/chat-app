

import { useState } from 'react'
import { Link } from "react-router-dom";
import { GenderCheckbox } from './GenderCheckbox.jsx'
import useSignup from '../../hooks/useSignup.js';

export const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: '',
	});

	// for handling checkbox change 
	
	const { loading, signup }= useSignup();

	const handCheckboxChange = (gender) => {
		setInputs({...inputs, gender});
	}

	// handling form submit 
	const handleSubmit = async (e) => {
		e.preventDefault(); //because by deault it refreshes and submit the page
							// now if i use this then console has my output
			// console.log(inputs);
		await signup(inputs) //signup returning from hooks files
	}
	
  return <div  className='flex flex-col item-center justify-center min-w-96 mx-auto'>

<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0'>  

    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500'>ChitChat</span>
    </h1>

    <form onSubmit={handleSubmit}>

    <div>
		<label className='label p-2'>
			<span className='text-base label-text'>Full Name</span>
			</label>
			<input
				type='text'
				placeholder='Navdeep Singh'
				className='w-full input input-bordered  h-10'
				value={inputs.fullName}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>
	</div>

    <div>
		<label className='label p-2'>
			<span className='text-base label-text'>Username</span>
			</label>
			<input
				type='text'
				placeholder='navdeep'
				className='w-full input input-bordered  h-10'
				value={inputs.username}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
	</div>

    <div>
		<label className='label'>
			<span className='text-base label-text'>Password</span>
			</label>
			<input
				type='password'
				placeholder='Enter Password'
				className='w-full input input-bordered  h-10'
				value={inputs.password}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>
	</div>

    <div>
		<label className='label'>
			<span className='text-base label-text'>Confirm Password</span>
			</label>
			<input
				type='password'
				placeholder='Confirm Password'
				className='w-full input input-bordered  h-10'
				value={inputs.confirmPassword}
				onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
			/>
	</div>

    <GenderCheckbox onCheckboxChange = {handCheckboxChange} selectedGender = {inputs.gender} />

    <Link to={"/login"} 
	className='text-sm hover:underline hover-text-blue-600 mt-2 inline-block' 
	href="#"
    >
        Already have an account? Login
    </Link>

    <div>
		<button className='btn btn-block btn-sm mt-2 border border-slate-700' 
		disabled={loading}>
		{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
		</button>
	</div>
    </form>
    </div>

  </div>
}


// import { useState } from 'react';
// import { Link } from "react-router-dom";
// import { GenderCheckbox } from './GenderCheckbox.jsx';
// import useSignup from '../../hooks/useSignup.js';

// export const SignUp = () => {
//     const [inputs, setInputs] = useState({
//         fullName: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         gender: '',
//     });

//     // for handling checkbox change 
//     const { loading, signup } = useSignup();

//     const handleCheckboxChange = (gender) => {
//         setInputs({ ...inputs, gender });
//     };

//     // handling form submit 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form Inputs:', inputs); // Log the form inputs for debugging
//         await signup(inputs);
//     };

//     return (
//         <div className='flex flex-col item-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up <span className='text-blue-500'>ChitChat</span>
//                 </h1>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Navdeep Singh'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.fullName}
//                             onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='navdeep'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.username}
//                             onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Enter Password'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.password}
//                             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Confirm Password'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.confirmPassword}
//                             onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//                         />
//                     </div>
//                     <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
//                     <Link to="/login" className='text-sm hover:underline hover-text-blue-600 mt-2 inline-block'>
//                         Already have an account? Login
//                     </Link>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
//                             {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
