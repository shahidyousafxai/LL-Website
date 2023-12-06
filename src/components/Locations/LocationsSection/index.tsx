// Library Imports
import React, { FC, useState, useRef, useEffect } from 'react';
import { Grid, Box, CircularProgress, Typography, Alert } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationCard from '@/components/shared/LocationCard';

// Local Imports
import Map from '@/components/shared/Map';
import styles from '@/styles/locations.module.css';
import LocationsMapMemoized from '../LocationsMap';

interface ILocationsSectionProps {
  campuses: any[];
  loading: boolean;
  serverError: boolean;
}

const LocationsSection: FC<ILocationsSectionProps> = ({
  campuses,
  loading,
  serverError,
}) => {
  const [viewUnitsLoading, setViewUnitsLoading] = useState<boolean>(false);
  const [isCampusUnitsEmpty, setIsCampusUnitsEmpty] = useState<boolean>(false);
  const viewUnitsRef = useRef<any>(null);

  const triggerChildFunction = (name: string) => {
    viewUnitsRef?.current?.callFnFromChild(name);
  };

  if (loading || viewUnitsLoading)
    return (
      <Grid
        container
        bgcolor={'secondary.main'}
        height={'80vh'}
        m='auto'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress size={40} />
      </Grid>
    );

  return (
    <React.Fragment>
      <Grid
        container
        bgcolor={'secondary.main'}
        mt='20px'
        p='10px'
        rowGap={'20px'}
        borderRadius={{ lg: '0px', md: '12px', sm: '12px', xs: '12px' }}
      >
        {isCampusUnitsEmpty ? (
          <Box width='100%'>
            <Typography textAlign='right' color='error' pt='5px'>
              No Units Found In This Campus
            </Typography>
          </Box>
        ) : null}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          width={'100%'}
          height={{ lg: '87vh', md: '70vh', sm: '50vh', xs: '60vh' }}
          p='8px'
        >
          <LocationsMapMemoized
            data={campuses}
            triggerChildFunction={triggerChildFunction}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box
            className={styles.locationsContainer}
            p='8px'
            height='100%'
            m='auto'
          >
            {campuses?.length === 0 && (
              <Box textAlign='center' m={'auto'}>
                <Typography
                  pt='5px'
                  component='div'
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  gap='8px'
                >
                  <DescriptionIcon fontSize='large' />
                  No Data Found
                </Typography>
                {serverError && (
                  <Typography color='error' fontSize='20px'>
                    Server Error Occurred
                  </Typography>
                )}
              </Box>
            )}
            {}
            {campuses?.map((item, index) => {
              return (
                <LocationCard
                  key={index}
                  name={item?.name}
                  street={item?.street}
                  city={item?.city}
                  stateName={item?.state_name}
                  postalCode={item?.postalcode}
                  code={item?.code}
                  availability={item?.availability}
                  phoneNumber={item?.campus_contact}
                  unitType={item?.unit_type}
                  campuseFee={''}
                  item={item}
                  ref={viewUnitsRef}
                  setViewUnitsLoading={setViewUnitsLoading}
                  setIsCampusUnitsEmpty={setIsCampusUnitsEmpty}
                  isCampusUnitsEmpty={isCampusUnitsEmpty}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default LocationsSection;
