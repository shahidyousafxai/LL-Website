'use client';
// Library Imports
import React, { FC } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
//Local Imports
import { data } from '@/utils/data';
import Button from '@/components/shared/Button';
import { subitleClr, bgColor } from '@/theme/GlobalVariables';
import styles from '@/styles/home.module.css';
const UsersLoveLuxelocker: FC = () => {
  const box1 = data.userSection.box1;
  const box2 = data.userSection.box2;
  const box3 = data.userSection.box3;

  return (
    <React.Fragment>
      <Grid container mt='120px'>
        <Box textAlign='center' width='100%'>
          <Typography variant='body1' color='text.secondary'>
            See what users are saying about us
          </Typography>
          <Typography variant='h6' color='text.primary'>
            Users love LuxeLocker
          </Typography>
          <Box
            display='flex'
            gap={{ lg: '60px', md: '40px', sm: '20px', xs: '20px' }}
            flexWrap='wrap'
            justifyContent='center'
            py='20px'
          >
            <Button
              color='primary'
              width='200px'
              endIcon={<ArrowForwardIosRoundedIcon />}
              onClick={() => {
                window.open(
                  'https://apps.apple.com/us/app/luxelocker/id1545827160',
                  '_blank'
                );
              }}
            >
              Feedback on App Store
            </Button>
            <Button
              color='primary'
              width='200px'
              endIcon={<ArrowForwardIosRoundedIcon />}
              onClick={() => {
                window.open(
                  'https://play.google.com/store/apps/details?id=com.luxelocker.luxelocker',
                  '_blank'
                );
              }}
            >
              Feedback on Play Store
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        // bgcolor={'secondary.main'}
        className={styles.usersLoveLuxeLockerContainer}
        gap={{ lg: '35px', md: '35px', sm: '20px' }}
        mb='60px'
      >
        <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={3}
          display='flex'
          alignItems={{ lg: 'end', md: 'center', sm: 'end', xs: 'start' }}
          mb={{ lg: '0px', md: '0px', sm: '0px', xs: '20px' }}
        >
          <Box
            bgcolor={'primary.main'}
            borderRadius='12px'
            padding={'24px 28px'}
          >
            <Typography fontSize='15px' color={bgColor} fontWeight={500}>
              {box1.title}
            </Typography>
            <Typography fontSize={'13px'} color={subitleClr} mt='4px'>
              {box1.subtitle}
            </Typography>
            <Typography
              fontSize='13px'
              color={bgColor}
              lineHeight={'20px'}
              mt='16px'
            >
              {box1.desc}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          lg={7}
          display='flex'
          flexDirection='column'
          gap={{ lg: '20px', md: '20px', sm: '15px', xs: '20px' }}
        >
          <Box
            bgcolor={'primary.main'}
            borderRadius='12px'
            padding={'24px 28px'}
            width={{ lg: '80%', md: '100%', sm: '100%', xs: '100%' }}
            alignSelf={{ lg: 'flex-end', md: 'unset' }}
            marginRight={{ lg: '50px', md: 'unset', sm: 'unset', xs: 'unset' }}
          >
            <Typography fontSize='15px' color={bgColor} fontWeight={500}>
              {box2.title}
            </Typography>
            <Typography fontSize={'13px'} color={subitleClr}>
              {box2.subtitle}
            </Typography>
            <Typography
              fontSize='13px'
              color={bgColor}
              lineHeight={'20px'}
              mt='16px'
            >
              {box2.desc}
            </Typography>
          </Box>
          <Box
            bgcolor={'primary.main'}
            borderRadius='12px'
            padding={'24px 28px'}
            width={{ lg: '68%', md: '68%', sm: '90%', xs: '100%' }}
            position='relative'
            top={{ lg: '30px', md: '30px', sm: '20px' }}
          >
            <Typography fontSize='15px' color={bgColor} fontWeight={500}>
              {box3.title}
            </Typography>
            <Typography fontSize={'13px'} color={subitleClr}>
              {box3.subtitle}
            </Typography>
            <Typography
              fontSize='13px'
              color={bgColor}
              lineHeight={'20px'}
              mt='16px'
            >
              {box3.desc}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={1}></Grid>
      </Grid>
    </React.Fragment>
  );
};
export default UsersLoveLuxelocker;
