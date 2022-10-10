import React, { useState } from 'react'
// import Team01Data from './Team01Data'
import CoordinatorsData from './CoordinatorsData';
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Team02 from './Team02';
import NavPage from '../Navigation/NavPage';
import Footer from '../Footer/Footer';
const  FullTeam02 =  () => {
  const [item] = useState( CoordinatorsData);
  return (
    <>
      <section>
          <NavPage />
          <Team02 />
        <div className="team-text  gallary-heading">
          <h1><span>Our</span>Student Coordinators</h1>
        </div>
        <div className="team-mambers">

          {
            item.map((data) => {
              const { id, name, designation, image, facebook, insta, linkdin } = data;
              return (

                <div class="mamber">
                  <div class="img-social">

                    <img src={image} alt={id} />
                    <div class="social">

     
                    <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                      <a href={insta} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                      <a href={linkdin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>

                    </div>
                  </div>
                  <div class="mamber-info">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                  </div>

                </div>

              )
            })
          }


        </div>
         <Footer />
      </section>
    </>
  )
}

export default FullTeam02;