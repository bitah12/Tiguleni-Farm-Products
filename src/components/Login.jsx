import React from 'react';

const LogInPage = ()=> {
    return (
        <div className='bg-white-500 min-h-screen'>
            <div  className="max-w-6 px-5 py-8"></div>
                <div className ="items-center grid md:grid-cols-4 gap-7 flex-justify-center">
                    <div className='bg-orange-600 p-20 w-96 max-h justify-normal py-56 '>
                        <img src="" alt="Shopping basket" className="h-auto w-full" />
                    </div>
                <div className='bg-white p-20 w-96 max-h justify-normal py-56 '>
                    <h2 className='font-bold text-center-9pxl mb-6'>Create an account</h2>
                    <p className='text-gray-500 mb-6'>Enter your details below</p>
                    <form className='space-y-8'>
                        <div>
                           <input type='text' placeholder='Name' className='w-full border rounded-md px-7 py-3'></input>
                        </div>
                        <div>
                            <input type='password' placeholder='Password' className='w-full border rounded-md px-7 py-3'></input>
                        </div>
                        <button type='submit' className='hover:bg-red-600 transition-colors w-full bg-red-500 text-white rounded-md py-4 px-10 justify-center'>Create account</button>
                        <div className='text center mt-5'>
                            <span className='text-gray-500'>Already have an account?</span>{''}
                            <a href='#' className='text-blue-700'>Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        
        </div>
        
    );
    
};

export default LogInPage;