import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const NavPage = () => {
    const [showIcon, setShowIcon] = useState(true);

    return (
        <>
            <div className="navBar  sticky ">
                <nav>
                    <div className="nav-img">
                        <picture>
                            <img src='/assets/bitlogo.png' alt="Logo" className="bitlogo" />
                            <img src='/assets/Smelogo.png' alt="smelogo" />
                        </picture>
                    </div>

                    <div className={showIcon ? "nav-links nav-X" : "nav-links nav-Y"}>
                        <ul className='navUl'>
                            <li className='navLi'>
                                    <NavLink className="navlink" to="/index" onClick={() => setShowIcon(true)}>Home Page</NavLink>
                            </li>
                            <li className='navLi'>
                                 <NavLink className="navlink" to="/batch2020" onClick={() => setShowIcon(true)}>SESSION 20-21</NavLink>
                            </li>
                            <li className="navLi">
                                 <NavLink className="navlink" to="/batch2021" onClick={() => setShowIcon(true)}>SESSION 21-22</NavLink>
                            </li>

                        </ul>

                    </div>

                    <div className={showIcon ? "menu-container" : "menu-container-change"} onClick={() => {
                        setShowIcon(!showIcon)
                    }}
                        >
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default NavPage;