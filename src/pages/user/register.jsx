import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import Input from '../../components/ui/input';
import Submit from '../../components/ui/submit';
const Register = () => {
    const [formdata, setfromdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        profileimage: "",
    })
    const [ishowpss, setishowpss] = useState(false);
    const [ishowrepss, setishowrepss] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setfromdata({
            ...formdata,
            [name]: value
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formdata;

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        const userData = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userData));

        alert("Registration successful!");
        setfromdata({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            username: "",
            profileimage: "",
        });

    }

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
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >name</label>
                                    <div className="relative">

                                        <Input
                                            type={`text`}
                                            name={`name`}
                                            value={formdata.name}
                                            onChange={handlechange}
                                            placeholder='enter your name'
                                        />
                                        <span className='absolute right-4 top-4' >
                                            <AiOutlineUser className='text-[22px] text-[rgb(100,116,139)] ' />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >email</label>
                                    <div className="relative">

                                        <Input
                                            type={`email`}
                                            name={`email`}
                                            value={formdata.email}
                                            onChange={handlechange}
                                            placeholder='enter your email'
                                        />
                                        <span className='absolute right-4 top-4' >
                                            <HiOutlineMail className='text-[22px] text-[rgb(100,116,139)] ' />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >password</label>
                                    <div className="relative">

                                        <Input
                                            type={`${ishowpss ? 'text' : 'password'}`}
                                            name="password"
                                            value={formdata.password}
                                            onChange={handlechange}
                                            placeholder='enter your password'
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowpss((prev) => !prev)}  >
                                            {ishowpss ?
                                                (<ImEye className='text-[22px] text-[rgb(100,116,139)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[rgb(100,116,139)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize' >re-type password</label>
                                    <div className="relative">

                                        <Input
                                            type={`${ishowrepss ? 'text' : 'password'}`}
                                            name="confirmPassword"
                                            value={formdata.confirmPassword}
                                            onChange={handlechange}
                                            placeholder='enter your password'
                                        />
                                        <span className='absolute cursor-pointer right-4 top-4 ' onClick={() => setishowrepss((prev) => !prev)}  >
                                            {ishowrepss ?
                                                (<ImEye className='text-[22px] text-[rgb(100,116,139)] ' />) :
                                                (<ImEyeBlocked className='text-[22px] text-[rgb(100,116,139)] ' />)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <Submit onClick={handlesubmit}
                                        label={"Create"}

                                    />
                                </div>
                                <div className="mt-6 text-center">
                                    <p>Already have an account? <Link to='/login' className='text-[rgb(60,80,224)]' >Sign in</Link> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
// import React, { useState } from 'react';
// import { HiOutlineMail } from 'react-icons/hi';
// import { ImEye, ImEyeBlocked } from 'react-icons/im';
// import { Link } from 'react-router-dom';
// import { AiOutlineUser } from "react-icons/ai";
// import Input from '../../components/ui/input';
// import Submit from '../../components/ui/submit';
// import axios from 'axios';  // Import axios

// const Register = () => {
//     const [formdata, setformdata] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         username: "",
//         profileimage: "",
//     });
//     const [ishowpss, setishowpss] = useState(false);
//     const [ishowrepss, setishowrepss] = useState(false);

//     const handlechange = (e) => {
//         const { name, value } = e.target;
//         setformdata({
//             ...formdata,
//             [name]: value
//         });
//     };

//     const handlesubmit = async (e) => {
//         e.preventDefault();

//         const { name, email, password, confirmPassword } = formdata;

//         // Basic validation
//         if (!name || !email || !password || !confirmPassword) {
//             alert("Please fill in all fields.");
//             return;
//         }
//         if (password !== confirmPassword) {
//             alert("Passwords do not match.");
//             return;
//         }

//         const userData = { name, email, password };

//         try {
//             // Send data to backend using POST request
//             const response = await axios.post('http://localhost:5000/users', userData);
//             console.log(response.data);  // Log response from backend

//             alert("Registration successful!");

//             // Optionally clear form data after successful submission
//             setformdata({
//                 name: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 username: "",
//                 profileimage: "",
//             });
//         } catch (error) {
//             console.error("Error registering user", error);
//             alert("Error during registration. Please try again.", error);
//         }
//     };

//     return (
//         <div className='flex items-center justify-center w-screen h-screen'>
//             <div className="border rounded-sm border-[rgb(226,232,240)] bg-white w-[1280px] shadow-sm">
//                 <div className="flex flex-wrap items-center w-full">
//                     <div className="hidden w-full xl:block xl:w-1/2">
//                         <div className="py-[4.375rem] text-center px-[6.5rem]">
//                             <Link to="/" className='inline-block mb-5'>tailwind</Link>
//                             <p className='2xl:px-20 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.</p>
//                             <span className="inline-block mt-16">
//                                 <img src="https://www.t3bucket.com/f/0-Group15.png" className='w-[350px] h-[350px]' alt="" />
//                             </span>
//                         </div>
//                     </div>
//                     <div className="w-full border-[rgb(226,232,240)] xl:w-1/2 xl:border-l-2">
//                         <div className="w-full p-4 sm:p-12 xl:p-17">
//                             <span className="mb-1.5 block font-medium capitalize"> start for free </span>
//                             <h2 className="text-2xl text-black mb-9 font-blod">Sign In to TailAdmin</h2>
//                             <form onSubmit={handlesubmit}>
//                                 <div className="mb-4">
//                                     <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize'>name</label>
//                                     <div className="relative">
//                                         <Input
//                                             type="text"
//                                             name="name"
//                                             value={formdata.name}
//                                             onChange={handlechange}
//                                             placeholder='enter your name'
//                                         />
//                                         <span className='absolute right-4 top-4'>
//                                             <AiOutlineUser className='text-[22px] text-[rgb(100,116,139)]' />
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize'>email</label>
//                                     <div className="relative">
//                                         <Input
//                                             type="email"
//                                             name="email"
//                                             value={formdata.email}
//                                             onChange={handlechange}
//                                             placeholder='enter your email'
//                                         />
//                                         <span className='absolute right-4 top-4'>
//                                             <HiOutlineMail className='text-[22px] text-[rgb(100,116,139)]' />
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize'>password</label>
//                                     <div className="relative">
//                                         <Input
//                                             type={`${ishowpss ? 'text' : 'password'}`}
//                                             name="password"
//                                             value={formdata.password}
//                                             onChange={handlechange}
//                                             placeholder='enter your password'
//                                         />
//                                         <span className='absolute cursor-pointer right-4 top-4' onClick={() => setishowpss((prev) => !prev)}>
//                                             {ishowpss ? (<ImEye className='text-[22px] text-[rgb(100,116,139)]' />) : (<ImEyeBlocked className='text-[22px] text-[rgb(100,116,139)]' />)}
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className="mb-6">
//                                     <label htmlFor="" className='mb-2.5 block font-medium text-black capitalize'>re-type password</label>
//                                     <div className="relative">
//                                         <Input
//                                             type={`${ishowrepss ? 'text' : 'password'}`}
//                                             name="confirmPassword"
//                                             value={formdata.confirmPassword}
//                                             onChange={handlechange}
//                                             placeholder='enter your password'
//                                         />
//                                         <span className='absolute cursor-pointer right-4 top-4' onClick={() => setishowrepss((prev) => !prev)}>
//                                             {ishowrepss ? (<ImEye className='text-[22px] text-[rgb(100,116,139)]' />) : (<ImEyeBlocked className='text-[22px] text-[rgb(100,116,139)]' />)}
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className="mb-5">
//                                     <Submit onClick={handlesubmit} label="Create" />
//                                 </div>
//                                 <div className="mt-6 text-center">
//                                     <p>Already have an account? <Link to='/login' className='text-[rgb(60,80,224)]'>Sign in</Link></p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
