import React from 'react'
import './Contact.css';
import { GoLocation } from 'react-icons/go';
import { FiMail } from "react-icons/fi";
const Contact = () => {
    return (
        <>
            <section>
                <div className='contact' id="contact">
                    <div className='contact-wrape'>


                        <div className='contact-heading '>

                            <h2>CONTACT</h2>
                            <h1>Check Our <span>Contact</span> Details</h1>
                        </div>

                        <div className='g-map' data-aos="zoom-in" data-aos-once='true'>
                            <iframe style={{ border: '0', width: "100%", height: "270px" }}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1040.9483125293154!2d86.475046!3d23.6537468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696ea24a84447%3A0x1540ff910be32114!2sDEPARTMENT%20OF%20MINING%20ENGG!5e1!3m2!1sen!2sin!4v1628592496451!5m2!1sen!2sin"
                                frameborder="0" allowfullscreen title="Department of Mining Engg"></iframe>
                        </div>
                        <div className='location' data-aos-once='true'data-aos="fade-right" >
                            <h4 className="grLoacation">
                                <GoLocation />
                            </h4>
                            
                            <span>
                                <h4>Location:</h4>
                                <p>BIT Sindri, Dhanbad, Jharkhand 828123</p>
                            </span>
                        </div>
                        <div className='contact-email' data-aos-once='true'data-aos="fade-right">
                            <h4  className='fiMail'>
                             <FiMail />
                            </h4>
                            <span>
                                <h4>Email:</h4>
                                <p>smebitsindri@bitsindri.ac.in</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact