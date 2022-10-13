import React from 'react'
import styled from 'styled-components';
import TAHomePage from '../assets/images/TAHomePage.png'
import TAPatientPage from '../assets/images/TAPatientPage.png'
import TAOwnersPage from '../assets/images/TAOwnersPage.png'
import TobyPic from '../assets/images/TobyPic.png'

const PythonProject = () => {
  

  
  return (<>
    <a href='/nathaniel-portfolio/'>Home</a>
    <PythonWrapper>
    <ImageWrapper>
      <ProjectImage src={TAHomePage}/>
      <ProjectImage src={TAPatientPage}/>
      <ProjectImage src={TAOwnersPage}/>
      <ProjectImage src={TobyPic}/>
    </ImageWrapper>
    <TextWrapper>
      <h1>Toby's Angels Vet Management</h1>
      <h3>The Brief</h3>
      <p>Produce a management app for a veterinary practice. Users must be able to register vets and animals, and register animals to the vets.</p>
      <h3>The App</h3>
      <p>Dedicated to my own dog, my app allows users to register vets, animals and owners. Animals are registered to both an owner and a vet. Appointments for an animal can be created, and treatments assigned to that appointment. The costs of these treatments can be totalled and added to the owners record.</p>
      <h3>The Techonologies</h3>
      <p>Created using Python3, HTML5, CSS, Postgres, Psycopg2 and Flask</p>
      <h3>The Story</h3>
      <p>I created this app following four weeks of study with Codeclan, as the first full project I had embarked on. Working alone over the course of a week, I planned and implemented all of the functionality myself. While there was lots more I wanted to add, I was very happy with what I achieved with the time I had.</p>
      <GithubLink target='_blank' rel="noreferrer" href="https://github.com/IronsideF/vet_manager_flask_project"><GithubButton>GitHub</GithubButton></GithubLink>
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
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProjectImage = styled.img`
  height: 35vh;
  width: 40vw;
  margin-top: 4vh;
`;
const TextWrapper = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
`;
const GithubButton = styled.button`
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
const GithubLink = styled.a`
  align-self: center;
`;


export default PythonProject;