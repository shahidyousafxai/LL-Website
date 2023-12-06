// Library Imports
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Box, Typography, Collapse } from '@mui/material';

// Local Imports
import assets from '@/assets';
import Button from '../Button';
import IconText from '../IconText';
import CallIcon from '@/assets/Icons/CallIcon';
import CopyIcon from '@/assets/Icons/CopyIcon';
import CallenderIcon from '@/assets/Icons/CallenderIcon';
import DollarCircleIcon from '@/assets/Icons/DollarCircleIcon';
import { primaryMain } from '@/theme/GlobalVariables';
import { campusDetailsAction } from '@/redux/reducers/campusDetailsReducer';
import { globalSearchedAction } from '@/redux/reducers/globalSearchedReducer';
import { globalSearchedHeroDetailsAction } from '@/redux/reducers/globalSearcedHeroDetailsReducer';
import ApiController from '@/network/api';
import Styles from '@/styles/locations.module.css';

interface ILocationCardProps {
  name: string;
  street: string;
  city: string;
  postalCode: string;
  stateName: string;
  code: string;
  availability: string | null;
  phoneNumber: string | null;
  unitType: string[] | null;
  campuseFee?: string | null;
  item?: { [key: string]: string | any[] };
  setViewUnitsLoading?: any;
  setIsCampusUnitsEmpty?: any;
  isCampusUnitsEmpty: boolean;
}
interface IPropsMapPopup {
  location: any;
}

