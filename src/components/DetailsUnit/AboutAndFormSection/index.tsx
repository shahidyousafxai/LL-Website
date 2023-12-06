// Library Imports
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Box, Grid, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

// Local Imports
import ReserveFormUnitDetails from '../ReserveFormUnitDetails';
import AboutUnitDetails from '../AboutUnitDetails';
import ApiController from '@/network/api';

const AboutAndFormSectionDetailsUnit = () => {
  // REDUX STATES
  const campusUnitDetils = useSelector(
    (state: RootState) => state?.campusUnitDetailsReducer?.campusUnitDetails
  );
  const unitDetails = campusUnitDetils?.campusUnitDetails;
  console.log('unitDetails --->> ', unitDetails);
  // DATA STATES
  const [unitPageData, setUnitPageData] = useState<any>({});
  const [password, setPassword] = useState('');
  const [isPagePublished, setIsPublished] = useState<boolean>(false);
  // ERROR STATES
  const [unitPageError, setUnitPageError] = useState<any>('');

  // LOADING STATES
  const [loading, setLoading] = useState(false);

  // Fetch Campus Detail Page
  const fetchUnitDetailPage = async (payload: {
    pageId: string;
    password: string;
  }) => {
    setLoading(true);
    ApiController.fetchUnitDetailPageCall(payload, (response) => {
      if (response.success) {
        setUnitPageData(response.data);
        const pageData = response?.data;
        const images = response?.data?.unit_page_image?.map(
          (img: { id: number; url: string }) => {
            const url = img?.url?.replace('download', 'view');
            return {
              default: {
                src: `${url}`,
                height: 800,
                width: 1200,
                blurDataURL: `${url}`,
                blurWidth: 8,
                blurHeight: 4,
              },
            };
          }
        );
        setUnitPageData((): any => ({
          id: pageData?.id,
          title: pageData?.title,
          description: pageData?.description,
          unitImages: images,
          amenities: pageData?.campus_amenities,
        }));
        setUnitPageError('');
        setLoading(false);
      } else {
        setLoading(false);
        if (
          response?.data?.message[0]?.Unit === 'Unit Page is not published yet'
        ) {
          setIsPublished(true);
        } else {
          setIsPublished(false);
        }
        setUnitPageError(response.data);
      }
    });
  };

  useEffect(() => {
    if (
      unitDetails?.unit_page_uid !== '' &&
      unitDetails?.unit_page_uid !== null &&
      unitDetails?.unit_page_uid !== undefined
    ) {
      fetchUnitDetailPage({
        pageId: unitDetails?.unit_page_uid,
        password: password,
      });
    }
  }, [unitDetails]);

  return (
    <React.Fragment>
      <ReserveFormUnitDetails />
      {unitDetails?.unit_page_uid !== '' &&
      unitDetails?.unit_page_uid !== null ? (
        <AboutUnitDetails
          error={unitPageError}
          password={password}
          setPassword={setPassword}
          onClickToCheck={() => {
            fetchUnitDetailPage({
              pageId: unitDetails?.unit_page_uid,
              password: password,
            });
          }}
          loading={loading}
          unitPageData={unitPageData}
          isPublished={isPagePublished}
        />
      ) : (
        <Grid
          container
          height={'50vh'}
          m='auto'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
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
          </Box>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default AboutAndFormSectionDetailsUnit;
