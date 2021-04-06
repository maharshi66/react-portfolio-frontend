import React from 'react'
import CustomTitle from '../components/CustomTitle/CustomTitle';
import CustomParagraph from '../components/CustomPararaph/CustomParagraph'
import './AboutSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImageLinkContainer from '../components/ImageLinkContainer/ImageLinkContainer';
import usfSVG from '../assets/usflogo.svg';
import qtSVG from '../assets/qtlogo.svg';
import epcncJPG from '../assets/epcnclogo.jpg'
import embeddedPNG from '../assets/embeddedPNG.png';

const AboutSection = () => {
    return (
        <>
        <CustomTitle title='About' type='title-about-section' />
        <Container className='about'>
            <Row>
            <Col className='mt-3' xs={12} md={6}>
                <CustomTitle icon='fas fa-play' title=' Background' type='subtitle-about-section' />
                    <div className='breif-background'>    
                        <CustomParagraph 
                            text="I'm a software engineer based in Mumbai, India. I earned my Bachelor's degree in Computer Engineering from the 
                            University of South Florida. I love building applications that are accessible to everyone around the world."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="After graduating, I joined the team at Electropneumatics & Hydraulics as a Software Engineer to
                            build embedded system software and graphical user interfaces using C, C++, and the Qt framework."
                            type='simple-paragraph-sm' 
                        />
                        <CustomParagraph 
                            text="My interest in web-development piqued during the early stages of the COVID-19 pandemic. 
                            From what started with learning the basics of HTML, CSS, and JavaScript 
                            has spiraled into learning and building full-stack web applications."
                            type='simple-paragraph-sm' 
                        />
                    </div>
            </Col>
            <Col className='mt-3' xs={12} md={6}>
                <Row className='justify-content-center align-items-center'>
                    <Col>
                        <ImageLinkContainer href='https://www.usf.edu/' imgSrc={usfSVG} alt='usflogo' />
                    </Col>
                    <Col>
                        <ImageLinkContainer href='https://www.electropneumatics.com/' imgSrc={epcncJPG} alt='epcnclogo' />
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                    <Col className='justify-content-center'>
                        <ImageLinkContainer href='https://www.qt.io/' imgSrc={qtSVG} alt='qtlogo' />
                    </Col>
                    <Col>
                        <ImageLinkContainer href='https://en.wikipedia.org/wiki/Embedded_software' imgSrc={embeddedPNG} alt='embeddedlogo' />
                    </Col>
                </Row>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default AboutSection