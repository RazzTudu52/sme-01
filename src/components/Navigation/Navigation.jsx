import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { BiChevronDown } from 'react-icons/bi';


let useClickOutside = (handler) => {
    let domNode = useRef();  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target) ) {
          handler();
        }
      };  
      document.addEventListener("mousedown", maybeHandler);  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };
const Navigation = () => {
    const [showIcon, setShowIcon] = useState(true);
    const [showTeam, setShowteam] = useState(true);
    function close (){
        setShowIcon(true)
        setShowteam(true)
    }
    let domNode = useClickOutside(() => {   
        setShowteam(true)        
      });

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
                                <Link className="navlink" to="hero" spy={true} smooth={true} offset={50} duration={5} onClick={() => close()}>Home</Link>
                            </li>
                            <li className='navLi'>
                                <Link className="navlink" to="about" spy={true} smooth={true} offset={50} duration={5} delay={0} onClick={() => close()}>About</Link>
                            </li>
                            <li className="navLi">
                                <Link className="navlink" to="services" spy={true} smooth={true} offset={50} duration={5} onClick={() => close()}>Event</Link>
                            </li>
                            <li className="navLi">
                                <Link className="navlink" to="gallary" spy={true} smooth={true} offset={50} duration={5} onClick={() => close()}>Gallary</Link>
                            </li>

                            <li className="navLi" id="teamLi" ref={domNode}>

                                <Link className="navlink teamLink" to="team" spy={true} smooth={true} offset={50} duration={500} onClick={() => close()}>Team</Link>
                                <h4  onClick={() => setShowteam(!showTeam)} ref={domNode}><BiChevronDown/>
                                
                               {

                                 showTeam ? '':
                             
                                <ul className="batchNav" >
                                      <li className="batchLi"><a href="batch2021"  onClick={() => close()}>BATCH 2021</a></li>
                                      <li className="batchLi"><a href="batch2020" onClick={() => close()}>BATCH 2020</a></li>
                                </ul>
                               }   
                               </h4> 
                                 
                            </li>

                            <li className="navLi">
                                <Link className="navlink" to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => close()}>Contact</Link>
                            </li>

                        </ul>

                    </div>

                    <div className={showIcon ? "menu-container" : "menu-container-change"} onClick={() => {
                        setShowIcon(!showIcon)
                        setShowteam(true)
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

export default Navigation