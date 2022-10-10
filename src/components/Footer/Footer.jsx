import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <>
      <section>
        <div className='footer' style={{ background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(/assets/footer-bg.jpg) no-repeat  bottom center / cover" }}>
          <div className='footer-Wrape'>
             
      
          <h2>SME-BIT Sindri Students' Chapter</h2>
          <h4>We are a group of Mining Engineering students working to advance technology in the mining business.</h4>
          <div>

            <div className="icon">
              <a href="https://www.youtube.com/channel/UCtVshegn3p8eyqqDtrBlM5Q" target="_blank" rel="noopener noreferrer">
              <picture><img src='assets/icon/youtube.png' alt="youTube" /></picture>

              </a>
              <a href="https://www.facebook.com/smebitsindri" target="_blank" rel="noopener noreferrer">
              <picture><img src='assets/icon/facebook.png' alt="FaceBook" /></picture>

              </a>
              <a href="https://www.instagram.com/sme_bit/?hl=en" target="_blank" rel="noopener noreferrer">

              <picture><img src='assets/icon/instagram.png' alt="insta" /></picture>
              </a>
              <a href="https://www.linkedin.com/company/sme-bit-sindri-students-chapter/"  target="_blank" rel="noopener noreferrer">

              <picture><img src='assets/icon/linkedin.png' alt="LinkDine" /></picture>
              </a>
            </div>
          </div>
          <div className="copyright">
            <h3>
              © Copyright <span>SME -BIT Sindri Students' Chapter.</span> All Rights Reserved
            </h3>
            <h5>
              Edited by <span>Miners</span>
            </h5>
          </div>
        </div>
        </div>
      </section>

    </>
  )
}

export default Footer;

