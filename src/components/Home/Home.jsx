import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="home" id="hero"  style={{background:"linear-gradient(var(--transBlack), var(--transBlack)),url(/assets/minesafety.jpg) no-repeat fixed bottom center / cover"}}>
        <div class="home-text" >
          <h1 className="primary-color" data-aos="fade-up">SME -BIT SINDRI</h1>
          <h1 data-aos="fade-up" data-aos-once='true'>STUDENTS' CHAPTER</h1>
          <h3 data-aos="fade-up" data-aos-once='true'>
            We are a group of Mining Engineering students working to advance
            technology in the mining business.
          </h3>
          <button data-aos="fade-up" data-aos-once='true'><a href="#about">Get Started</a></button>
        </div>
      </section>
    </>
  );
};

export default Home;
