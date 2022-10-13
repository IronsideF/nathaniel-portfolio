import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../components/ImageCarousel';
import InitialGrid from '../assets/images/InitialGrid.png'
import GameInProgress from '../assets/images/GameInProgress.png'
import SelectedCards from '../assets/images/SelectedCards.png'
import StackedCards from '../assets/images/StackedCards.png'
import Talon from '../assets/images/Talon.png'

const JavaScriptProject = () => {
    
  return (<>
    <a href='/nathaniel-portfolio/'>Home</a>
    <JSWrapper>
    <ImageWrapper>
      <ProjectImage src={InitialGrid}/>
      <ProjectImage src={GameInProgress}/>
      <ProjectImage src={SelectedCards}/>
      <ProjectImage src={StackedCards}/>
      <ProjectImage src={Talon}/>
    </ImageWrapper>
    <TextWrapper>
      <h1>Devil's Grip</h1>
      <h3>The Brief</h3>
      <p>As a team, recreate an existing card or dice game using React. Wanting to do something a little different, we chose the game Devil's Grip, an odd solitaire variant played on a grid of 24 cards. So far, we haven't been able to find another digital version of the game.</p>
      <h3>The App</h3>
      <p>The user can play a game of Devils Grip through to the end. The app can populate the initial grid, allows the user to swap and stack cards in the grid according to the rules of the game, draw and play cards from the deck and end the game once they have no more legal moves.</p>
      <h3>The Techonologies</h3>
      <p>Created using React (and naturally JavaScript), Express, MongoDB, CSS and the Deck of Cards API.</p>
      <h3>The Story</h3>
      <p>The second full project I embarked on, and the first in a team. I was confident that despite the challenge we had chosen that we would be able to rise to it, and I'm very proud of what we achieved over the course of just a week. A testament to the power of communication and whiteboarding</p>
      <GithubLink target='_blank' rel="noreferrer" href="https://github.com/IronsideF/devils_grip"><GithubButton>GitHub</GithubButton></GithubLink>
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

export default JavaScriptProject