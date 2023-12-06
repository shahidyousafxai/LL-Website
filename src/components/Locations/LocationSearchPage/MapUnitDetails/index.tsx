// Library Imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography, Rating } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

// Local Imports
import StarIcon from '@/assets/Icons/StarIcon';
import Map from '@/components/shared/Map';
import { dateMap } from '@/utils/data';
import { RootState } from '@/redux/store';

const MapUnitDetails = () => {
  const [ratingVal, setRatingVal] = useState<number | null>(2);
  const mapWeek = dateMap?.weekMap;
  const mapTime = dateMap?.timeMap;
  const searchedDetailsHero = useSelector(
    (state: RootState) =>
      state?.globalSearcedHeroDetailsReducer?.globalSearchedHeroDetails
  );
  const unitDetails = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );

  return (
    <React.Fragment>
      <Grid container spacing={3} mb='150px' mt='120px' rowGap={'100px'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box height='580px'>
            <Map
              data={[unitDetails]}
              triggerChildFunction={() => {
                console.log('triggered');
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          display='flex'
          alignItems='center'
        >
          <Box display='flex' flexDirection='column' gap='20px'>
            <Box display='flex' alignItems='center'>
              <Rating
                name='simple-controlled'
                value={ratingVal}
                onChange={(event, newValue) => {
                  setRatingVal(newValue);
                }}
                icon={<StarIcon />}
                emptyIcon={
                  <StarBorderRoundedIcon sx={{ color: 'text.secondary' }} />
                }
              />
              <Typography>(5.0)</Typography>
            </Box>
            <Typography variant='h5' color='text.primary'>
              {unitDetails?.city}, {unitDetails?.state_name}
            </Typography>
            <Box component='div' mt='10px'>
              <Typography variant='body2' color='text.secondary'>
                Location
              </Typography>
              <Typography variant='body1' color='text.primary'>
                {unitDetails?.street}, {unitDetails?.city}, {unitDetails?.code}{' '}
                {unitDetails?.postalcode}
              </Typography>
            </Box>
            {unitDetails?.campus_contact !== null ? (
              <Box component='div'>
                <Typography variant='body2' color='text.secondary'>
                  Contact
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {unitDetails?.campus_contact}
                </Typography>
              </Box>
            ) : null}
            <Box component='div'>
              <Typography variant='body2' color='text.secondary'>
                Office Hours
              </Typography>
              <Typography variant='body1' color='text.primary'>
                {unitDetails?.weekday_from !== '' &&
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
                Access Hours
              </Typography>
              <Typography variant='body1' color='text.primary'>
                24-Hour Access
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default MapUnitDetails;
