//Library Imports
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
//Local Imports
import { campusUnitDetailsAction } from '@/redux/reducers/campusUnitDetilsReducer';
import CallenderIcon from '@/assets/Icons/CallenderIcon';
import Button from '../Button';
import IconText from '../IconText';
import { truncateString } from '@/utils/utils';
import { campusDetailsAction } from '@/redux/reducers/campusDetailsReducer';
import { RootState } from '@/redux/store';

interface ISearchedUnitCardProps {
  unitType: string;
  ammenties: [{ amenity_id: string; amenity__name: string }];
  buyPrice?: string;
  leasePrice?: string;
  width: string; //lengthxwidth
  length: string;
  unitNumber: string;
  price: string;
  fromTab?: string;
  activeTab?: string;
  item: { [key: string]: string | number | any[] };
}

const SearchedUnitCard: FC<ISearchedUnitCardProps> = ({
  unitType,
  ammenties,
  buyPrice,
  leasePrice,
  width,
  length,
  unitNumber,
  price,
  fromTab,
  activeTab,
  item,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const unitDetails = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );

  const query = {
    tab: activeTab === '1' ? 'Rent' : 'Buy',
    campusUnitDetails: item,
  };
  const handleNavigate = () => {
    router.push(
      {
        pathname: `/details-unit/${item?.id}`,
        query: { unitDetails: JSON.stringify(query) },
      },
      `/details-unit/${item?.id}`
    );
    dispatch(campusUnitDetailsAction(query));
    dispatch(campusDetailsAction(unitDetails));
  };

  return (
    <React.Fragment>
      <Box
        bgcolor='#22242C'
        width='100%'
        p='20px'
        borderRadius='12px'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        alignItems='center'
      >
        <Box
          component='div'
          display='flex'
          alignItems='center'
          gap='60px'
          flexWrap='wrap'
          rowGap='10px'
        >
          <Box
            component='div'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            gap={
              ammenties?.length >= 5
                ? '30px'
                : ammenties?.length >= 4
                ? '10px'
                : '5px'
            }
            height='inherit'
          >
            <Typography color='text.primary' variant='h6' component='div'>
              {unitNumber}
            </Typography>
            <Box>
              <Typography color='primary.main' variant='body2'>
                {unitType}
              </Typography>
              <Typography color='text.primary' variant='h6' pt='2px'>
                {`${length} x ${width}`}
              </Typography>
            </Box>
          </Box>
          <Box
            maxHeight='110px'
            minHeight='max-content'
            overflow={'auto'}
            pr='5px'
          >
            {ammenties?.map((amenity, index) => {
              return (
                <IconText
                  text={truncateString(amenity?.amenity__name, 4)}
                  icon={<CallenderIcon />}
                  key={index}
                />
              );
            })}
            {ammenties?.length <= 0 && (
              <IconText
                text={
                  fromTab === 'Rent'
                    ? 'Available for Rent'
                    : fromTab === 'Buy'
                    ? 'Available for Purchase'
                    : 'Available'
                }
                icon={<CallenderIcon />}
              />
            )}
          </Box>
        </Box>
        <Box
          component='div'
          display='flex'
          alignItems='center'
          gap='30px'
          flexWrap='wrap'
          rowGap='10px'
        >
          <Box component='div' display='flex' alignItems='center' gap='6px'>
            <Typography color='text.primary' variant='h5'>
              {`$${price}`}
            </Typography>
            {activeTab === '1' && (
              <Typography color='text.secondary' variant='body2'>
                / month
              </Typography>
            )}
          </Box>
          <Box component='div'>
            <Button variant='contained' width='85px' onClick={handleNavigate}>
              Select
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SearchedUnitCard;
