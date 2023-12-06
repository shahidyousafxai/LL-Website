//Library Imports

import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

// Local Imports
import Styles from '@/styles/locations.module.css';

interface GallerySliderProps {
  images: string[];
}

const ImageGalleryNew: FC<GallerySliderProps> = ({ images }) => {
  //@ts-ignore

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <React.Fragment>
      <Box
        display='flex'
        alignItems='center'
        width='inherit'
        height='inherit'
        justifyContent='center'
        position='relative'
      >
        <IconButton
          onClick={handlePrevClick}
          sx={{
            backgroundColor: 'secondary.main',
            color: 'text.primary',
            borderRadius: '12px',
            position: 'absolute',
            left: '10px',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'secondary.main',
            },
          }}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
        <Box>
          <Box>
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex}`}
              // width={1000}
              // height={1000}
              style={{
                maxHeight: '700px',
                height: '622px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                transition: '0.5s ease in-out',
              }}
            />
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginTop='-100px'
            flexWrap={'wrap'}
            gap='10px'
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${
                  index === currentIndex ? 'active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  height: '78px',
                  width: '78px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  transition: '0.5s ease in-out',
                  cursor: 'pointer',
                  border: `${
                    index === currentIndex
                      ? '1px solid white'
                      : '1px solid transparent'
                  }`,
                }}
              />
            ))}
          </Box>
        </Box>
        <IconButton
          onClick={handleNextClick}
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: '12px',
            color: 'text.primary',
            position: 'absolute',
            right: '10px',
            zIndex: 1,
            '&:hover': {
              backgroundColor: 'secondary.main',
            },
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Box>
    </React.Fragment>
  );
};
export default ImageGalleryNew;
