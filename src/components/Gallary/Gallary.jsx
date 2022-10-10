import React, { useState } from 'react'
import GallaryApi from './GallaryApi'
import './Gallary.css';
// import { useState } from 'react'
// import galleryImages from './galleryImages'
// import GallaryData from './Gallary/GallaryApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

// import './wsp-gallery.css'

const Gallary = () => {
  const [item, setItes] = useState(GallaryApi);
   const[index, setIndex] = useState(0);
   const [slideNumber, setSlideNumber] = useState(0)
   const [openModal, setOpenModal] = useState(false)

  const filterItem = (categItem , i) => {
       
     setIndex(i)
    const updateItem = GallaryApi.filter((curElem) => {
      return curElem.category === categItem;
    })
    setItes(updateItem);
  }


  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( GallaryApi.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === GallaryApi.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }


  return (
    <>
      <section>
        
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={GallaryApi[slideNumber].image} alt='' />
          </div>
        </div>
      }

        <div class="portfolio-container">
          <div className='gallary-heading'>

            <h2>GALLERY</h2>
            <h1>Check our <span>Latest Posts</span></h1>

            <div className='heading-btns'>
              <button className={index === 0? "btns btnActive": "btns"} 
              onClick={() => {
                
                setItes(GallaryApi) 
                setIndex(0)
              }
              }>All</button>
              <button className={index === 1? "btns btnActive": "btns"} 
               onClick={() => filterItem('news',1)}>news</button>
              <button className={index === 2? "btns btnActive": "btns"} 
               onClick={() => filterItem('webinars',2)}>webinars</button>
              <button className={index === 3? "btns btnActive": "btns"}  
              onClick={() => filterItem('workshops' , 3)}>workshops</button>
            </div>
          </div>

          <div className='gallary'>
            {
              item.map((data) => {

                const {id, name, date, image } = data;
                return (
                  <div class="portfolio-item">
                    <div className='portfolio-img'>
                      <picture>
                        {/* <h1>{i+1}</h1> */}
                        <img src={image} alt="maniPic" key={id} onClick={ () => handleOpenModal(id) }/>
                      </picture>
                    </div>

                    <div class="portfolio-info">
                      <h4>{name}</h4>
                      <p>{date}</p>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
          </div>

      </section>

    </>
  )
}

export default Gallary;