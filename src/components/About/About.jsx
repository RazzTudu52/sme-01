import React from 'react'
import './About.css';
import { BiLink } from "react-icons/bi";
import CountUp from "react-countup";
// import Bucktwheel from '../assets/bucktwheel.jpg';
const About = () => {


    return (
        <>
         <section class="about-section">
        <div className='about-section-center' id='about'>


            <div class="about-img" data-aos="zoom-in" data-aos-once='true'>
                <div className='bucktwheel' style={{ background: "linear-gradient(var(--transBlack), var(--transBlack)),url(/assets/bucktwheel.jpg) no-repeat  bottom center / cover" }}>
                </div>
                <div class="btn-wrap">
                    <a href="https://youtu.be/8xgAnZCm56w" class="play-btn">
                    </a>
                </div>
            </div>
            <aside data-aos="fade-up" data-aos-once='true'>
                <h4 className='aboutUS'>ABOUT US</h4>
                <h1 className='aboutUS2'><b>SME-BIT Sindri Students' Chapter</b></h1>
                <h1 className='heading'>The<span>Society for Mining, Metallurgy &#38; Exploration</span> (SME)</h1>
                <article>a member society of the American Institute of Mining, Metallurgical, and Petroleum Engineers, Inc.
                    (AIME).
                    In principle and in practice, SME and all its leadership value and seek diverse and inclusive
                    participation within the <span>MINING</span> &#38; <span>MINERALS</span> community. SME promotes involvement and expanded access to
                    leadership opportunity regardless of race, ethnicity, gender, religion, age, sexual orientation,
                    nationality, or disability. SME is committed to creating an environment that draws upon the strength of
                    the diversity of our Board and Committee leaders to meet and exceed the expectations of our members and
                    customers.</article>
                <div className='points-artical' data-aos-once='true' data-aos="fade-up">
                    <div className='icon-Box'>

                        <h4 className='link-icon'><BiLink /></h4>
                    </div>
                    <span>
                        <h1>VISION</h1>
                        <h5>To establish an exuberant and diligent Student Chapter with an aim of promoting SME in collaboration with other Mining professionals
                            and enhancing active involvement of members in industrial case studies and events.
                        </h5>
                    </span>
                </div>
                <div className='points-artical' data-aos="fade-up" data-aos-delay="100" data-aos-once='true'>
                    <div className='icon-Box'>

                        <h4 className='link-icon'><BiLink /></h4>
                    </div>
                    <span>
                        <h1>MISSION</h1>
                        <h5>To serve the opencast and underground mining communities as a knowledge epicentre of the recent technological advancements in the community and scouting the mining sector and people involved with it about its impacts in their lives.</h5>
                    </span>
                </div>
                <div className='points-artical' data-aos="fade-up" data-aos-once='true' data-aos-delay="200">
                    <div className='icon-Box'>

                        <h4 className='link-icon'><BiLink /></h4>
                    </div>
                    <span >

                        <h1>OBJECTIVES</h1>
                        <h5>
                            <ul>
                                <li>
                                    Developing Stewardship among students &#38; working professionals of the industry.
                                </li>
                                <li>
                                    Spreading the idea of innovation and technology in the mining industry and encouraging individuals for the same.
                                </li>
                                <li>
                                    Developing ethics among peers for a favourable work atmosphere.
                                </li>
                                <li>
                                    Collaborating with various organisation and institutions for better outreach and scope.
                                </li>
                            </ul>
                        </h5>
                    </span>
                </div>
            </aside>
            <span>

            </span>
        </div>


    </section>

            <section id='counts-section'>
                <div  className='counts-section'>               
                    <div>                
                        <h1><CountUp end={1500} enableScrollSpy={true} duration={2}  scrollSpyOnce={true}/>0</h1>
                        <h3>Members worldwide</h3>
                    </div>
                    <div>
                    <h1><CountUp end={38} enableScrollSpy={true} duration={2} scrollSpyOnce={true} /></h1>
                        <h3>Journal Volumes issued</h3>
                    </div>
              
                    <div>
                    <h1><CountUp end={100} enableScrollSpy={true} duration={2}  scrollSpyOnce={true}/>00000</h1>
                        <h3>Scientific Documents</h3>
                    </div>
                    <div>
                    <h1><CountUp end={100} enableScrollSpy={true} duration={2} scrollSpyOnce={true} /></h1>
                        <h3>Nations</h3>
                    </div>
                    </div>
            </section>



            <section>
                <div class="info-SME" style={{background:"linear-gradient(var(--transBlack), var(--transBlack)),url(/assets/minbuild.jpg) no-repeat fixed bottom center / cover"}}>
                    <h1 data-aos="zoom-in" data-aos-once='true'>wants to know more about SME?</h1>
                    <h3 data-aos="zoom-in" data-aos-once='true'>visit SME's official website.</h3>
                    <button data-aos="zoom-in" data-aos-once='true'><a class="cta-btn" href="https://www.smenet.org/" target="_blank" rel="noopener noreferrer">See More</a></button>
                </div>
            </section>
        </>
    )
}

export default About