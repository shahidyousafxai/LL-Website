// Library Imports
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

// Local Imports
import { globalSearchedAction } from '@/redux/reducers/globalSearchedReducer';
import Button from '@/components/shared/Button';
import SelectSingleDropdown from '@/components/shared/SelectDropdown';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import ApiController from '@/network/api';
import { globalSearchedHeroDetailsAction } from '@/redux/reducers/globalSearcedHeroDetailsReducer';

interface IRentTabProps {
  islocation?: boolean;
  fromTab?: string;
}

const RentTab: FC<IRentTabProps> = ({ islocation, fromTab }) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isErrMessage, setIsErrorMessage] = useState(false);
  const [toSearchData, setToSearchData] = useState({
    states: [],
    cities: [],
    types: [
      { id: '1', name: 'ALL TYPES' },
      { id: '2', name: 'RV and CARS' },
      { id: '3', name: 'PERSONAL ITEMS' },
      { id: '4', name: 'BOATS and PWC' },
      { id: '5', name: 'TOOLS and MATERIALS' },
    ],
    unitSize: [
      { id: '1', name: 'All Sizes' },
      { id: '2', name: 'Standard' },
      { id: '3', name: 'Super Luxe' },
      { id: '4', name: 'Luxe' },
    ],
  });
  const [searchData, setSearchData] = useState({
    state: '',
    stateId: '',
    city: '',
    cityId: '',
    type: '',
    unitSize: '',
  });

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

  // Fetch Units Search

  const createPayload = () => {
    const payload = {
      state: searchData.state,
      city: searchData.city,
      unit_size: searchData.unitSize?.toUpperCase(),
      type: searchData.type,
    };
    return payload;
  };
  const fetchUnitsSearch = async () => {
    setLoading(true);
    ApiController.fetchUnitSearchCall(createPayload(), (response) => {
      if (response.success) {
        if (response?.data?.length > 0) {
          setLoading(false);
          const searchedQuery = {
            state: searchData.state,
            city: searchData.city,
            unitSize: searchData.unitSize,
            type: searchData.type,
            tab: fromTab,
            pathName: 'Home',
          };
          console.log('response.data', response?.data);
          dispatch(globalSearchedAction(response?.data));
          dispatch(globalSearchedHeroDetailsAction(searchedQuery));
          setIsErrorMessage(false);
          Router.push(
            { pathname: '/locations/details', query: { from: 'home' } },
            '/locations/details'
          );
          setLoading(false);
        } else {
          setIsErrorMessage(true);
          setLoading(false);
        }
      } else {
        setLoading(false);
        setIsErrorMessage(false);
      }
    });
  };

  // Fetch States and Citites
  useEffect(() => {
    fetchStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchData.stateId !== '') {
      console.log('now call this');
      fetchCities({
        id: searchData.stateId,
      });
    }
    setSearchData({ ...searchData, city: '', cityId: '' });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData.stateId]);

  // UseEffect To hide Error Message
  useEffect(() => {
    setTimeout(() => {
      setIsErrorMessage(false);
    }, 3000);
  }, [isErrMessage]);
  return (
    <React.Fragment>
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
        <Grid item lg={islocation ? 2.5 : 2} md={2} xs={12} textAlign='right'>
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
                startIcon={<MyLocationRoundedIcon />}
              >
                Search Near Me
              </Button>
            )}
            <Button
              variant='contained'
              width={{ lg: '80px', md: '150px', sm: '80px', xs: '80px' }}
              disabled={searchData.state === '' ? true : false}
              onClick={fetchUnitsSearch}
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
        <Grid item lg={2} sm={islocation ? 12 : 4} xs={12} textAlign='right'>
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
              >
                Search Near Me
              </Button>
            )}
            <Button
              variant='contained'
              width='165px'
              onClick={fetchUnitsSearch}
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
              >
                Search Near Me
              </Button>
            )}

            <Button
              variant='contained'
              width='100%'
              onClick={fetchUnitsSearch}
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
    </React.Fragment>
  );
};
export default RentTab;
