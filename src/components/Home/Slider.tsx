import Box from '@component/Box';
import CarouselCard1 from '@component/carousel-cards/CarouselCard1';
import Carousel from '@component/carousel/Carousel';
import Container from '@component/Container';
import Navbar from '@component/navbar/Navbar';
import useWindowSize from '@hook/useWindowSize';
import React, { Fragment, useEffect,useRef, useState } from 'react';

const Slider: React.FC<{ categories: any[] }> = ({ categories }) => {
  const width = useWindowSize();
  const [height, setHeight] = useState(400);
  const isTablet = width < 1025;
  const heroContainer = useRef<HTMLDivElement>(null);
  // useLayoutEffect(() => {
  useEffect(() => {
    const rect = heroContainer?.current?.getBoundingClientRect();
    setHeight(rect.height);
  }, [heroContainer?.current?.offsetHeight]);

  const banners = isTablet
    ? [
        '/assets/images/banners/mobile/slider-1.webp',
        '/assets/images/banners/mobile/slider-2.webp',
        '/assets/images/banners/mobile/slider-3.webp',
        '/assets/images/banners/mobile/slider-4.webp',
        '/assets/images/banners/mobile/slider-5.webp',
        '/assets/images/banners/mobile/slider-6.webp',
        '/assets/images/banners/mobile/slider-7.webp',
      ]
    : [
        '/assets/images/banners/slider-1.webp',
        '/assets/images/banners/slider-2.webp',
        '/assets/images/banners/slider-3.webp',
        '/assets/images/banners/slider-4.webp',
        '/assets/images/banners/slider-5.webp',
        '/assets/images/banners/slider-6.webp',
        '/assets/images/banners/slider-7.webp',
      ];

  return (
    <Fragment>
      <Navbar navListOpen={true} height={height} categories={categories} />
      <Box bg="gray.white" mt={isTablet ? '2.5rem' : ''}>
        <Container ref={heroContainer}>
          <Carousel
            totalSlides={7}
            visibleSlides={1}
            infinite={true}
            autoPlay={true}
            showDots={true}
            interval={4000}
            dotClass="hero-slider"
            showArrow={false}
            spacing="0px">
            {banners.map((link) => (
              <CarouselCard1 link={link} key={link} />
            ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Slider;
