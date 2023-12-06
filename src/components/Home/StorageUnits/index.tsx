'use client';
// Library Imports
import React, { FC, useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
// Local Imports
import { globalSearchedAction } from '@/redux/reducers/globalSearchedReducer';
import { globalSearchedHeroDetailsAction } from '@/redux/reducers/globalSearcedHeroDetailsReducer';
import StorageUnitCard from '@/components/shared/StorageUnitCard';
import assets from '@/assets';
import ApiController from '@/network/api';
const StorageUnits: FC = () => {
  // REDUX STATES
  const dispatch = useDispatch();
  //LOADING STATES
  const [loading, setLoading] = useState(false);
  const [matchType, setMatchType] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  // ROUTER
  const Router = useRouter();

  // Fetch Type of Feature
  const handleTypofFeature = async (type: string) => {
    setLoading(true);
    setMatchType(type);
    ApiController.fetchCampusByTypeofFeatureCall(
      { typeFeature: type },
      (response) => {
        if (response) {
          if (response?.data?.length > 0) {
            setLoading(false);
            const searchedQuery = {
              state: '',
              city: '',
              unitSize: '',
              type: type,
              tab: 'typeFeature',
              pathName: 'Home',
            };
            dispatch(globalSearchedAction(response?.data));
            dispatch(globalSearchedHeroDetailsAction(searchedQuery));
            Router.push(
              { pathname: '/locations/details', query: { from: 'home' } },
              '/locations/details'
            );
            setLoading(false);
            setErrorMessage(false);
          } else {
            setErrorMessage(true);
            setLoading(false);
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    );
  };

  // UseEffect To hide Error Message
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(false);
    }, 4000);
  }, [errorMessage]);

  return (
    <React.Fragment>
      <Grid container mt='120px' mb='120px' spacing={3}>
        <Box textAlign='center' width='100%'>
          <Typography variant='h5' color='text.primary'>
            What these storage units are best for
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            What these storage units are best for
          </Typography>
        </Box>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StorageUnitCard
            title='RVs and Cars'
            description='Classic & valuable'
            image={assets.unit1Img}
            onClick={() => handleTypofFeature('RV and CARS')}
            loading={Boolean(loading && matchType === 'RV and CARS')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StorageUnitCard
            title='Personal Items'
            description='Clean out your garage.'
            image={assets.unit2Img}
            onClick={() => handleTypofFeature('PERSONAL ITEMS')}
            loading={Boolean(loading && matchType === 'PERSONAL ITEMS')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StorageUnitCard
            title="Boats & PWC'S"
            description='Close to the water.'
            image={assets.unit3Img}
            onClick={() => handleTypofFeature('BOATS and PWC')}
            loading={Boolean(loading && matchType === 'BOATS and PWC')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StorageUnitCard
            title='Tools and Materials'
            description='Construction businesses.'
            image={assets.unit4Img}
            onClick={() => handleTypofFeature('TOOLS and MATERIALS')}
            loading={Boolean(loading && matchType === 'TOOLS and MATERIALS')}
          />
        </Grid>
        {errorMessage ? (
          <Typography textAlign='center' color='error' pt='20px' ml='22px'>
            No data exists against this type
          </Typography>
        ) : null}
      </Grid>
    </React.Fragment>
  );
};
export default StorageUnits;
