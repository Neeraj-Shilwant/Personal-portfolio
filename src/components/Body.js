import React,{useState} from 'react';
import "../App.css";

import { Typewriter } from 'react-simple-typewriter';



export default function Body() {
  const [activeTab, setActiveTab] = useState('#work');
  

  const handleTabClick = (target) => {
    setActiveTab(target);
  }



  return (
    <>
    <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a
                href="https://www.linkedin.com/in/neeraj-r-shilwant/"
                target="_blank"
                class="home__social-icon"
              >
                <i class="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://github.com/Neeraj-Shilwant"
                target="_blank"
                class="home__social-icon"
              >
                <i class="uil uil-github-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/neerajshilwant/"
                target="_blank"
                class="home__social-icon"
              >
                <i class="uil uil-instagram-alt"></i>
              </a>
            </div>

            <div class="home__img">
              <img src="img/main.png" alt="" />
                
            </div>

            <div class="home__data">
              <h1 class="home__title" >Hi, I am Neeraj</h1>

              <h3 class="home__subtitle" >
                <Typewriter 
                words={['Web Developer','Data Scientist','React Developer','Data Analytics']}
                typeSpeed={80}
                cursor
                cursorStyle='<'
                loop={0}

                />
              </h3>
              
          
              
              <p class="home__description">
                I have a passion for building intuitive, user-friendly
                interfaces that provide an enjoyable and seamless user
                experience.
              </p>
              <a href="#contact" class="button button--flex">
                Contact Me<i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>
          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="uil uil-mouse-alt home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll Down</span>
              <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

    {/* <!--==================== ABOUT ====================--> */}

    <section class="about section" id="about">
      <h1 class="section__title">About Me</h1>
      <span class="section__subtitle">My Introduction</span>

      <div class="about__container container grid">
        <img src="img/about.jpeg" alt="" class="about__image" />

        <div class="about__data">
          <p class="about__description">
            I have 2+ years of experience and a deep understanding of various
            technologies such as React, Machine Learning, Data Science <br />
            I am dedicated to keeping up with the latest trends and techniques
            in Software Technology, and I am constantly learning and expanding my
            skill set. I have a keen eye for detail and strive for perfection in
            every project I work on. <br />
            When I'm not coding, I enjoy exploring new technologies and work on
            side projects. I am a sports enthusiast. I play football and love reading personal development books.
          </p>
          <div class="about__info">
            <div>
              <span class="about__info-title">2+</span>
              <span class="about__info-name"
                >Years <br />
                experience</span
              >
            </div>

            <div>
              <span class="about__info-title">10+</span>
              <span class="about__info-name"
                >Projects <br />
                completed</span
              >
            </div>

            {/* <div>
              <span class="about__info-title"></span>
              <span class="about__info-name"
                >Startup <br />
                Experience</span
              >
            </div> */}
          </div>

          <div class="about__buttons">
            <a
              download=""
              href="NeerajOff.pdf"
              class="button button--flex"
            >
              Download Resume<i class="uil uil-download-alt button__icon"></i
            ></a>
          </div>
        </div>
      </div>
    </section>


    {/* <!--==================== SKILLS ====================--> */}
    <section class="skills section" id="skills">
      <h1 class="section__title">Skills</h1>
      <span class="section__subtitle">My tech stack</span>
      <div class="skills__container container grid">
        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/next.svg"
            alt="angular"
          />
          <div class="skills__container-name">Next</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/react.svg"
            alt="react"
          />
          <div class="skills__container-name">React</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/python.png"
            alt="vue"
          />
          <div class="skills__container-name">Python</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/mysql.svg"
            alt="typescript"
          />
          <div class="skills__container-name">MySql</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/javascript.svg"
            alt="javascript"
          />
          <div class="skills__container-name">JavaScript</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/html.svg"
            alt="html"
          />
          <div class="skills__container-name">HTML</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/css.svg"
            alt="css"
          />
          <div class="skills__container-name">CSS</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/gcp.svg"
            alt="sass"
          />
          <div class="skills__container-name">Google Cloud Platform</div>
        </div>

        <div class="skills__container-box">
          <img
            class="skills__container-img"
            src="img/skills/firebase.svg"
            alt="firebase"
          />
          <div class="skills__container-name">Firebase</div>
        </div>

        {/* <!-- <div class="skills__container-box">
                <img class="skills__container-img" src="/assets/img/skills/figma.svg" alt="figma">
                <div class="skills__container-name">Figma</div>
            </div> --> */}
      </div>
    </section>

    {/* <!--==================== Journey ====================--> */}
    <section class="qualification section">
      <h1 class="section__title">Qualification</h1>
      <span class="section__subtitle">My personal journey</span>

      <div class="qualification__container container">
        <div class="qualification__tabs">
          <div
            class={`qualification__button button--flex ${activeTab==='#work'? 'qualification__active':''}`}
            onClick={() => handleTabClick('#work')}
          >
            <i class="uil uil-briefcase-alt qualification__icon"  > </i> Work
          </div>

          <div
            class={`qualification__button button--flex ${activeTab==='#education' ? 'qualification__active' :''}`}
            onClick={() => handleTabClick('#education')}
          >
            <i class="uil uil-graduation-cap qualification__icon"  > </i>
            Education
          </div>
        </div>

        <div class="qualification__sections">
          {/* <!--==================== QUALIFICATOIN CONTENT 1====================--> */}
          <div
            class={`qualification__content ${activeTab==='#work'? 'qualification__active':''}`}
            data-content
            id="work"
          >
            {/* <!--==================== QUALIFICATOIN 1====================--> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Web Developer and Technical Support</h3>
                <span class="qualification__subtitle"> IT-IMPACT UNIQUE GATEWAY pvt. ltd. </span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2021-Currently Working
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATOIN 2====================--> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                {/* <span class="qualification__line"></span> */}
              </div>
              <div>
                <h3 class="qualification__title">Data Science Intern</h3>
                <span class="qualification__subtitle"> Personifwy </span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> Oct-2022 - Dec-2022
                </div>
              </div>
            </div>

            
          </div>

          {/* <!--==================== QUALIFICATOIN CONTENT 2====================--> */}
          <div class={`qualification__content ${activeTab==='#education' ? 'qualification__active' :''} `} 
          data-content 
          id="education">
            {/* <!--==================== QUALIFICATOIN 1====================--> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">HSC, Science</h3>
                <span class="qualification__subtitle">
                  Jai Hind High School
                </span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2019-2020
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATOIN 2====================--> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                {/* <!-- <span class="qualification__line"></span> --> */}
              </div>
              <div>
                <h3 class="qualification__title">B.Tech, Artificial Intelligence and Data Science</h3>
                <span class="qualification__subtitle"> D.Y Patil College of Engineering </span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2020  -2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    
    
    </>
  )
}

