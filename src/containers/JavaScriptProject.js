import React from 'react';
import styled from 'styled-components';
import InitialGrid from '../assets/images/InitialGrid.png'
import GameInProgress from '../assets/images/GameInProgress.png'
import SelectedCards from '../assets/images/SelectedCards.png'
import StackedCards from '../assets/images/StackedCards.png'
import Talon from '../assets/images/Talon.png'
import './MobileStylingProject.css';
import './DesktopStylingProject.css';

const JavaScriptProject = () => {
    
  return (<>
    <a href='/nathaniel-portfolio/' className='home-link'><GithubButton className='port-button'>Home</GithubButton></a>
    <JSWrapper>
    <ImageWrapper className='image-wrapper'>
      <ProjectImage className='desktop-image' src={InitialGrid}/>
      <ProjectImage className='desktop-image' src={GameInProgress}/>
      <ProjectImage className='desktop-image' src={SelectedCards}/>
      <ProjectImage className='desktop-image' src={StackedCards}/>
      <ProjectImage className='desktop-image' src={Talon}/>
    </ImageWrapper>
    <TextWrapper className='text-wrapper'>
      <h1>DEVIL'S GRIP</h1>
      <SubHeading>THE BRIEF</SubHeading>
      <TextBody>As a team, recreate an existing card or dice game using React. Wanting to do something a little different, we chose the game Devil's Grip, an odd solitaire variant played on a grid of 24 cards. So far, we haven't been able to find another digital version of the game.</TextBody>
      <ProjectImage className='mobile-image' src={InitialGrid}/>
      <SubHeading>THE APP</SubHeading>
      <TextBody>The user can play a game of Devils Grip through to the end. The app can populate the initial grid, allows the user to swap and stack cards in the grid according to the rules of the game, draw and play cards from the deck and end the game once they have no more legal moves.</TextBody>
      <ProjectImage className='mobile-image' src={GameInProgress}/>
      <SubHeading>THE TECHNOLOGIES</SubHeading>
      <TextBody>Created using React (and naturally JavaScript), Express, MongoDB, CSS and the Deck of Cards API.</TextBody>
      <ProjectImage className='mobile-image' src={SelectedCards}/>
      <ProjectImage className='mobile-image' src={StackedCards}/>
      <SubHeading>THE STORY</SubHeading>
      <TextBody>The second full project I embarked on, and the first in a team. I was confident that despite the challenge we had chosen that we would be able to rise to it, and I'm very proud of what we achieved over the course of just a week. A testament to the power of communication and whiteboarding</TextBody>
      <GithubLink className='button-link' target='_blank' rel="noreferrer" href="https://github.com/IronsideF/devils_grip"><GithubButton className='port-button'>GitHub</GithubButton></GithubLink>
      <ProjectImage className='mobile-image' src={Talon}/>
    </TextWrapper>
    </JSWrapper>
    </>
  )
}

const JSWrapper = styled.div`
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

export default JavaScriptProject