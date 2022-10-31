import React from 'react';
import styled from 'styled-components';
import TAHomePage from '../assets/images/TAHomePage.png';
import TAPatientPage from '../assets/images/TAPatientPage.png';
import TAOwnersPage from '../assets/images/TAOwnersPage.png';
import TobyPic from '../assets/images/TobyPic.png';
import './MobileStylingProject.css';
import './DesktopStylingProject.css';

const PythonProject = () => {
  

  
  return (<>
    <a className='home-link' href='/nathaniel-portfolio/'><GithubButton className='port-button'>HOME</GithubButton></a>
    <PythonWrapper>
    <ImageWrapper className='image-wrapper'>
      <ProjectImage className='desktop-image' src={TAHomePage}/>
      <ProjectImage className='desktop-image' src={TAPatientPage}/>
      <ProjectImage className='desktop-image' src={TAOwnersPage}/>
      <ProjectImage className='desktop-image' src={TobyPic}/>
    </ImageWrapper>
    <TextWrapper className='text-wrapper'>
      <h1>TOBYS ANGELS VET MANAGEMENT</h1>
      <SubHeading>THE BRIEF</SubHeading>
      <TextBody>Produce a management app for a veterinary practice. Users must be able to register vets and animals, and register animals to the vets.</TextBody>
      <ProjectImage className='mobile-image' src={TAHomePage}/>
      <SubHeading>THE APP</SubHeading>
      <TextBody>Dedicated to my own dog, my app allows users to register vets, animals and owners. Animals are registered to both an owner and a vet. Appointments for an animal can be created, and treatments assigned to that appointment. The costs of these treatments can be totalled and added to the owners record.</TextBody>
      <ProjectImage className='mobile-image' src={TAPatientPage}/>
      <SubHeading>THE TECHNOLOGIES</SubHeading>
      <TextBody>Created using Python3, HTML5, CSS, Postgres, Psycopg2 and Flask</TextBody>
      <ProjectImage className='mobile-image' src={TAOwnersPage}/>
      <SubHeading>THE STORY</SubHeading>
      <TextBody>I created this app following four weeks of study with Codeclan, as the first full project I had embarked on. Working alone over the course of a week, I planned and implemented all of the functionality myself. While there was lots more I wanted to add, I was very happy with what I achieved with the time I had.</TextBody>
      <GithubLink target='_blank' rel="noreferrer" href="https://github.com/IronsideF/vet_manager_flask_project" className='button-link'><GithubButton className='port-button'>GITHUB</GithubButton></GithubLink>
      <ProjectImage className='mobile-image' src={TobyPic}/>
    </TextWrapper>
    </PythonWrapper>
    </>
  )
};

const PythonWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  padding-top: 5vh;
`;
const ImageWrapper = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProjectImage = styled.img`
  margin-bottom: 6vh;
  margin-top:4vh;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubHeading = styled.h3`
  margin-top: 6vh;
  margin-bottom: 2vh;
`;
const TextBody = styled.p`
  margin:0;
`;
const GithubButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
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
const GithubLink = styled.a`
margin-top: 7vh;
`;


export default PythonProject;