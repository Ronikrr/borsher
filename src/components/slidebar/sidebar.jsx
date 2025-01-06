
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { MdContactPage, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

function Sidebar({ isopensidebar, closeslidebar }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
    const menuItems = [
        {
            id: "1",
            subMenu: [
                {
                    id: 1,
                    icon: <MdDashboard />,
                    label: "Dashboard",
                    subsubmenu: [

                        { id: 9, icon: <RiContactsFill />, label: "contact & subscribe", link: "/" },
                        { id: 8, icon: <MdContactPage />, label: "contact details", link: "/contacts" },
                        { id: 10, icon: <MdContactPage />, label: "contact details", link: "/try" },
                        { id: 11, icon: <MdContactPage />, label: "od", link: "/locha" },
                    ],
                },
            ],
        },
    ];

    const handleMenuClick = (menuId) => {
        if (menuId === activeMenu) {
            // If the same menu is clicked again, close it
            setActiveMenu(null);
            setActiveSubMenu(null); // Close all submenus
            setActiveSubSubMenu(null); // Close all sub-submenus
        } else {
            // Open the clicked menu and close others
            setActiveMenu(menuId);
            setActiveSubMenu(null); // Reset submenus
            setActiveSubSubMenu(null); // Reset sub-submenus
        }
    };

    const handleSubMenuClick = (subMenuId) => {
        if (subMenuId === activeSubMenu) {
            // If the same submenu is clicked again, close it
            setActiveSubMenu(null);
            setActiveSubSubMenu(null); // Close sub-submenus
        } else {
            // Open the clicked submenu and close others
            setActiveSubMenu(subMenuId);
            setActiveSubSubMenu(null); // Reset sub-submenus
        }
    };


    const handleSubSubMenuClick = (subSubMenuId) => {
        // Toggle the clicked sub-submenu
        setActiveSubSubMenu(subSubMenuId === activeSubSubMenu ? null : subSubMenuId);
    };


    return (
        <div className="relative">

            <div className={` flex-col hidden md:flex md:w-[289.9px] main_class h-full  text-white bg-[#1C2434] transition-all duration-500 ease-in-out `}>
                <div className="flex items-center p-6 space-x-2 text-2xl font-bold">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                        <span className="text-lg font-bold text-white">T</span>
                    </div>
                    <span>TailAdmin</span>
                </div>


                <nav className="flex-1 px-4 py-6 space-y-4">
                    {menuItems.map((menu) => (
                        <div key={menu.id}>
                            {/* Main Menu */}
                            <div
                                className={`flex items-center p-3 justify-between rounded cursor-pointer `}
                                onClick={() => handleMenuClick(menu.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <span>{menu.icon}</span>
                                    <span className="font-semibold">{menu.label}</span>
                                </div>

                            </div>


                            <ul className="mt-2 space-y-2 ">
                                {menu.subMenu.map((subMenu) => (
                                    <li key={subMenu.id}>
                                        {/* Submenu */}
                                        <div
                                            className={`flex items-center p-2 justify-between rounded cursor-pointer ${activeSubMenu === subMenu.id ? "bg-gray-700" : "bg-gray-900"
                                                }`}
                                            onClick={() => handleSubMenuClick(subMenu.id)}
                                        >
                                            <div className="flex items-center gap-3 capitalize">
                                                {subMenu.icon}
                                                {subMenu.label}
                                            </div>
                                        </div>
                                        {/* Subsubmenu Directly Below Submenu */}

                                        <ul className="pl-8 mt-2 space-y-2">
                                            {subMenu.subsubmenu.map((subsubmenu) => (
                                                <li
                                                    key={subsubmenu.id}
                                                >
                                                    <Link to={subsubmenu.link}
                                                        className={`flex items-center capitalize p-2 gap-3 rounded cursor-pointer hover:bg-gray-700 z-10  ${activeSubSubMenu === subsubmenu.id
                                                            ? "bg-gray-700  relative after:absolute after:w-[30px] after:h-[40px] after:rounded-l-full after:bg-[rgb(243,244,246)] after:shadow-l-xl z-0 after:-right-[16px] "
                                                            : "bg-gray-900"
                                                            }`}
                                                        onClick={() => handleSubSubMenuClick(subsubmenu.id)}
                                                    >
                                                        {subsubmenu.icon}
                                                        {subsubmenu.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </nav>
            </div>
            <div className={` flex-col absolute z-20 h-full  flex md:hidden  md:w-[289.9px]  text-white bg-[#1C2434] transition-all duration-500 ease-in-out ${isopensidebar ? 'block' : 'hidden'} `}>
                <div className="flex items-center p-6 space-x-2 text-2xl font-bold">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                        <span className="text-lg font-bold text-white">T</span>
                    </div>
                    <span>TailAdmin</span>
                    <IoMdClose onClick={closeslidebar} />
                </div>


                <nav className="flex-1 px-4 py-6 space-y-4">
                    {menuItems.map((menu) => (
                        <div key={menu.id}>
                            {/* Main Menu */}
                            <div
                                className={`flex items-center p-3 justify-between rounded cursor-pointer ${activeMenu === menu.id ? "bg-gray-900" : "bg-gray-800"
                                    }`}
                                onClick={() => handleMenuClick(menu.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <span>{menu.icon}</span>
                                    <span className="font-semibold">{menu.label}</span>
                                </div>
                                {menu.subMenu && (activeMenu === menu.id ? <FaAngleUp /> : <FaAngleDown />)}
                            </div>

                            {/* Submenu and Subsubmenu Directly Under Main Menu */}
                            {activeMenu === menu.id && menu.subMenu && (
                                <ul className="pl-8 mt-2 space-y-2">
                                    {menu.subMenu.map((subMenu) => (
                                        <li key={subMenu.id}>
                                            {/* Submenu */}
                                            <div
                                                className={`flex items-center p-2 justify-between rounded cursor-pointer ${activeSubMenu === subMenu.id ? "bg-gray-700" : "bg-gray-900"
                                                    }`}
                                                onClick={() => handleSubMenuClick(subMenu.id)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span>{subMenu.icon}</span>
                                                    <span>{subMenu.label}</span>
                                                </div>
                                                {subMenu.subsubmenu && (activeSubMenu === subMenu.id ? <FaAngleUp /> : <FaAngleDown />)}
                                            </div>
                                            {/* Subsubmenu Directly Below Submenu */}
                                            {activeSubMenu === subMenu.id && subMenu.subsubmenu && (
                                                <ul className="pl-8 mt-2 space-y-2">
                                                    {subMenu.subsubmenu.map((subsubmenu) => (
                                                        <li
                                                            key={subsubmenu.id}
                                                            className={`flex items-center p-2 space-x-3 rounded cursor-pointer ${activeSubSubMenu === subsubmenu.id
                                                                ? "bg-gray-700"
                                                                : "bg-gray-900"
                                                                }`}
                                                            onClick={() => handleSubSubMenuClick(subsubmenu.id)}
                                                        >
                                                            <Link to={subsubmenu.link || "#"} className="flex items-center space-x-3" >
                                                                <span>{subsubmenu.icon}</span>
                                                                <span>{subsubmenu.label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
