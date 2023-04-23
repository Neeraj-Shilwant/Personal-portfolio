import React from 'react'
import './Portfolio.css'
import './Home.css'
import './Nicepage.css'
import './Body.css'
export default function Portfolio() {
  return (
    <>
    <section id="portfolio" className="team">
      <div className="container">

        <div className="section-title">
        <h1 class="u-custom-font u-font-montserrat u-text u-text-black u-text-default u-text-1" style={{marginLeft:"441px"}}>Portfolio</h1>
          {/* <p>Our team of IT professionals is comprised of experts with extensive knowledge and experience in their respective fields.With a passion for technology and a commitment to delivering results, our team is dedicated to delivering high-quality solutions for our clients.</p> */}
        </div>

        <div className="row">

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member">
              <img src="images/portfolio/port-1.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Service Website</h4>
                  <span>IT-IMPACT</span>
                  <div className="social">
                    <a href="https://itimpact-website.web.app/"><i className="bi bi-github"></i></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div className="member">
              <img src="images/portfolio/port-2.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>AI ML</h4>
                  <span>Chatbot</span>
                  <div className="social">
                    <a href="https://github.com/Neeraj-Shilwant/Coffee-Shop-Chatbot/blob/main/Screenshots/Screenshot%202022-12-08%20225940.png"><i className="bi bi-github"></i></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div className="member">
              <img src="images/portfolio/port-3.jpg" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>OpenCV and ML</h4>
                  <span>Age Prediction</span>
                  <div className="social">
                    <a href="https://github.com/Neeraj-Shilwant/Age-Prediction-CNN-Machine-learning-Resnet50"><i className="bi bi-github"></i></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
            <div className="member">
              <img src="images/portfolio/port-4.jpg" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Other Project</h4>
                  <span>Visit Github</span>
                  <div className="social">
                    <a href="https://github.com/Neeraj-Shilwant"><i className="bi bi-github"></i></a>
                    
                  </div>
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
