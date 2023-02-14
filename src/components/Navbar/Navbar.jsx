import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <>
    <div className="container">
     <div class="navbar">
            <div class="navbar__block">
                <div class="navbar__flex">
                    <img data-aos="fade-down" data-aos-duration="2000" width="50px" height="50px"
                        src="./image/resume.png" alt="" class="adap__logo"/>
                </div>

                <ul data-aos="fade-down" data-aos-duration="2000" class="navbar__list">
                    <Link to='/' >
                    <li class="navbar__item"><a href="">Home</a></li> 
                    </Link>
                    <Link to='/about' >
                    <li class="navbar__item"><a href="">About</a></li> 
                    </Link>
                    <Link to='/contacts' >
                    <li class="navbar__item"><a href="">Contact</a></li> 
                    </Link>
                </ul>
                <img src="https://assets.website-files.com/619966b49a5c6af5f83856cb/619966b49a5c6a59523856ff_icon-menu-light.svg"
                    alt="error:(" class="navbar__btn_burger"/>
            </div>
        </div>
        </div>
    </>
   
  )
}

export default Navbar