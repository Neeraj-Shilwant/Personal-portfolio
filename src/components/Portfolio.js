import React from 'react';
import './Nicepage.css'
import { Col, Row,Container } from 'react-bootstrap';
import { Card } from './Card';
import '../components/css/vendor/animate.css/animate.css';
const Portfolio = () => {
  const data = [
    {
      image: "img/portfolio/usergit.png",
      title: "UserGit Analyzer",
      subtitle: "Github Profile Rater",
      demo: "https://github.com/Neeraj-Shilwant/Usergit"
    },
    {
      image: "img/portfolio/whiteboard.png",
      title: "Real Time White Board",
      subtitle: "Collaboration Allowed",
      demo: "https://github.com/Neeraj-Shilwant/real-time-whiteboard"
    },
    {
      image: "img/portfolio/kasarform.png",
      title: "Custom Real Time Form",
      subtitle: "Linked to Google Spreadsheet and Mongo DB.",
      demo: "https://github.com/Neeraj-Shilwant/kasar-family"
    },
    {
      image: "img/portfolio/cb.png",
      title: "Professional Website",
      subtitle: "",
      demo: "https://cbtechnologies.co.in/"
    },
    {
      image: "img/portfolio/sa.png",
      title: "Professional Website",
      subtitle: "",
      demo: "https://sakaararchitects.com/"
    },
    
  ]

  return (
    <section class="portfolio section"  id="portfolio">
      <h1 class="section__title">Portfolio</h1>
      <span class="section__subtitle">Most recent work</span>
      
      <Container className='custom-container-width custom-grid'  >
        
        <Row  >
           <Col>
          {<Card image={data[0].image} title={data[0].title} subtitle={data[0].subtitle} demo={data[0].demo}/>}
          </Col> 
          <Col>
          {<Card image={data[1].image} title={data[1].title} subtitle={data[1].subtitle} demo={data[1].demo}/>}
          </Col>
        </Row>
        <Row>
        <Col>
          {<Card image={data[2].image} title={data[2].title} subtitle={data[2].subtitle} demo={data[2].demo}/>}
          </Col> 
          <Col>
          {<Card image={data[3].image} title={data[3].title} subtitle={data[3].subtitle} demo={data[3].demo}/>}
          </Col>
        </Row>
        <Row>
        <Col>
          {<Card image={data[4].image} title={data[4].title} subtitle={data[4].subtitle} demo={data[4].demo}/>}
          </Col> 
          {/* <Col>
          {<Card image={data[0].image} title={data[0].title} subtitle={data[0].subtitle} demo={data[0].demo}/>}
          </Col> */}
        </Row>

      </Container>

      
      
      
    </section>
  )
}

export default Portfolio