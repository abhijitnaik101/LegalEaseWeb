import React from 'react';

const Login = () => {
    return (
        <>
            <div className='h-screen w-[100%] flex justify-center items-center'>
                <div className='right flex items-center justify-center mx-auto flex-col bg-white p-8 border-[2px] rounded-xl w-1/4'>
                    <div className='flex flex-col items-start'>
                        <div className=''>Email</div>
                        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='text' placeholder='Email address' />
                        <div className=''>Password</div>
                        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='password' placeholder='Password' />
                    </div>
                    <button className='bg-blue-600 text-white py-[5px] px-[10px] my-2 rounded-md font-bold'>Log in</button>
                    <span className='text-blue-500 text-center text-sm my-2 hover:underline'>Forgot password</span>
                    <hr />
                    <button className='btn bg-green-600 text-white font-bold text-sm py-[8px] px-[10px] mx-auto rounded-[3px]'>Create new account</button>
                </div>
            </div>
        </>
    )
}

export default Login