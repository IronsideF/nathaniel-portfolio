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
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
    <PageBackground>
      <NameHeader>
        Nathaniel Forsyth
      </NameHeader>
      <JobTitle>
        Junior Software Developer
      </JobTitle>
      <PortfolioWrapper>
        <ProjectWrapper>
          <Link to="/tobys-angels/"><ProjectImage src={TALogo} alt="Toby's Angels Vet Management" /></Link>
          <h5>Management App</h5>
        </ProjectWrapper>
        <ProjectWrapper>
          <Link to="/devils-grip/"><ProjectImage src={DGLogo} alt="Devil's Grip" /></Link>
          <h5>Browser Game</h5>
        </ProjectWrapper>
        <ProjectWrapper>
          <Link to="/caledonia/"><ProjectImage src={BattleScreen} alt="Caledonia" /></Link>
          <h5>Desktop Game</h5>
        </ProjectWrapper>
      </PortfolioWrapper>
      <AboutWrapper>
        <AboutContent>
          <h2>About Me</h2>
          <p>I spent 28 years searching for the thing that I wanted to do with my life.</p>
          <p>I've studied science and business, I've worked in social enterprise and for the Open University.</p>
          <p>But coding is the thing. The one I was looking for.</p>
          <p>I studied at CodeClan, a 16 week intensive course where I did over 800 hours of coding across three languages, completed three projects and most importantly learned the skills you need to be a developer - Problem solving, adaptability and self development.</p>
          <p>I'm now looking for my first role in the industry, and I couldn't be more excited about being able to do programming every day.</p>
          <p>I am proficient in Python, Java, JavaScript and React. I'm currently learning C#. I love nothing more than a new problem to solve or complicated concept to understand, so whatever language, framework or issue I'm confronted with, I'm happy to devote my time to understanding it.</p>
          <p>If you need a creative, ambitious junior developer on your team, please contact me. If you want to see my skills in action, check out the projects linked above.</p>
        </AboutContent>
        <HomeWrapper>
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
            <LogoImage className='circle deg-300' src={JavaLogo} alt="Java" /></CircleLink>
          </HomeWrapper>
        </AboutWrapper>
        <a href="public/NathanielForsyth_JuniorSoftwareDeveloper_CV.pdf" download><CVButton>CV</CVButton></a>
        <h2>Contact Me</h2>
        <ContactWrapper>
          <h3><ContactLink href='https://www.linkedin.com/in/nathaniel-forsyth/'>LinkedIn</ContactLink></h3>
          <h3><ContactLink href="https://github.com/IronsideF">Github</ContactLink></h3>
          <h3>Ironsideforsyth@gmail.com</h3>
          <h3>+447724613415</h3>
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
`;
const JobTitle = styled.h2`
  text-align: center;
`;
const PortfolioWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
  align-items: center
`;
const ProjectImage = styled.img`
  width: 25vw;
  height: 30vh;
`;
const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35vw;
`;
const HomeWrapper = styled.div`
    display:grid;
    grid-template-columns: first-col 100%;
    grid-template-rows: first-row 100%;
    height: 400px;
    width: 400px;
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
const CVButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  width: 8vw;
  height: 4vh;
  border: none;
  color: white;
  background-color: black;
  border-radius: 5px;
  &:hover{
    color: red;
    cursor: pointer;
  }
`;
const ContactWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  width: 70vw;
`;
const ContactLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;
export default LandingPage