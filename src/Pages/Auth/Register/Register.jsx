import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='w-full bg-white py-[70px]'>
            <div className="lg:container mx-auto">
                <div className="flex items-center justify-between gap-10 max-lg:flex-col">
                
                    <div className='max-w-[949px] w-full h-[1077px] max-lg:h-[520px]'>
                        <img className='w-full h-full object-cover max-lg:h-[520px] max-lg:object-contain' src="/auth/auth_image_2.jpg" alt="login image" />
                    </div>

                    
                    <div className='max-w-[628px] w-full h-auto'>
                        <h3 className='text-6xl text-[#484848] font-normal uppercase mb-9'>charm</h3>
                            
                        <form className='w-full h-auto flex flex-col gap-4.5 items-center'>
                            
                            <div className='w-full h-[47px] border-b-[2px] border-[#9d9d9d]'>
                                <input className='w-full h-full border-none outline-0' type="text" placeholder='Your Name!' required />
                            </div>
                           
                            <div className='w-full h-[47px] border-b-[2px] border-[#9d9d9d]'>
                                <input className='w-full h-full border-none outline-0' type="email" placeholder='Enter your email...' required />
                            </div>
                            
                            <div className='w-full h-[47px] border-b-[2px] border-[#9d9d9d]'>
                                <input className='w-full h-full border-none outline-0' type="email" placeholder='Enter your password...' required />
                            </div>
                            <div className='w-full h-auto flex items-center justify-center'>

                                <button className='max-w-[575px] w-full h-[60px] bg-black rounded-lg text-white text-xl font-poppins font-semibold capitalize flex items-center justify-center cursor-pointer mt-6' type='submit'>sign in</button>
                            </div>

                        </form>
                        <div className='w-full h-auto flex flex-col items-center justify-center mt-8 gap-4.5'>

                            
                            <p className='max-w-[575px] w-full text-black flex items-center gap-3 justify-center'>Already have an account? <Link to={'/login'} className='text-lg font-poppins font-normal capitalize flex items-center justify-center cursor-pointer text-[#5b86e5]'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;