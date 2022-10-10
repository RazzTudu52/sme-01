import React, { useState } from 'react'
import Team02Data from './Team02Data'
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Team02 = () => {
  const [item] = useState(Team02Data);
  return (
    <>
      <section>
        <div className='team-section' id='team'>


        <div className="team-text">
          <h3 className='headLine01'>TEAM</h3>
          <h3 className='headLine01'>SESSION 21-22</h3>
          <h1 className='headLine02'>Our<span className='headSpsn'> Office-Bearers</span></h1>
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
        </div>
      </section>
    </>
  )
}

export default Team02;