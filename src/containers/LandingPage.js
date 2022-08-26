import React from 'react'
import styled from 'styled-components';
import TALogo from '../assets/images/TALogo.png'
import DGPreview from '../assets/images/skull_Card-Back.jpg'
import ReactLogo from '../assets/images/ReactLogo.png'
import PythonLogo from '../assets/images/PythonLogo.png'
import JSLogo from '../assets/images/JavaScriptLogo.png'
import HTMLogo from '../assets/images/HTMLLogo.png'
import CSSLogo from '../assets/images/CSSLogo.png'
import JavaLogo from '../assets/images/JavaLogo.png'
import './LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = ({preview}) => {
    

    let ImgSrc;
    
    if (preview==='python'){
        ImgSrc = TALogo
        
    } else if (preview==='jScript'){
        ImgSrc = DGPreview
        
    } else if (preview==='home'){
        ImgSrc=false
    } else if (preview==='about'){
        
    } else if (preview==='contact'){
        
    }
  
    return (
    <PageBackground>
        <LeftContent>
            <NameHeader>
                Nathaniel Forsyth
            </NameHeader>
            <JobTitle>
                Junior Software Developer
            </JobTitle>
        </LeftContent>
        <RightContent>
        {ImgSrc? <PreviewImage src={ImgSrc} alt='A preview of the hovered project'/> : <HomeWrapper>
            <CircleLink to='/devils-grip/'>
            <LogoImage className='circle deg-0' src={JSLogo} alt="JavaScript" />
            </CircleLink>
            <LogoImage className='reverse-circle deg-60' src={ReactLogo} alt="React" />
            <LogoImage className='reverse-circle deg-120' src={HTMLogo} alt="HTML" />
            <LogoImage className='reverse-circle deg-180' src={CSSLogo} alt="CSS" />
            <CircleLink to='/tobys-angels/'><LogoImage className='circle deg-240' src={PythonLogo} alt="Python" />
            </CircleLink>
            <CircleLink to='/java/'><LogoImage className='circle deg-300' src={JavaLogo} alt="Java" /></CircleLink>
        </HomeWrapper>}
        </RightContent>
    </PageBackground>
  )
}

const PageBackground = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 5vh;
  /* background-image: url(${TALogo}); */
  
  background-size: cover;
  height: 96vh;
  background-position: center;
`;

const LeftContent = styled.div`
  
`;
const NameHeader = styled.h1`
  
`;
const JobTitle = styled.h2`
  
`;

const RightContent = styled.div`
  height: 50vh
`;
const PreviewImage = styled.img`
  max-width: 50vw;
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
export default LandingPage