import React from 'react'
import './Nav.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
export const NavTop = () => {
    return (
        <>
            <div className='navBar'>
                <div class="contact01">
                    <span>
                        <h4 className='fiMail'><FiMail /></h4>
                        <h4 className='email'><a href="mailto:smebitsindri@bitsindri.ac.in" className='emailLink'>smebitsindri@bitsindri.ac.in</a></h4>
                    </span>

                    <div class="icons">
                        <a href="https://www.instagram.com/sme_bit/?hl=en" target="_blank" rel="noopener noreferrer">

                            <h4 className='insta'><FaInstagram /></h4>
                        </a>
                        <a href="https://www.facebook.com/smebitsindri" target="_blank" rel="noopener noreferrer" >

                            <h4 className='face'><FaFacebookF /></h4>
                        </a>
                        <a href="https://www.linkedin.com/company/sme-bit-sindri-students-chapter/" target="_blank"
                            rel="noopener noreferrer" >

                            <h4 className='linkDin'><BsLinkedin /></h4>
                        </a>
                        <a href="https://www.youtube.com/channel/UCtVshegn3p8eyqqDtrBlM5Q" target="_blank" rel="noopener noreferrer">

                            <h4 className='youTube'><BsYoutube /></h4>
                        </a>

                </div>
            </div>
        </div>
        </>
    )
}
export default NavTop;