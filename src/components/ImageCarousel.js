import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components';

const ImageCarousel = ({images}) => {
  
    const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
    
    return (
    <Wrapper>
    <Slider {...settings}>
    {images.map((item, i) => (
            <div key={i}>
              <CarouselImage src={item} />
            </div>
          ))}
    </Slider>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  width: 50vw;
`;
const CarouselImage = styled.img`
  max-width:50vw;
  max-height: 60vh;
`;


export default ImageCarousel