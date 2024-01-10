import { Col } from "react-bootstrap";
import './Portfolio.css'
export const Card = ({ image, title, subtitle, demo }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt="portfolio-img" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{subtitle}</span>
                    <a
                        href={demo}
                        target="_blank"
                        class="button button--flex button--small portfolio__button"
                    >   
                        Demo
                        <i class="uil uil-arrow-right button__icon " ></i>
                    </a>
                </div>
            </div>
        </Col>
    );
}