import React, { useState, useEffect } from "react";
import "./Slider.css";
import Testimonials from "./Testimonials";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const Slider = () => {
  const [people] = useState(Testimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="slide-section" style={{background:"linear-gradient(rgba(0,0,0,0.5), var(--transBlack)),url(/assets/bitbuilding.jpeg) no-repeat  bottom center / cover"}}>
      <div className="slide-section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title } = item;
          let position = "nextSlide";

          if (indexPeople === index) {
            position = "activeSlide";
          }

          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
            </article>
          );
        })}

        <button className="slide-prev" onClick={() => setIndex(index - 1)}>
          <FaArrowLeft />
        </button>
        <button className="slide-next" onClick={() => setIndex(index + 1)}>

            <FaArrowRight />
        </button>

        {/* <div>

          <button class="slide-dot" onclick={() => setIndex(0)}></button>
          <button class="slide-dot" onClick={() => setIndex(1)}></button>
          <button class="slide-dot" onClick={() => setIndex(2)}></button>
          <button class="slide-dot" onClick={() => setIndex(3)}></button>

        </div> */}
      </div>
    </section>
  );
};

export default Slider;