const LocationCardTabAndDesktop = (
  {
    name,
    street,
    city,
    stateName,
    postalCode,
    code,
    availability,
    phoneNumber,
    unitType,
    campuseFee,
    item,
    setViewUnitsLoading,
    setIsCampusUnitsEmpty,
    isCampusUnitsEmpty,
  }: ILocationCardProps,
  ref: ForwardedRef<any>
) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  // Fetch Units By Campus Name
  const fetchUnitsCampusCall = async (name: string, from: string) => {
    setLoading(true);
    if (setViewUnitsLoading && from === 'fromParent') {
      setViewUnitsLoading(true);
    }
    ApiController.fetchCampusUnitSearchCall({ campus: name }, (response) => {
      if (response.success) {
        // STOP LOADING
        setLoading(false);
        if (setViewUnitsLoading && from === 'fromParent') {
          setViewUnitsLoading(false);
        }
        // IF DATA IS NOT EMPTY
        if (response?.data?.length > 0) {
          dispatch(campusDetailsAction(item));
          dispatch(globalSearchedAction(response?.data));
          const searchedQuery = {
            state: item?.state_name,
            city: item?.city,
            unitSize: '',
            type: '',
            tab: 'campusUnits',
          };
          dispatch(globalSearchedHeroDetailsAction(searchedQuery));
          router.push(
            {
              pathname: '/locations/details',
              query: { from: 'locations' },
            },
            '/locations/details'
          );
        }
        if (response?.data?.length === 0) {
          // IF DATA IS EMPTY
          setIsCampusUnitsEmpty(true);
        } else {
          setIsCampusUnitsEmpty(false);
        }
      } else {
        setLoading(false);
        if (setViewUnitsLoading) {
          setViewUnitsLoading(false);
          setIsCampusUnitsEmpty(false);
        }
      }
    });
  };
  // Handle Navigate
  const handleNavigate = (action: string) => {
    if (action === 'details') {
      router.push(
        {
          pathname: `/details-campus/${!item?.unit_page_endUrl ? name?.replaceAll(' ', '-') : item?.unit_page_endUrl}`,
          query: { unitDetails: JSON.stringify(item) },
        },
        `/details-campus/${!item?.unit_page_endUrl ? name?.toLowerCase()?.replaceAll(' ', '-') : item?.unit_page_endUrl}`
      );
      dispatch(campusDetailsAction(item));
    }
  };

  // PASS FUNC TO PARENT

  useImperativeHandle(ref, () => ({
    callFnFromChild(name: string) {
      fetchUnitsCampusCall(name, 'fromParent');
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsCampusUnitsEmpty(false);
    }, 3000);
  }, [isCampusUnitsEmpty]);

  return (
    <React.Fragment>
      <Box
        display='flex'
        gap='20px'
        width='100%'
        bgcolor='#22242C'
        borderRadius='12px'
        p='14px'
        justifyContent='center'
        flexDirection={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
      >
        <Box
          display='flex'
          justifyContent='center'
          width={{ lg: '260px', md: '260px', sm: '190px', xs: '100%' }}
          height='220px'
        >
          <Image
            src={assets.videoImg}
            alt='Campus Name'
            style={{
              borderRadius: '12px',
              width: 'inherit',
              height: 'inherit',
            }}
          />
        </Box>
        <Box
          width='100%'
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
        >
          <Box>
            <Typography variant='subtitle1'>{name}</Typography>
            <Typography variant='body2' color='text.secondary' pt='5px'>
              {street},
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {stateName}, {code} {postalCode}
            </Typography>
          </Box>
          <Box width='inherit' display='flex' flexWrap='wrap'>
            {phoneNumber !== null ? (
              <IconText
                text={phoneNumber}
                color='primary.main'
                icon={<CallIcon />}
                sx={{ flexBasis: '150px', flexGrow: 1 }}
              />
            ) : null}

            {availability !== null ? (
              <IconText
                text='Available'
                icon={<CopyIcon />}
                sx={{ flexBasis: '150px', flexGrow: 1 }}
              />
            ) : null}
            {/* @ts-ignore */}
            {unitType?.length > 0 ? (
              <IconText
                // @ts-ignore
                text={unitType?.map((item) => ` ${item} `).join('/')}
                icon={<CallenderIcon />}
                sx={{ flexBasis: '150px', flexGrow: 1 }}
              />
            ) : null}

            {campuseFee !== null && campuseFee !== '' ? (
              <IconText
                text='From $552.00'
                icon={<DollarCircleIcon />}
                sx={{ flexBasis: '150px', flexGrow: 1 }}
              />
            ) : null}
          </Box>
          <Box width='100%' display='flex' flexDirection='column' gap='10px'>
            <Button
              width='100%'
              variant='outlined'
              onClick={() => fetchUnitsCampusCall(name, 'locationCard')}
              loading={loading}
            >
              View Units
            </Button>
            <Button
              width='100%'
              variant='contained'
              onClick={() => handleNavigate('details')}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

const LocationCard = forwardRef<any, ILocationCardProps>(
  LocationCardTabAndDesktop
);
export default LocationCard;

export const LocationCardMobile = () => {
  const [isDetails, setIsDetails] = useState<boolean>(false);
  const [matched, setMatched] = useState<number>();
  const locations = [
    {
      id: 1,
      name: 'Henderson, NV',
      description: '1021 Olsen Street, Henderson, NV 89011',
      detils: [{ phone: '209-896-0903' }],
    },
    {
      id: 2,
      name: 'Prescott, AZ',
      description: '2615 Deep Well Ranch Road, ﻿Prescott AZ, 86301',
      detils: [{ phone: '209-896-0903' }],
    },
    {
      id: 3,
      name: 'Lake Havasu City, AZ',
      description: '3510 Sweetwater Ave, Lake Havasu, AZ 86406',
      detils: [{ phone: '209-896-0903' }],
    },
    {
      id: 4,
      name: 'Henderson, NV',
      description: '1021 Olsen Street, Henderson, NV 89011',
      detils: [{ phone: '209-896-0903' }],
    },
    {
      id: 6,
      name: 'Henderson, NV',
      description: '1021 Olsen Street, Henderson, NV 89011',
      detils: [{ phone: '209-896-0903' }],
    },
    {
      id: 7,
      name: 'Henderson, NV',
      description: '1021 Olsen Street, Henderson, NV 89011',
      detils: [{ phone: '209-896-0903' }],
    },
  ];
  return (
    <React.Fragment>
      {locations?.map((location, index) => {
        return (
          <Box
            bgcolor='#22242C'
            width='100%'
            p='14px'
            display='flex'
            gap='10px'
            borderRadius='12px'
            key={index}
            onClick={() => {
              setIsDetails(!isDetails);
              setMatched(location.id);
            }}
            border={
              isDetails && matched === location.id
                ? `1px solid ${primaryMain}`
                : 'none'
            }
            sx={{ cursor: 'pointer' }}
          >
            <Box mt='8px'>
              <Typography
                bgcolor='primary.main'
                color='secondary.main'
                borderRadius={'50%'}
                height='32px'
                width='32px'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                {index + 1}
              </Typography>
            </Box>
            <Box>
              <Typography color='text.primary' variant='subtitle1'>
                {location.name}
              </Typography>
              <Typography color='text.secondary' variant='subtitle1'>
                {location.description}
              </Typography>
              {location.detils && matched === location.id && (
                <Collapse
                  in={isDetails}
                  unmountOnExit
                  sx={{ mt: '10px' }}
                  easing={'ease-out'}
                >
                  <IconText
                    text={location.detils[0].phone}
                    icon={<CallIcon />}
                    color='primary.main'
                  />
                </Collapse>
              )}
            </Box>
          </Box>
        );
      })}
    </React.Fragment>
  );
};
