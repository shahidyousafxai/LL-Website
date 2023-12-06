/// Library Imports
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography, Divider, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// Local Imports
import Button from '@/components/shared/Button';
import Checkbox from '@/components/shared/Checkbox';
import TextField from '@/components/shared/TextField';
import { dividerClr } from '@/theme/GlobalVariables';
import RentTabLocation from '../../LocationTabs/RentTabLocation';
import sx from '@/utils/sx.style';
import { RootState } from '@/redux/store';
// import { unitsdata as searchedData } from '@/utils/data';

type CheckboxName = 'luxe' | 'superLuxe' | 'standard' | 'allSizes';
const initialCheckboxVal = {
  allSizes: false,
  standard: false,
  'super Luxe': false,
  luxe: false,
};
const unitTypeMappings: Record<CheckboxName, string> = {
  luxe: 'LUXE',
  superLuxe: 'SUPER LUXE',
  standard: 'STANDARD',
  allSizes: 'ALL SIZES',
};

const SearchResults: FC = () => {
  //  DATA FETCHING
  const searchedData = useSelector(
    (state: RootState) => state?.globalSearchedReducer?.globalSearcedListing
  );

  const searchedDetailsHero = useSelector(
    (state: RootState) =>
      state?.globalSearcedHeroDetailsReducer?.globalSearchedHeroDetails
  );

  const newSearchedData = searchedData?.filter((item) => {
    if (
      item?.unit_page_uid !== '' &&
      item?.unit_page_uid !== null &&
      item?.unit_page_uid !== undefined
    ) {
      return item !== undefined && item !== null;
    }
  });
  console.log('Units with units page', newSearchedData);
  const [isFilterStates, setIsFilterStates] = useState(initialCheckboxVal);
  const [searchedDataList, setSearchedDataList] = useState<any[]>([]);
  const [rentTabList, setRentTabList] = useState<any[]>([]);
  const [buyTabList, setBuyTabList] = useState<any[]>([]);
  const [minSQft, setMinSQft] = useState<number>();
  const [priceRange, setPriceRange] = useState({
    minRange: 0,
    maxRange: 0,
  });
  const router = useRouter();
  const pathName = router?.query;
  const [value, setValue] = useState(
    searchedDetailsHero?.tab === 'Rent'
      ? '1'
      : searchedDetailsHero?.tab === 'Buy'
      ? '2'
      : searchedDetailsHero?.from === 'locations'
      ? '1'
      : '1'
  );
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // Hanlde OnChange For Type of Features
  const handleOnChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedDataList((prev) => {
      // Filter  Types
      if (event.target.name === 'All Types' && event.target.checked) {
        return searchedData;
      } else if (
        event.target.name === "RV's and Cars" &&
        event.target.checked
      ) {
        const filtered = prev?.filter(
          (item) =>
            item?.storage_features &&
            item?.storage_features?.includes(event.target.name)
        );
        return filtered;
      } else if (
        event.target.name === 'Personal Items' &&
        event.target.checked
      ) {
        const filtered = prev?.filter(
          (item) =>
            item?.storage_features &&
            item?.storage_features?.includes(event.target.name)
        );
        return filtered;
      } else if (
        event.target.name === "Boats & PWC'S" &&
        event.target.checked
      ) {
        const filtered = prev?.filter(
          (item) =>
            item?.storage_features &&
            item?.storage_features?.includes(event.target.name)
        );
        return filtered;
      } else if (
        event.target.name === 'Tools and Materials' &&
        event.target.checked
      ) {
        const filtered = prev?.filter(
          (item) =>
            item?.storage_features &&
            item?.storage_features?.includes(event.target.name)
        );
        return filtered;
      } else {
        return searchedData;
      }
    });
  };

  // HANLDE ONCHANGE OF   UNIT SIZE FILTERS
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const name: CheckboxName = event.target.name as CheckboxName;
    setIsFilterStates({ ...isFilterStates, [name]: checked });
  };

  // Hanlde OnChange in MinSQFT
  const handleOnChangeSQFT = (event: any) => {
    setMinSQft(event.target.value);
    const value = +event?.target?.value;
    if (value) {
      const filterData = searchedData?.map((item: any) => {
        if (item?.sq_ft >= value) {
          return item;
        }
      });
      setSearchedDataList(filterData);
    } else {
      setSearchedDataList(searchedData);
    }
  };

  // Hanlde OnChange Price Range
  const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const minValue = name === 'minRange' ? +value : priceRange?.minRange;
    const maxValue = name === 'maxRange' ? +value : priceRange?.maxRange;
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.value,
    });
    if (priceRange?.minRange && priceRange?.maxRange) {
      if (searchedDetailsHero?.tab === 'Rent') {
        const filtereData = searchedData
          ?.map((item: any) => {
            const leasePrice = +item?.lease_price;

            if (leasePrice >= minValue && leasePrice <= maxValue) {
              return item;
            } else {
              return null;
            }
          })
          .filter((item: any) => item !== null);
        setSearchedDataList(filtereData);
      } else if (searchedDetailsHero?.tab === 'Buy') {
        const filtereData = searchedData
          ?.map((item: any) => {
            const buyPrice = +item?.buy_price;

            if (buyPrice >= minValue && buyPrice <= maxValue) {
              return item;
            } else {
              return null;
            }
          })
          .filter((item: any) => item !== null);
        setSearchedDataList(filtereData);
      } else {
        const filtereData = searchedData
          ?.map((item: any) => {
            const leasePrice = +item?.lease_price;
            const buyPrice = +item?.buy_price;
            if (
              leasePrice >= minValue ||
              (buyPrice >= minValue && leasePrice <= maxValue) ||
              buyPrice <= maxValue
            ) {
              return item;
            } else {
              return null;
            }
          })
          .filter((item: any) => item !== null);
        setSearchedDataList(filtereData);
      }
    } else {
      setSearchedDataList(searchedData);
    }
  };

  const onPressResetAllFilters = () => {
    setSearchedDataList(searchedData);
    setMinSQft(0);
    setPriceRange({
      minRange: 0,
      maxRange: 0,
    });
    setIsFilterStates(initialCheckboxVal);
  };

  useEffect(() => {
    const filteredData = searchedData?.filter((item: any) => {
      const selectedFilters = Object.keys(isFilterStates).filter(
        //@ts-expect-error
        (key) => isFilterStates[key]
      );
      if (selectedFilters.length === 0) {
        return true;
      }
      return selectedFilters?.some(
        (filter) => item?.unit_type?.toLowerCase() === filter.toLowerCase()
      );
    });
    setSearchedDataList(filteredData);
  }, [isFilterStates, searchedData]);

  // ALL USEEFFECTS
  useEffect(() => {
    setSearchedDataList(searchedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const rentTabDataList = searchedDataList?.filter(
      (item) => item?.is_available_for_lease === true
    );
    const buyTabDataList = searchedDataList?.filter(
      (item) => item?.is_available_for_sale === true
    );
    setRentTabList(rentTabDataList);
    setBuyTabList(buyTabDataList);
  }, [searchedDataList]);

  return (
    <React.Fragment>
      <Grid container mt='80px' spacing={'30px'} mb='80px'>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Box
            width='100%'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='subtitle1' color='text.primary'>
              Filters
            </Typography>
            <Button
              variant='text'
              width='max-content'
              height='20px !important'
              minHeight='max-content'
              padding='10px'
              radius='0px'
              onClick={onPressResetAllFilters}
            >
              Reset all
            </Button>
          </Box>
          <Divider sx={{ mt: '20px', mb: '20px' }} />
          <Box>
            <Typography variant='body1'>Type of Feature</Typography>
            <Box display='flex' flexDirection='column' gap='10px' mt='10px'>
              {/* <Checkbox label='All Types' onChange={handleOnChange} /> */}
              <Checkbox label="RV's and Cars" />
              <Checkbox label='Personal Items' />
              <Checkbox label="Boats & PWC'S" />
              <Checkbox label='Tools and Materials' />
            </Box>
          </Box>
          <Divider sx={{ mt: '20px', mb: '20px' }} />
          <Box>
            <Typography variant='body1'>Price Range</Typography>
            <Box
              display='flex'
              gap='10px'
              mt='10px'
              alignItems='center'
              color='text.secondary'
            >
              <TextField
                placeholder='Min'
                name='minRange'
                value={priceRange.minRange === 0 ? '' : priceRange.minRange}
                onChange={handleOnChangePrice}
              />
              -
              <TextField
                placeholder='Max'
                name='maxRange'
                value={priceRange.maxRange === 0 ? '' : priceRange.maxRange}
                onChange={handleOnChangePrice}
              />
            </Box>
          </Box>
          <Divider sx={{ mt: '20px', mb: '20px' }} />
          <Box>
            <Typography variant='body1'>Unit Size</Typography>
            <Box display='flex' flexDirection='column' gap='10px' mt='10px'>
              <Checkbox
                label='All Sizes'
                onChange={handleOnChange}
                checked={isFilterStates.allSizes}
                name='allSizes'
              />
              <Checkbox
                label='Luxe'
                onChange={handleOnChange}
                checked={isFilterStates.luxe}
                name='luxe'
              />
              <Checkbox
                label='Standard'
                onChange={handleOnChange}
                checked={isFilterStates.standard}
                name='standard'
              />
              <Checkbox
                label='Super Luxe'
                onChange={handleOnChange}
                checked={isFilterStates['super Luxe']}
                name='super Luxe'
              />
            </Box>
          </Box>
          <Divider sx={{ mt: '20px', mb: '20px' }} />
          <Box>
            <Typography variant='body1'>Min Sq. Ft.</Typography>
            <Box mt='10px'>
              <TextField
                placeholder='Min Sq. Ft.'
                name='MinSq'
                value={minSQft}
                onChange={handleOnChangeSQFT}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Box>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: dividerClr,
                }}
              >
                {searchedDetailsHero?.pathName === 'Home' && (
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    sx={{ mt: '-20px' }}
                  >
                    {(searchedDetailsHero?.tab === 'Rent' ||
                      searchedDetailsHero?.tab === 'typeFeature') && (
                      <Tab
                        label='Rent'
                        value='1'
                        sx={sx.location.locationDetailsTab}
                      />
                    )}
                    {(searchedDetailsHero?.tab === 'Buy' ||
                      searchedDetailsHero?.tab === 'typeFeature') && (
                      <Tab
                        label='Buy'
                        value='2'
                        sx={sx.location.locationDetailsTab}
                      />
                    )}
                  </TabList>
                )}
                {searchedDetailsHero?.tab === 'campusUnits' && (
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    sx={{ mt: '-20px' }}
                  >
                    <Tab
                      label='Rent'
                      value='1'
                      sx={sx.location.locationDetailsTab}
                    />
                    <Tab
                      label='Buy'
                      value='2'
                      sx={sx.location.locationDetailsTab}
                    />
                  </TabList>
                )}
              </Box>
              <Box>
                <TabPanel value='1' sx={{ padding: '0' }}>
                  <RentTabLocation
                    searchedList={rentTabList}
                    from={searchedDetailsHero?.tab}
                    activeTab={value}
                  />
                </TabPanel>
                <TabPanel value='2' sx={{ padding: '0' }}>
                  <RentTabLocation
                    searchedList={buyTabList}
                    from={searchedDetailsHero?.tab}
                    activeTab={value}
                  />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default SearchResults;
