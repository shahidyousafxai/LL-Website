// Library Imports
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Box, Container as MuiContainer, Typography } from '@mui/material';

// Local Imports
import sx from '@/utils/sx.style';
import Container from '@/components/shared/Container';
import Styles from '@/styles/locations.module.css';
import { RootState } from '@/redux/store';
import { dateMap } from '@/utils/data';

const HeroSectionLocationsSearch = () => {
  const mapWeek = dateMap?.weekMap;
  const mapTime = dateMap?.timeMap;
  const searchedDetailsHero = useSelector(
    (state: RootState) =>
      state?.globalSearcedHeroDetailsReducer?.globalSearchedHeroDetails
  );
  console.log(
    '🚀 ~ file: index.tsx:21 ~ HeroSectionLocationsSearch ~ searchedDetailsHero:',
    searchedDetailsHero
  );
  const unitDetails = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );

  return (
    <MuiContainer
      sx={sx.location.locationContainer}
      className={Styles.locationDetailsContainer}
    >
      {searchedDetailsHero?.tab === 'typeFeature' ? (
        <Container className={Styles.innerContainer}>
          <Typography variant='h3' color='text.primary' mt='50px'>
            {`Units in Storage Having Type ${searchedDetailsHero?.type}`}
          </Typography>
        </Container>
      ) : (
        <Container className={Styles.innerContainer}>
          <Typography variant='h3' color='text.primary' mt='50px'>
            {`${
              searchedDetailsHero?.tab !== 'campusUnits'
                ? searchedDetailsHero?.tab
                : 'Rent and Buy'
            } Units in ${searchedDetailsHero?.state}, ${
              searchedDetailsHero?.city
            }`}
          </Typography>

          <Box bgcolor='rgba(15,18,23,0.8)' borderRadius='12px'>
            <Box
              minHeight='90px'
              display='flex'
              gap='80px'
              p='20px'
              flexWrap='wrap'
              rowGap='20px'
              justifyContent='space-between'
            >
              <Box component='div'>
                <Typography variant='body2' color='text.secondary'>
                  {searchedDetailsHero?.state !== '' ? 'State' : 'Location'}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {searchedDetailsHero?.state !== ''
                    ? searchedDetailsHero?.state
                    : '6123 N 55th Ave, Glendale, AZ 85301'}
                </Typography>
              </Box>
              <Box component='div'>
                <Typography variant='body2' color='text.secondary'>
                  {searchedDetailsHero?.city !== '' ? 'City' : 'Contact'}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {searchedDetailsHero?.city !== ''
                    ? searchedDetailsHero?.city
                    : '928-394-7038'}
                </Typography>
              </Box>
              <Box component='div'>
                <Typography variant='body2' color='text.secondary'>
                  {searchedDetailsHero?.type !== ''
                    ? 'Type'
                    : searchedDetailsHero?.tab === 'campusUnits'
                    ? 'Office Hours'
                    : 'Type'}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {searchedDetailsHero?.type !== ''
                    ? searchedDetailsHero?.type
                    : unitDetails?.weekday_from !== '' &&
                      unitDetails?.weekday_from !== null &&
                      unitDetails?.weekday_from !== undefined
                    ? `${mapWeek[unitDetails?.weekday_from - 1]?.title} - ${
                        mapWeek[unitDetails?.weekday_to - 1]?.title
                      } : ${mapTime[unitDetails?.from_hour - 1]?.title} - ${
                        mapTime[unitDetails?.to_hour - 1]?.title
                      }`
                    : 'Not Available'}
                </Typography>
              </Box>
              <Box component='div'>
                <Typography variant='body2' color='text.secondary'>
                  {searchedDetailsHero?.unitSize !== ''
                    ? 'Unit Size'
                    : 'Access Hours'}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {searchedDetailsHero?.unitSize !== ''
                    ? searchedDetailsHero?.unitSize
                    : '24-Hour Access'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </MuiContainer>
  );
};
export default HeroSectionLocationsSearch;
