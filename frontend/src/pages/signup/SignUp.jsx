import React from 'react'
import { GenderCheckbox } from './GenderCheckbox.jsx'
export const SignUp = () => {
  return <div  className='flex flex-col item-center justify-center min-w-96 mx-auto'>

<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
    bg-opacity-0'>  

    <h1 className='text-3xl font-semibold text-center text-gray-300'>
        Sign Up <span className='text-blue-500'>ChitChat</span>
    </h1>

    <form >

    <div>
		<label className='label p-2'>
			<span className='text-base label-text'>Full Name</span>
			</label>
			<input
				type='text'
				placeholder='Navdeep Singh'
				className='w-full input input-bordered  h-10'
				// value={inputs.fullName}
				// onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
				// value={inputs.fullName}
				// onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
				// value={inputs.fullName}
				// onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
				// value={inputs.fullName}
				// onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>
	</div>

    <GenderCheckbox />

    <a className='text-sm hover:underline hover-text-blue-600 mt-2 inline-block' 
    href="#">
        Already have an account? Login
    </a>

    <div>
        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
    </div>
    </form>
    </div>

  </div>
}