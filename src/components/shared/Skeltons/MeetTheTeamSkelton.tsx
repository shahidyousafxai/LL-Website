import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';

const MeetTheTeamSkelton = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4} mt='40px' mb='60px'>
        <Grid item xs={12} sm={12} md={4} lg={4} m='auto'>
          <Box>
            <Skeleton variant='rectangular' width='100%' height={300} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} m='auto'>
          <Box display='flex' flexDirection='column' gap='15px'>
            <Skeleton width={250} />
            <Skeleton width={700} height={200} variant='rectangular' />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MeetTheTeamSkelton;
