import React from 'react'
import styled from 'styled-components';

const LandingPage = () => {
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
        <PreviewImage src='/Devils_grip_preview.png' alt='A preview of the hovered project'/>
        </RightContent>
    </PageBackground>
  )
}

const PageBackground = styled.div`
  
`;

const LeftContent = styled.div`
  
`;
const NameHeader = styled.h1`
  
`;
const JobTitle = styled.h2`
  
`;

const RightContent = styled.div`
  
`;
const PreviewImage = styled.img`
  
`;
export default LandingPage