import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import element from '/element.jpg';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

import { Link } from 'react-router-dom';





const Login = () => {
    const loginwithGoogle=()=>{
        window.open("https://software-project-indol.vercel.app/auth/google/callback","_self")
    }
    return (
        <>
            <div className="Login-container flex-wrap flex items-center justify-center w-[100vw] min-h-[100vh]">
                <div className="Login flex min-h-[80vh] rounded-2xl w-[60vw] items-center flex-wrap justify-around bg-[var(--primary-color)]">
                    <div className="side-text rounded-l-2xl flex flex-col items-center gap-[20px] min-h-[80vh] relative w-[40%] bg-[var(--primary-color)]">
                        <div className="text flex flex-col w-[100%] mt-[20px] items-center gap-[20px]">
                            <h1 className="text-3xl font-bold mt-6 text-white text-center">Questify</h1>
                            <p className='text-white font-light text-medium text-center'>Transform your goals into epic achievements with Questify!</p>
                            <img src={element} className='element z-30 relative right-[-20%] rounded-md' alt="" />
                        </div>
                    </div>
                    <div className="form-div flex rounded-2xl gap-[20px] flex-col items-center min-h-[80vh] relative w-[60%] bg-white">
                        <h1 className="text-3xl font-bold mt-[47px] text-center text-black">Login</h1>
                        <div className="button-div flex-wrap flex items-center justify-center w-[100%] gap-[20px]">
                            <button className='flex items-center justify-center gap-[5px] p-[7px] rounded-md border-[1px] border-slate-500 hover:text-slate-500' onClick={loginwithGoogle}> <FcGoogle className='inline' /> Sign In with Google</button>
                            <button className='flex items-center justify-center gap-[5px] p-[7px] rounded-md border-[1px] border-slate-500 hover:text-slate-500 top-[-2px] relative'> <ImGithub className='inline text-black' /> Sign In with GitHub</button>
                        </div>

                        <div className="or-div flex items-center justify-center w-[100%] relative uppercase">
                            OR
                        </div>

                        <form action="" className="form gap-[-12px] min-h-[40vh] w-[80%] flex flex-col items-center">

                            <input type="text" placeholder='Username' name='username' className='w-[80%] relative p-[5px] text-gray-500 focus:outline-none border-b-2 border-gray-400 h-[60px]' />
                            <label htmlFor="username" className='relative bottom-[40px] right-[-34%]'> <CgProfile className='h-[24px] w-[24px]' /> </label>


                            <input type="password" placeholder='Password' name='password' className='w-[80%] relative p-[5px] text-gray-500 focus:outline-none border-b-2 border-gray-400 h-[60px]' />
                            <label htmlFor="password" className='relative bottom-[40px] right-[-34%]'> <RiLockPasswordLine className='h-[24px] w-[24px]' /> </label>

                            <p className='text-[14px] underline text-right flex justify-end w-[80%] relative mb-[20px]'> {`I can't Remember my LoginID`} </p>
                            <div className="continue-div flex-wrap w-[80%] flex justify-end gap-[10px]">
                                <div className="text-con text-right">
                                    <small className='text-[14px]'>{`Don't Have an Account?`}</small>
                                    <p className='text-[20px] text-right'>Back to <Link to="/Signup" className='text-[var(--primary-color)] font-bold'>Signup</Link> </p>
                                </div>
                                <button className='btn-hover w-[140px] h-[60px] rounded-md relative] text-white font-bold text-medium bg-[var(--primary-color)]'>Continue</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login