import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
// and it is imported from those website react icons
// falcon is just random name
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons';




function Navbar() {
    const [sidebar, setSidebar] =useState(false);
    // false as not showing

    const showSidebar = () => setSidebar(!sidebar);
    // !sidebar means reversing value like true false true false

    
   return (
    <>
 
    <IconContext.Provider value={{color:'#fff'}}>
        {/* item symbol colour */}
    <div className="navbar">
        <Link to="#" className='menu-bar'>
            <FaIcons.FaBars onClick={ showSidebar } />
            {/* this is form icons(sidebar) and it done with the help of React icon in google and
            before doing that in cmd npm add react-icons */}


        </Link>

    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={ showSidebar }>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                         <AiIcons.AiOutlineClose />
                         {/* from react icon as i already installed npm add react-icons and imported */}
                    </Link>

                </li>
            {SidebarData.map((item, index) =>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.Path}>
                            {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
            </ul>
    </nav>
    </IconContext.Provider>
    </>
   );
}
export default Navbar;