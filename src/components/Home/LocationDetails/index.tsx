// Library Imports
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

//Local Imports
import Map from '@/components/shared/Map';
import { LocationCardMobile } from '@/components/shared/LocationCard';

const LocationDetails = () => {
  return (
    <React.Fragment>
      <Box
        textAlign='center'
        width='100%'
        display={{ lg: 'none', md: 'none', sm: 'block', xs: 'block' }}
      >
        <Typography variant='h5' color='text.primary'>
          Our Locations
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Reserve your unit today.
        </Typography>
      </Box>
      <Grid
        container
        bgcolor='secondary.main'
        p='10px'
        mt='20px'
        mb='100px'
        display={{ lg: 'none', md: 'none', sm: 'block', xs: 'block' }}
      >
        <Grid item xs={12} height='50vh' width='100%'>
          <Map data={[]} triggerChildFunction={() => {}} />
        </Grid>
        <Grid item xs={12} mt='10px'>
          <Box
            display='flex'
            flexDirection='column'
            gap='10px'
            height='300px'
            overflow={'auto'}
          >
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
            <LocationCardMobile />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default LocationDetails;
