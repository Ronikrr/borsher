import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Link } from 'react-router-dom'
import Input from '../../components/ui/input'
import Submit from '../../components/ui/submit'
const Login = () => {

    const [ishowpss, setishowpss] = useState(false);
    return (
        <div className='flex items-center justify-center w-screen h-screen' >
            <div className="border rounded-sm border-[rgb(226,232,240)] bg-white w-[1280px] shadow-sm ">
                <div className="flex flex-wrap items-center w-full">
                    <div className="hidden w-full xl:block xl:w-1/2">
                        <div className="py-[4.375rem] text-center px-[6.5rem]">
                            <Link to="/" className='inline-block mb-5' >tailwind</Link>
                            <p className='2xl:px-20 text-[16px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.</p>
                            <span className="inline-block mt-16">
                                <img src="https://www.t3bucket.com/f/0-Group15.png" className='w-[350px] h-[350px]' alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="w-full border-[rgb(226,232,240)]  xl:w-1/2 xl:border-l-2">
                        <div className="w-full p-4 sm:p-12 xl:p-17">
                            <span className="mb-1.5 block font-medium capitalize "> start for free </span>
                            <h2 className="text-2xl text-black mb-9 font-blod">Sign In to TailAdmin</h2>
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >email</label>
                                    <div className="relative">

                                        <Input
                                            type={'email'}
                                            placeholder={'enter your email'}
                                        />
                                        <span className='absolute right-4 top-4' ><HiOutlineMail className='text-[22px] text-[rgb(100,116,139)] ' />  </span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >password</label>
                                    <div className="relative">

                                        <Input
                                            type={`${ishowpss ? 'text' : 'password'}`}
                                            placeholder={'enter your password'}
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowpss((prev) => !prev)}  >
                                            {ishowpss ?
                                                (<ImEye className='text-[22px] text-[rgb(100,116,139)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[rgb(100,116,139)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <Submit
                                        label={'Submit'}
                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <p>Don’t have any account? <Link to='/register' className='text-[rgb(60,80,224)]' >Sign Up</Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login