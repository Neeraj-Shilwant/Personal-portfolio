import React from 'react'

const Projectinmind = () => {
  return (
    <section class="project section">
        <div class="project__bg">
          <div class="project__container container grid">
            <div class="project__data ">
              <h2 class="project__title">You have a new project ?</h2>
              <p class="project__description">
                I would love to chat with you about your project and see how we
                can work together to create something truly amazing. Let's
                connect.
              </p>
              <a href="#contact" class="button button--flex button--white">
                Contact Me
                <i class="uil uil-message project__icon button__icon"></i>
              </a>
            </div>

            {/* <img src="img/travel-pic3.png" alt="" class="project__img" /> */}
          </div>
        </div>
      </section>
  )
}

export default Projectinmind;