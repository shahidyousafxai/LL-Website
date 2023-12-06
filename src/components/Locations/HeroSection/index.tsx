/* eslint-disable react-hooks/exhaustive-deps */
// Library Import
import React, { FC, useState, useEffect } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';

// Local Import
import SelectSingleDropdown from '@/components/shared/SelectDropdown';
import Button from '@/components/shared/Button';
import ApiController from '@/network/api';

interface IHeroSectionProps {
  searchData: {
    state: string;
    stateId: string;
    city: string;
    cityId: string;
    type: string;
    unitSize: string;
    latitude: number;
    longitude: number;
  };
  setSearchData: (searchData: {
    state: string;
    stateId: string;
    city: string;
    cityId: string;
    type: string;
    unitSize: string;
    latitude: number;
    longitude: number;
  }) => void;
  loading: boolean;
  onSearch: () => void;
  onNearbySearch: () => void;
}

const HeroSection: FC<IHeroSectionProps> = ({
  searchData,
  setSearchData,
  loading,
  onSearch,
  onNearbySearch,
}) => {
  const islocation = true;
  const [isErrMessage, setIsErrorMessage] = useState(false);
  const [toSearchData, setToSearchData] = useState({
    states: [],
    cities: [],
    types: [
      { id: '1', name: 'All Types' },
      { id: '2', name: "RV's and Cars" },
      { id: '3', name: 'Personal Items' },
      { id: '4', name: "Boats & PWC'S" },
      { id: '5', name: 'Tools and Materials' },
    ],
    unitSize: [
      { id: '1', name: 'All Sizes' },
      { id: '2', name: 'Standard' },
      { id: '3', name: 'Super Luxe' },
      { id: '4', name: 'Luxe' },
    ],
  });

  // Fetch States && Cities
  const fetchStates = () => {
    ApiController.fetchStatesCall({}, (response) => {
      if (response.success) {
        setToSearchData({ ...toSearchData, states: response.data });
      } else {
        setToSearchData({ ...toSearchData, states: [] });
      }
    });
  };

  const fetchCities = (payload: { id: string }) => {
    ApiController.fetchStatesCityCall(payload, (response) => {
      if (response.success) {
        setToSearchData({ ...toSearchData, cities: response.data });
      } else {
        setToSearchData({ ...toSearchData, cities: [] });
      }
    });
  };

  // UseEffect For Fetching States && Cities
  // Fetch States and Citites
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (searchData?.stateId !== '') {
      fetchCities({
        id: searchData?.stateId,
      });
    }
    setSearchData({ ...searchData, city: '', cityId: '' });
  }, [searchData?.stateId]);

  // UseEffect To hide Error Message
  useEffect(() => {
    setTimeout(() => {
      setIsErrorMessage(false);
    }, 3000);
  }, [isErrMessage]);

  return (
    <React.Fragment>
      <Grid container px={{ lg: '30px', md: '20px', sm: '10px', xs: '0px' }}>
        <Box textAlign='center' width='100%' pt='80px'>
          <Typography variant='h3' color='text.primary' textAlign='center'>
            Luxelocker Locations
          </Typography>
        </Box>
        <Box
          bgcolor='secondary.main'
          width='100%'
          p='20px'
          borderRadius='12px'
          mt='40px'
          mb='20px'
        >
          {/* <RentTab islocation={true} /> */}
          <Grid
            container
            spacing={2}
            sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }}
          >
            <Grid
              item
              lg={2.5}
              md={2.5}
              xs={12}
              display='flex'
              justifyContent='space-between'
              flexDirection='row'
            >
              <SelectSingleDropdown
                name='State'
                value={searchData.state}
                placeholder='Select State'
                options={toSearchData.states}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    state: option?.name,
                    stateId: option?.id,
                  })
                }
              />
              <Divider orientation='vertical' />
            </Grid>

            <Grid
              item
              lg={2.5}
              md={2.5}
              xs={12}
              display='flex'
              justifyContent='space-between'
            >
              <SelectSingleDropdown
                name='City'
                placeholder='Select City'
                value={searchData.city}
                options={toSearchData.cities}
                message='Select City'
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    city: option?.name,
                    cityId: option?.id,
                  })
                }
              />
              <Divider orientation='vertical' />
            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              xs={12}
              display='flex'
              justifyContent='space-between'
              flexDirection='row'
            >
              <SelectSingleDropdown
                name='What do you want to store'
                value={searchData.type}
                placeholder='Select type'
                options={toSearchData.types}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    type: option?.name,
                  })
                }
              />
              <Divider orientation='vertical' />
            </Grid>
            <Grid
              item
              lg={islocation ? 2 : 2.5}
              md={2.5}
              xs={12}
              display='flex'
              justifyContent='center'
            >
              <SelectSingleDropdown
                name='Unit size'
                value={searchData.unitSize}
                placeholder='Select unit size'
                options={toSearchData.unitSize}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    unitSize: option?.name,
                  })
                }
              />
            </Grid>
            <Grid
              item
              lg={islocation ? 2.5 : 2}
              md={2}
              xs={12}
              textAlign='right'
            >
              <Box
                display={'flex'}
                gap='20px'
                width='100%'
                justifyContent={islocation ? 'center' : 'flex-end'}
                flexWrap={islocation ? 'wrap' : 'unset'}
              >
                {islocation && (
                  <Button
                    width='150px'
                    variant='outlined'
                    onClick={onNearbySearch}
                    startIcon={<MyLocationRoundedIcon />}
                    loading={loading}
                  >
                    Search Near Me
                  </Button>
                )}
                <Button
                  variant='contained'
                  width={{ lg: '80px', md: '150px', sm: '80px', xs: '80px' }}
                  disabled={
                    (searchData.state && searchData.city) === '' ? true : false
                  }
                  onClick={onSearch}
                  loading={loading}
                >
                  Search
                </Button>
              </Box>
            </Grid>
            {isErrMessage ? (
              <Typography textAlign='center' color='error' pt='20px'>
                No data exists against this state
              </Typography>
            ) : null}
          </Grid>

          {/* // For Tab  */}
          <Grid
            container
            spacing={2}
            sx={{ display: { lg: 'none', md: 'none', sm: 'flex', xs: 'none' } }}
          >
            <Grid
              item
              lg={2.5}
              md={4}
              sm={islocation ? 6 : 4}
              xs={12}
              display='flex'
              justifyContent='space-between'
              flexDirection='row'
            >
              <SelectSingleDropdown
                name='State'
                value={searchData.state}
                placeholder='Select State'
                options={toSearchData.states}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    state: option?.name,
                    stateId: option?.id,
                  })
                }
              />
              <Divider orientation='vertical' />
            </Grid>
            <Grid
              item
              lg={2.5}
              md={4}
              sm={islocation ? 6 : 4}
              xs={12}
              display='flex'
              justifyContent='space-between'
              flexDirection='row'
            >
              <SelectSingleDropdown
                name='City'
                placeholder='Select City'
                value={searchData.city}
                options={toSearchData.cities}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    city: option?.name,
                    cityId: option?.id,
                  })
                }
              />
              {!islocation && <Divider orientation='vertical' />}
            </Grid>
            <Grid
              item
              lg={2}
              sm={islocation ? 12 : 4}
              xs={12}
              textAlign='right'
            >
              <Box
                display='flex'
                gap='20px'
                justifyContent={islocation ? 'start' : 'center'}
                flexWrap={islocation ? 'wrap' : 'unset'}
              >
                {islocation && (
                  <Button
                    width='165px'
                    variant='outlined'
                    startIcon={<MyLocationRoundedIcon />}
                    onClick={onNearbySearch}
                    loading={loading}
                  >
                    Search Near Me
                  </Button>
                )}
                <Button
                  variant='contained'
                  width='165px'
                  // onClick={fetchUnitsSearch}
                  disabled={
                    (searchData.city && searchData.state) === '' ? true : false
                  }
                  loading={loading}
                  onClick={onSearch}
                >
                  Search
                </Button>
              </Box>
            </Grid>
            {isErrMessage && (
              <Typography textAlign='center' color='error' pt='20px'>
                No data exists against this state
              </Typography>
            )}
          </Grid>

          {/* For Mobile */}
          <Grid
            container
            spacing={2}
            sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'flex' } }}
          >
            <Grid
              item
              lg={2.5}
              md={4}
              sm={4}
              xs={12}
              display='flex'
              justifyContent='space-between'
              flexDirection='column'
              gap='20px'
            >
              <SelectSingleDropdown
                name='State'
                value={searchData.state}
                placeholder='Select State'
                options={toSearchData.states}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    state: option?.name,
                    stateId: option?.id,
                  })
                }
              />
              <Divider orientation='horizontal' />
            </Grid>
            <Grid item lg={2.5} md={4} sm={4} xs={12}>
              <SelectSingleDropdown
                name='City'
                placeholder='Select City'
                value={searchData.city}
                options={toSearchData.cities}
                onChange={(e: any, option: any) =>
                  setSearchData({
                    ...searchData,
                    city: option?.name,
                    cityId: option?.id,
                  })
                }
              />
            </Grid>
            <Grid item lg={2} sm={4} xs={12} textAlign='right'>
              <Box display='flex' flexDirection='column' gap='20px'>
                {islocation && (
                  <Button
                    width='100%'
                    variant='outlined'
                    startIcon={<MyLocationRoundedIcon />}
                    onClick={onNearbySearch}
                    loading={loading}
                  >
                    Search Near Me
                  </Button>
                )}

                <Button
                  variant='contained'
                  width='100%'
                  onClick={onSearch}
                  disabled={
                    (searchData.city && searchData.state) === '' ? true : false
                  }
                  loading={loading}
                >
                  Search
                </Button>
              </Box>
            </Grid>
            {isErrMessage && (
              <Typography textAlign='center' color='error' pt='20px'>
                No data exists against this state
              </Typography>
            )}
          </Grid>
        </Box>
      </Grid>
    </React.Fragment>
  );
};
export default HeroSection;
