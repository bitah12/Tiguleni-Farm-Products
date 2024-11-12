import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = ()=> {
    return (

        <div className='flex justify-center items-center ml-80 py-64'>
            <div className = "bg-white grid md:grid-cols-4 gap-7 items-center py-64">
                    
                <div className='bg-orange-500 p-20 w-96 max-h justify-normal'>
                    <img src="https://img.freepik.com/premium-vector/smartphone-with-purchase-icon-screen-place-red-shopping-cart-with-unfolded-receipt-paper-draped-edge-shopping-cart-online-shopping-conceptvector-3d-isolated-orange-backgroud_425581-1.jpg?w=740" alt="Shopping basket" className="h-auto w-full" />
                </div>

                <div className= 'bg-white p-20 w-96 max-h justify-normal'>
                    <h1 className='font-bold text-center-9pxl mb-6'>Create an account</h1>
                    <p className='text-gray-500 mb-6'>Enter your details below</p>
                    <form className='space-y-8'>
                        <div>
                           <input 
                                type='text' 
                                placeholder='Name or email' 
                                className='w-full border rounded-md px-7 py-3'>
                            </input>
                        </div>
                        <div>
                            <input
                                type='password'
                                placeholder='Password' 
                                className='w-full border rounded-md px-7 py-3'>
                            </input>
                        </div>
                            <select className='w-full border rounded-md px-7 py-3'>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
    
                            </select>
                        <button
                            type='submit' 
                            className='hover:bg-red-900 transition-colors w-full bg-red-500 text-white rounded-md py-4 px-10 justify-center'>
                                Create account
                        </button>
                        <div className='text center mt-5'>
                            <span className='text-gray-500'>Already have an account?</span>{''}
                            <Link to = "/">
                            <a href='#' className='text-blue-800'>Log in</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
    
};

export default SignUpPage;
