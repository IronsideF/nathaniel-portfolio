import React from 'react';
import styled from 'styled-components';
import ImageCarousel from '../components/ImageCarousel';
import BattleScreen from '../assets/images/BattleScreen.png';
import MapScreen from '../assets/images/MapScreen.png';
import DeckScreen from '../assets/images/DeckScreen.png';
import RewardsScreen from '../assets/images/RewardsScreen.png';
import TreasureScreen from '../assets/images/TreasureScreen.png';
import BossScreen from '../assets/images/BossScreen.png';

const JavaProject = () => {
  return (<>
    <a href='/'>Home</a>
    <JavaWrapper>
    <ImageWrapper>
        <ProjectImage src={BattleScreen}/>
        <ProjectImage src={MapScreen}/>
        <ProjectImage src={DeckScreen}/>
        <ProjectImage src={RewardsScreen}/>
        <ProjectImage src={TreasureScreen}/>
        <ProjectImage src={BossScreen}/>
    </ImageWrapper>
    <TextWrapper>
        <h1>Caledonia</h1>
        <h3>The Brief</h3>
        <p>A Java game where the user traverses a set of encounters fighting enemies with a deck of cards and collecting rewards.</p>
        <h3>The App</h3>
        <p>Generates a random set of encounters and a random deck for the player. The player can play cards to fight enemies. When enemies are defeated, the player collects card rewards, also randomly generated. Enemies and rewards both scale as the game progresses. If the player beats the boss, they win and have the option to continue playing against progressively harder enemies. If the players life falls to 0, they lose and have to start from the beginning.</p>
        <h3>The Techonologies</h3>
        <p>Created entirely in Java, using the JavaFX framework.</p>
        <h3>The Story</h3>
        <p>The third and final project for my course with CodeClan, me and another person took on a large challenge to complete a game in two weeks. I learnt an entirely new framework, JavaFX and built the frontend for the game using it. I am extremely proud of the result.</p>
        <GithubLink target='_blank' rel="noreferrer" href="https://github.com/IronsideF/CaledoniaCapstone"><GithubButton>GitHub</GithubButton></GithubLink>
    </TextWrapper>
    </JavaWrapper>
    </>
  )
}

const JavaWrapper = styled.div`
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

export default JavaProject