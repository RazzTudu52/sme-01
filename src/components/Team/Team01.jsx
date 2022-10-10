import React, { useState } from 'react'
import Team01Data from './Team01Data'
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import NavPage from '../Navigation/NavPage';
import Footer from '../Footer/Footer';
const Team01 = () => {
  const [item] = useState(Team01Data);
  return (
    <>
      <section>
      <NavPage />
        <div className="team-text  gallary-heading">
          <h3 className='headLine01'>TEAM</h3>
          <h3 className='headLine01'>SESSION 20-21</h3>
          <h1 className='headLine02'><span color='headSpsn'>Our</span> Office-Bearers</h1>
        </div>
        <div className="team-mambers">

          {
            item.map((data, i) => {
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

export default Team01;