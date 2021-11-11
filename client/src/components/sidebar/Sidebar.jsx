import "./sidebar.css"

import { Adb } from "@mui/icons-material";

import { SidebarData } from './sidebarData';

import { Link } from 'react-router-dom';
import { useContext } from "react";

import { Context } from "../../context/Context";

export default function Sidebar() {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="backgroundAllPage">
            <div className='navbar'>
            <Link to="/settings" >
                <img src={PF+user.profilePic} className="profilePicture" alt="" />
            </Link>
                <h2 className="logoutSidebar" onClick={handleLogout}>{ user && "Logout"}</h2>
            </div>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <img class="w-7 ml-5 mr-2" src="assets/icon/cat.png" alt="" />
                        <span className="brandMain">catlist</span>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="spanMain">{item.title}</span>
                                    </Link>
                                 </li>
                        );
                    })}
                </ul>
            </nav>
        </div>     
    );
}
