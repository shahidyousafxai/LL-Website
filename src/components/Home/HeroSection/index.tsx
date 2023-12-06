// Library Imports
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Grid, Box, Typography, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { data } from '@/utils/data';

// Local Imports
import RentTab from '../Tabs/RentTab';
import assets from '@/assets';
import sx from '@/utils/sx.style';
import styles from '@/styles/home.module.css';
import ApiController from '@/network/api';

const HeroSection = () => {
  const title = data?.heroSection?.title;
  const description = data?.heroSection?.desc;
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          py='20px'
          pb='30px'
          paddingTop={{ xs: '20px', sm: '20px', md: '0px', lg: '0px' }}
        >
          <Box
            width='100%'
            display='flex'
            flexDirection='column'
            gap='20px'
            className={styles.heroContainer}
          >
            <Typography
              variant='h3'
              color='text.primary'
              width={{ lg: '50%', md: '50%', xs: '100%' }}
              pt={{ lg: '60px', md: '50px', sm: '40px', xs: '30px' }}
            >
              {title}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {description}
            </Typography>
            <Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 2, borderColor: 'transparent' }}>
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                  >
                    <Tab
                      label='Rent'
                      value='1'
                      sx={sx.hero.tab('12px 0 0 0', '1px', 'px')}
                    />
                    <Tab
                      label='Buy'
                      value='2'
                      sx={sx.hero.tab('0 12px 0 0', '0px', '1px')}
                    />
                  </TabList>
                </Box>
                <Box
                  bgcolor='secondary.main'
                  // className={styles.tabBox}
                  sx={{
                    borderRadius: {
                      lg: '0 12px 12px 12px',
                      sm: '0 12px 12px 12px',
                      md: '0 12px 12px 12px',
                      xs: '0 0px 12px 12px',
                    },
                  }}
                >
                  <TabPanel value='1' sx={{ padding: '20px 20px 20px 40px' }}>
                    <RentTab fromTab='Rent' />
                  </TabPanel>
                  <TabPanel value='2' sx={{ padding: '20px 20px 20px 40px' }}>
                    <RentTab fromTab='Buy' />
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sx={{
            display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' },
            textAlign: 'center',
          }}
        >
          <Image
            src={assets.heroImg}
            alt='Buy, Rent'
            style={{
              objectFit: 'contain',
              width: '100%',
              height: 'max-content',
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default HeroSection;
