import React from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";



const NavBar = () => {


    
    return (
        <>
            <Card></Card>
        <nav className="nav-bar" >
            <div className="menu" >
                <div  className='menu-item' >
                    <Link className="link" to="/" activestyle="true">
                        Campaign
                    </Link>  
                </div>
                <div className='menu-item' >
                    <Link className="link" to="/faq" activestyle="true">
                        FAQ
                    </Link>
                </div>
                <div className='menu-item' >
                    <Link className="link" to="/updates" activestyle="true">
                        Updates
                    </Link>
                </div>
                <div className='menu-item' >
                    <Link className="link" to="/comments" activestyle="true">
                        Comments
                    </Link>
                </div>
                <div className='menu-item' >
                    <Link className="link" to="/community" activestyle="true">
                        Community
                    </Link>
                </div>
            </div>
          </nav>
        </>
      );
}

export default NavBar;
