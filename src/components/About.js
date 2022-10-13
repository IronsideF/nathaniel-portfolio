import React from 'react'
import styled from 'styled-components';
import Graduation from '../assets/images/Graduation.png';

const About = () => {
  return (
    <AboutWrapper>
        <SelfPic src={Graduation}/>
        <TextWrapper>
            <h1>Nathaniel Forsyth</h1>
            <p>I spent 28 years searching for the thing that I wanted to do with my life.</p>
            <p>I've studied science and business, I've worked in social enterprise and for the Open University.</p>
            <p>But coding is the thing. The one I was looking for.</p>
            <p>I studied at CodeClan, a 16 week intensive course where I did over 800 hours of coding across three languages, completed three projects and most importantly learned the skills you need to be a developer - Problem solving, adaptability and self development.</p>
            <p>I'm now looking for my first role in the industry, and I couldn't be more excited about being able to do programming every day.</p>
            <p>I am proficient in Python, Java, JavaScript and React. I'm currently learning C#. I love nothing more than a new problem to solve or complicated concept to understand, so whatever language, framework or issue I'm confronted with, I'm happy to devote my time to understanding it.</p>
            <p>If you need a creative, ambitious junior developer on your team, please contact me. If you want to see my skills in action, check out the projects linked above.</p>
        </TextWrapper>
    </AboutWrapper>
  )
}
const AboutWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  padding-top: 5vh;
`;
const TextWrapper = styled.div`
  width: 40vw;
`;
const SelfPic = styled.img`
  max-height: 70vh;
  max-width: 40vw;
`;

export default About