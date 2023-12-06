// Library Import
import React from 'react';
import { Box, Typography } from '@mui/material';

// Local Imports

const HeroSectionFAQs = () => {
  return (
    <Box
      pt={{ lg: '80px', md: '80px', sm: '50px', xs: '50px' }}
      textAlign='center'
    >
      <Typography variant='h3' color='text.primary'>
        Frequently Asked Questions
      </Typography>
      <Typography variant='body1' color='text.secondary'>
        Find the answers to all of our most popular frequently asked questions.
      </Typography>
    </Box>
  );
};

export default HeroSectionFAQs;
