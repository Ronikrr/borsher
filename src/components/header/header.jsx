import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RiNotification2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { FaBars } from "react-icons/fa6";
import { TbLogin, TbLogin2 } from 'react-icons/tb';
const Header = ({ toogleslidebar }) => {
    const [isopen, setisopen] = useState(false);
    const [isuser, setisuseropen] = useState(false);
    const [ismessageopen, setismessageopen] = useState(false);
    const toggledropdown = () => {
        setisopen(!isopen); 
        setismessageopen(false);
        setisuseropen(false)
    };
    
    const togglemessagedropdown = () => {
        setismessageopen(!ismessageopen); // Toggle the message dropdown
        setisopen(false); // Ensure the notification dropdown is closed
        setisuseropen(false)
    };
    const isuseropen = () => {
        setisuseropen(!isuser)
        setisopen(false);
        setismessageopen(false); 
    }

    useEffect(() => {
        setTimeout(() => {
            setisopen(false);
            setismessageopen(false);
            setisuseropen(false)
        }, 5000);
    })
    return (
        <div className='h-[80px] w-screen md:w-full flex px-11 py-4  items-center justify-center bg-[#fff] '>
            <div className="flex items-center justify-center w-full lg:justify-between">
                <div className="main_bars xl:hidden ">
                    <FaBars className='cursor-pointer ' onClick={toogleslidebar} />
                </div>
                <div className="flex items-center space-x-3 search">
                    <div className="">
                        <IoIosSearch className='text-[20px]' />
                    </div>
                    <input type="text" className='py-2 px-3 rounded-lg bg-[#f1f5f9] ' placeholder='Search ...' />
                </div>
                <div className="flex items-center gap-4">
                    <ul className="flex items-center gap-4">
                        <li className="">

                        </li>
                        <li className="relative">
                            <Link className='w-[33.99px] relative h-[33.99px] rounded-full flex items-center justify-center border border-[0.5px] border-[rgba(226,232,240,1)] bg-[rgba(239,244,251,1)]' onClick={toggledropdown} >
                                <RiNotification2Line />
                                <div className="absolute w-[10px] h-[10px] bg-red-500 rounded-full right-0 top-0"></div>
                            </Link>
                            {isopen && (
                                <div className="absolute flex flex-col block mt-2 bg-white border rounded-sm -right-27 h-90 w-75 border-stroke shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80"  >
                                    <div className="px-5 py-3">
                                        <h5 className='text-sm font-medium text-[#8a99af]' >Notification</h5>
                                    </div>
                                    <ul className="flex flex-col h-auto px-5 pb-4 overflow-y-auto">
                                        <li>
                                            <Link className='flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4' >
                                                <p className="text-sm">
                                                    <span className='' >Edit your information in a swipe</span>
                                                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                                </p>
                                                <p className="text-xs">12 May, 2025</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="relative">
                            <Link className='w-[33.99px] relative h-[33.99px] rounded-full flex items-center justify-center border border-[0.5px] border-[rgba(226,232,240,1)] bg-[rgba(239,244,251,1)]' onClick={togglemessagedropdown} >
                                <RiMessage2Line />
                                <div className="absolute w-[10px] h-[10px] bg-red-500 rounded-full right-0 top-0"></div>
                            </Link>
                            {ismessageopen && (
                                <div className="absolute flex flex-col block mt-2 bg-white border rounded-sm -right-27 h-90 w-75 border-stroke shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80"  >
                                    <div className="px-5 py-3">
                                        <h5 className='text-sm font-medium capitalize text-[#8a99af]' >message</h5>
                                    </div>
                                    <ul className="flex flex-col h-auto p-5 overflow-y-auto">
                                        <li>
                                            <Link className='flex gap-4 px-4 py-3 border-t border-stroke hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4' >
                                                <div className="w-12 h-12 rounded-full">
                                                    <img src="https://react-demo.tailadmin.com/assets/user-02-5a304001.png" alt="user" />
                                                </div>
                                                <div className="">
                                                    <h6>Mariya Desoja</h6>
                                                    <p className='text-sm' >I like your confidence 💪</p>
                                                    <p className='text-xs' >2min ago</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="relative">
                        <Link className='flex items-center gap-4' onClick={isuseropen}  >
                            <span className='w-12 h-12 rounded-full' >
                                <img src="https://react-demo.tailadmin.com/assets/user-01-b007ff3f.png" alt="user" />
                            </span>
                        </Link>
                        {isuser && (
                            <div className="absolute right-0 flex flex-col block mt-4 bg-white border rounded-sm w-[15.625rem] border-stroke shadow-default " >
                                <ul className='flex flex-col gap-5 px-6 border-b border-stroke py-7  text-[#64748b]' >
                                    <li>
                                        <Link to='/profile' className='flex items-center gap-3 text-sm font-medium capitalize duration-300 ease-in-out hover:text-blue-400 lg:text-base' >
                                            <CiUser className='text-[22px]' /> my profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='flex items-center gap-3 text-sm font-medium capitalize duration-300 ease-in-out hover:text-blue-400 lg:text-base' >
                                            <TiContacts className='text-[22px]' /> my contact
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/login" className='flex items-center gap-3 text-sm font-medium capitalize duration-300 ease-in-out hover:text-blue-400 lg:text-base' >
                                            <TbLogin2 className='text-[22px]' /> login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className='flex items-center gap-3 text-sm font-medium capitalize duration-300 ease-in-out hover:text-blue-400 lg:text-base' >
                                            <TbLogin className='text-[22px]' /> register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header