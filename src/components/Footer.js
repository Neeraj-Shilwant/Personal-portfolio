import React from 'react'
import './Footer.css'

import { Typewriter } from 'react-simple-typewriter';

export default function Footer() {
  return (
  
    
    // <!--==================== FOOTER ====================-->

    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">Neeraj</h1>
            <span class="footer__subtitle">
            <Typewriter 
                words={['Web Developer','Data Scientist','React Developer','Data Analytics']}
                typeSpeed={80}
                cursor
                cursorStyle='<'
                loop={0}

                />
            </span>
          </div>

          <ul class="footer__links">
            <li>
              <a href="#services" class="footer__link">Services</a>
            </li>
            <li>
              <a href="#portfolio" class="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" class="footer__link">Contact Me</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a
              href="https://www.linkedin.com/in/neeraj-r-shilwant/"
              target="_blank"
              class="footer__social"
            >
              <i class="uil uil-linkedin"></i>
            </a>

            <a
              href="https://github.com/Neeraj-Shilwant"
              target="_blank"
              class="footer__social"
            >
              <i class="uil uil-github-alt"></i>
            </a>

            <a
              href="https://www.instagram.com/neerajshilwant/"
              target="_blank"
              class="footer__social"
            >
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>

        <p class="footer__copy">&#169; Neeraj Shilwant. All rights reserved.</p>
      </div>
    </footer>


  )
}
