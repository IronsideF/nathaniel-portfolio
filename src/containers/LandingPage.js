import React from 'react';
import styled from 'styled-components';
import TALogo from '../assets/images/TALogo.png';
import ReactLogo from '../assets/images/ReactLogo.png';
import PythonLogo from '../assets/images/PythonLogo.png';
import JSLogo from '../assets/images/JavaScriptLogo.png';
import HTMLogo from '../assets/images/HTMLLogo.png';
import CSSLogo from '../assets/images/CSSLogo.png';
import JavaLogo from '../assets/images/JavaLogo.png';
import DGLogo from '../assets/images/SelectedCards.png'
import BattleScreen from '../assets/images/BattleScreen.png'
import './DesktopAnimation.css';
import './MobileAnimation.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
    <PageBackground>
      <NameHeader>
        NATHANIEL FORSYTH
      </NameHeader>
      <JobTitle>
        JUNIOR SOFTWARE DEVELOPER
      </JobTitle>
      <PortfolioWrapper className='portfolio-wrapper'>
        <ProjectWrapper className='project-wrapper'>
          <Link to="/caledonia/"><ProjectImage className='project-image' src={BattleScreen} alt="Caledonia" /></Link>
          <h4>DESKTOP GAME</h4>
        </ProjectWrapper>
        <ProjectWrapper className='project-wrapper'>
          <Link to="/devils-grip/"><ProjectImage className='project-image' src={DGLogo} alt="Devil's Grip" /></Link>
          <h4>BROWSER GAME</h4>
        </ProjectWrapper>
        <ProjectWrapper className='project-wrapper'>
          <Link to="/tobys-angels/"><ProjectImage className='project-image' src={TALogo} alt="Toby's Angels Vet Management" /></Link>
          <h4>MANAGMENT APP</h4>
        </ProjectWrapper>
      </PortfolioWrapper>
      <h2>ABOUT ME</h2>
      <AboutWrapper className='about-wrapper'>
        <AboutContent className='about-content'>
          <p>I spent 28 years searching for the thing that I wanted to do with my life. I've studied science and business, I've worked in social enterprise and for the Open University. But coding is the thing. The one I was looking for.</p>
          <p>I studied at CodeClan, a 16 week intensive course where I did over 800 hours of coding across three languages, completed three projects and most importantly learned the skills you need <br/>to be a developer - Problem solving, adaptability and self development.</p>
          <p>I'm now looking for my first role in the industry, and I couldn't <br/>be more excited about being able to do programming every day.</p>
          <p>I am proficient in Python, Java, JavaScript and React. I'm currently learning C#. I love nothing more than a new problem <br/>to solve or complicated concept to understand, so whatever language, framework or issue I'm confronted with, I'm happy<br/> to devote my time to understanding it.</p>
          <p>If you need a creative, ambitious junior developer on your team, please contact me. If you want to see my skills in action, check out the projects linked above.</p>
        </AboutContent>
        <HomeWrapper className='animation-wrapper'>
          <CircleLink to='/devils-grip/'>
            <LogoImage className='circle deg-0' src={JSLogo} alt="JavaScript" />
          </CircleLink>
          <LogoImage className='reverse-circle deg-60' src={ReactLogo} alt="React" />
          <LogoImage className='reverse-circle deg-120' src={HTMLogo} alt="HTML" />
          <LogoImage className='reverse-circle deg-180' src={CSSLogo} alt="CSS" />
          <CircleLink to='/tobys-angels/'>
            <LogoImage className='circle deg-240' src={PythonLogo} alt="Python" />
          </CircleLink>
          <CircleLink to='/caledonia/'>
            <LogoImage className='circle deg-300' src={JavaLogo} alt="Java" />
          </CircleLink>
          </HomeWrapper>
        </AboutWrapper>
        
        <ContactWrapper className='contact-wrapper'>
          <CVLink href="NathanielForsyth_JuniorSoftwareDeveloper_CV.pdf" download><CVButton className='port-button'>CV</CVButton></CVLink>
          <ContactLink href='https://www.linkedin.com/in/nathaniel-forsyth/'><CVButton className='port-button'>LINKEDIN</CVButton></ContactLink>
          <ContactLink href="https://github.com/IronsideF"><CVButton className='port-button'>GITHUB</CVButton></ContactLink>
        </ContactWrapper>
    </PageBackground>
  )
}

const PageBackground = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5vh;
`;

const NameHeader = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;
const JobTitle = styled.h2`
  text-align: center;
  margin-bottom: 10vh;
`;
const PortfolioWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 8vh;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  align-items: center;
`;
const ProjectImage = styled.img`
  height: 30vh;
  margin-bottom: 2vh;
`;
const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin-top: 4vh;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const HomeWrapper = styled.div`

`;
const CircleLink = styled(Link)`
  grid-column: first-col;
  grid-row: first-row;
`;
const LogoImage = styled.img`
  max-height: 100px;
  max-width: 100px;
  grid-column: first-col;
  grid-row: first-row;
`;
const CVLink = styled.a`
`;
const CVButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  height: 5vh;
  border: none;
  color: white;
  background-color: black;
  border-radius: 5px;
  font-size: 1.3rem;
  &:hover{
    color: red;
    cursor: pointer;
  }
`;
const ContactWrapper = styled.footer`
  display:flex;
  justify-content: space-between;
  margin-top: 7vh;
  margin-bottom: 7vh;
  align-self: flex-start;
  margin-left: 10.75vw
`;
const ContactLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
export default LandingPage