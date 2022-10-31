import React from 'react';
import styled from 'styled-components';
import BattleScreen from '../assets/images/BattleScreen.png';
import MapScreen from '../assets/images/MapScreen.png';
import DeckScreen from '../assets/images/DeckScreen.png';
import RewardsScreen from '../assets/images/RewardsScreen.png';
import TreasureScreen from '../assets/images/TreasureScreen.png';
import BossScreen from '../assets/images/BossScreen.png';
import './MobileStylingProject.css';
import './DesktopStylingProject.css';

const JavaProject = () => {
  return (<>
    <a href='/nathaniel-portfolio/' className='home-link'><GithubButton className='port-button'>Home</GithubButton></a>
    <JavaWrapper>
    <ImageWrapper className='image-wrapper'>
        <ProjectImage className='desktop-image' src={BattleScreen}/>
        <ProjectImage className='desktop-image' src={MapScreen}/>
        <ProjectImage className='desktop-image' src={DeckScreen}/>
        <ProjectImage className='desktop-image' src={RewardsScreen}/>
        <ProjectImage className='desktop-image' src={TreasureScreen}/>
        <ProjectImage className='desktop-image' src={BossScreen}/>
    </ImageWrapper>
    <TextWrapper className='text-wrapper'>
        <h1>CALEDONIA</h1>
        <SubHeading>The Brief</SubHeading>
        <TextBody>A Java game where the user traverses a set of encounters fighting enemies with a deck of cards and collecting rewards.</TextBody>
        <ProjectImage className='mobile-image' src={BattleScreen}/>
        <SubHeading>The App</SubHeading>
        <TextBody>Generates a random set of encounters and a random deck for the player. The player can play cards to fight enemies. When enemies are defeated, the player collects card rewards, also randomly generated. Enemies and rewards both scale as the game progresses. If the player beats the boss, they win and have the option to continue playing against progressively harder enemies. If the players life falls to 0, they lose and have to start from the beginning.</TextBody>
        <ProjectImage className='mobile-image' src={MapScreen}/>
        <ProjectImage className='mobile-image' src={DeckScreen}/>
        <SubHeading>The Techonologies</SubHeading>
        <TextBody>Created entirely in Java, using the JavaFX framework.</TextBody>
        <ProjectImage className='mobile-image' src={RewardsScreen}/>
        <ProjectImage className='mobile-image' src={TreasureScreen}/>
        <SubHeading>The Story</SubHeading>
        <TextBody>The third and final project for my course with CodeClan, me and another person took on a large challenge to complete a game in two weeks. I learnt an entirely new framework, JavaFX and built the frontend for the game using it. I am extremely proud of the result.</TextBody>
        <GithubLink className='button-link' target='_blank' rel="noreferrer" href="https://github.com/IronsideF/CaledoniaCapstone"><GithubButton className='port-button'>GitHub</GithubButton></GithubLink> <a className='download-link' href="/Caledonia.zip" download><GithubButton className='port-button'>Download</GithubButton></a>
        <ProjectImage className='mobile-image' src={BossScreen}/>
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
  text-transform: uppercase;
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
margin-bottom: 3vh;
`;

export default JavaProject