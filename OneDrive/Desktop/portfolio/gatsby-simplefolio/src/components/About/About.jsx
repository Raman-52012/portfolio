import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hello There!  Myself Raman, Web Developer Enthusiast and Competitive Programmer. I have good grasp of 𝗗𝗮𝘁𝗮 𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝘀 𝗮𝗻𝗱 𝗮𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺 ,i have practiced more than 300 problems on data structures on various platforms like 𝐋𝐞𝐞𝐭𝐜𝐨𝐝𝐞 and geeksforgeeks , I am actively participating in online coding contests on 𝐂𝐨𝐝𝐞𝐟𝐨𝐫𝐜𝐞𝐬 and codechef. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'You can check Glimps of my few projects down below and more on my resume page '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'click on the Resume link below to Explore more 👇'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
