import React, { useState } from 'react'
import './Faq.css';
import FAQApi from './FAQ-Api'
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { FiHelpCircle } from 'react-icons/fi';

const Faq = () => {
  const [data] = useState(FAQApi);
  const [show, setShow] = useState(null);
  const toggle = (i) => {
    if (show === i) {
      return setShow(null);
    }
    setShow(i);
  }

  return (
    <>
      <section>
        <div className='faq-section'>
          <div className='faq-div' >
            <h2 className='headLine01'>F.A.Q</h2>
            <h1 className='headLine02'>Frequently Asked <span className='colrprime'>Questions</span></h1>
            {

              data.map((item, i) => {
                const {id, question , answer } = item;
                return (
                  <div className='item-Faq-main' data-aos="fade-up"data-aos-once='true' data-aos-delay={id*200 +400} >
                    <div className='faq-QA'>

                      <div className='faq-qustion' onClick={() => toggle(i)}>
                        <h4 className='helpCircle'><FiHelpCircle /></h4>
                        <h3>{question}</h3> 
                      
                        <span>{show === i ? <h4><RiArrowUpSLine /></h4> : <h4><RiArrowDownSLine /></h4>}</span>
                      </div>
                      <div className='faq-Ans'>

                        {
                          show === i ? <p className='panel'>{answer}</p> : null
                        }
                      </div>


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

export default Faq;