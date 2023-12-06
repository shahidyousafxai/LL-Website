'use client';
// Library Imports
import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

// Local Imports
import assets from '@/assets';
import { data } from '@/utils/data';
import styles from '@/styles/home.module.css';

const AboutLuxeLocker: FC = () => {
  const text = data?.aboutSection;
  return (
    <React.Fragment>
      <Grid
        mt='80px'
        sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
      >
        <Typography variant='h6' color='text.primary' textAlign='center'>
          About Luxelocker
        </Typography>
        <Box
          className={styles.videoContainer}
          width='70%'
          mx='auto'
          height='444px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          mt='25px'
        >
          <IconButton>
            <PlayCircleRoundedIcon fontSize='large' color='primary' />
          </IconButton>
        </Box>
      </Grid>
      <Grid container mt={{ lg: '120px', md: '120px', sm: '50px', xs: '50px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          m='auto'
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        >
          <Box
            sx={{
              display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
            }}
          >
            <Image
              src={assets.aboutImg}
              alt='About Luxelocker'
              height={480}
              style={{ borderRadius: '20px' }}
            />
          </Box>
          <Box
            sx={{
              display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' },
            }}
          >
            <Image
              src={assets.videoImg}
              alt='About Luxelocker'
              height={480}
              className={styles.imageabout}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={7}
          m='auto'
          order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        >
          <Box display='flex' flexDirection='column' gap='15px'>
            <Typography variant='h5'>{text.title}</Typography>
            <Typography variant='body1' color='text.secondary'>
              {text.desc1}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {text.desc2}
            </Typography>
            <Typography variant='body1' color='text.secondary' component='div'>
              {text.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default AboutLuxeLocker;
