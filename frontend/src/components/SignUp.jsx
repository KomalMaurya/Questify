// import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import element from '/element.jpg';
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';




const SignUp = () => {
    return (
        <>
            <div className="signup-container flex-wrap flex items-center justify-center w-[100vw] min-h-[100vh]">
                <div className="signup flex min-h-[80vh] rounded-2xl w-[60vw] items-center flex-wrap justify-around bg-[var(--primary-color)]">
                    <div className="side-text rounded-l-2xl flex flex-col items-center gap-[20px] min-h-[80vh] relative w-[40%] bg-[var(--primary-color)]">
                        <div className="text flex flex-col w-[100%] mt-[20px] items-center gap-[20px]">
                            <h1 className="text-3xl font-bold mt-6 text-white text-center">Questify</h1>
                            <p className='text-white font-light text-xl text-center'>Transform your goals into epic achievements with Questify!</p>
                            <img src={element} className='element z-30 relative right-[-20%] rounded-md' alt="" />
                        </div>
                    </div>
                    <div className="form-div flex rounded-2xl gap-[20px] flex-col items-center min-h-[80vh] relative w-[60%] bg-white">
                        <h1 className="text-2xl font-bold mt-[47px] text-center text-black">Create Account</h1>
                        <div className="button-div flex-wrap flex items-center justify-center w-[100%] gap-[20px]">
                            <button className='flex items-center justify-center gap-[5px] p-[7px] rounded-md border-[1px] border-slate-500 hover:text-slate-500'> <FcGoogle className='inline' /> Sign In with Google</button>
                            <button className='flex items-center justify-center gap-[5px] p-[7px] rounded-md border-[1px] border-slate-500 hover:text-slate-500 top-[-2px] relative'> <ImLinkedin className='inline text-blue-900' /> Sign In with Linkedin</button>
                        </div>

                        <div className="or-div flex items-center justify-center w-[100%] relative uppercase">
                            OR
                        </div>

                        <form action="" className="form gap-[-12px] min-h-[40vh] w-[80%] flex flex-col items-center">

                            <input type="text" placeholder='Full Name' name='fullName' className='w-[80%] relative p-[5px] text-gray-500 focus:outline-none border-b-2 border-gray-400 h-[60px]' />
                            <label htmlFor="fullName" className='relative bottom-[40px] right-[-34%]'> <CgProfile className='h-[24px] w-[24px]'/> </label>

                            <input type="email" placeholder='Email' name='email' className='w-[80%] relative p-[5px] text-gray-500 focus:outline-none border-b-2 border-gray-400 h-[60px]' />
                            <label htmlFor="email" className='relative bottom-[40px] right-[-34%]'> <MdOutlineMail className='h-[24px] w-[24px]'/> </label>

                            <input type="password" placeholder='Password' name='fullName' className='w-[80%] relative p-[5px] text-gray-500 focus:outline-none border-b-2 border-gray-400 h-[60px]' />
                            <label htmlFor="password" className='relative bottom-[40px] right-[-34%]'> <RiLockPasswordLine className='h-[24px] w-[24px]'/> </label>

                            <button className='btn-hover w-[80%] h-[60px] rounded-md relative] text-white font-bold text-xl bg-[var(--primary-color)]'>Create Account</button>
                            <small className='ml-[3px] w-[80%] mb-[8px] mt-[7px]'>Already Have an Account? <Link to={'/login'} className='text-[var(--primary-color)] text-left hover:underline font-bold'>Login</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp