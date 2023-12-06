// Library Imports
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress, Box, Grid, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { useSelector } from 'react-redux';
// Local Imports
import ReserveForm from '../ReserveForm';
import AboutUnitDetails from '../AboutCampusDetails';
import { RootState } from '@/redux/store';
import ApiController from '@/network/api';

const ReserveFormAndAboutSection = () => {
  // Router
  const router = useRouter();
  const campusName = router.asPath.split('/').pop()?.replaceAll('-', ' ');
  // DATA STATES
  const [campusData, setCampusData] = useState<any>({});
  const [campusPageData, setCampusPageData] = useState<{
    [key: string]: string;
  }>({});
  const [password, setPassword] = useState('');
  const [campusPageNotPublished, setCampusPageNotPublished] = useState(false);
  // ERROR STATES
  const [campusPageError, setCampusPageError] = useState<any>('');
  const [campusDataError, setCampusDataError] = useState<any>('');
  const [backendError, setBackendError] = useState<{ [x: string]: any }>({});
  // LOADING STATES
  const [overAllLoading, setOverAllLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [campusDataLoading, setCampusDataLoading] = useState(false);

  const unitDetails = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );

  //****************************** */ FUNCTIONS AND METHODS //****************************** */

  // Fetch Campus Detail Page
  const fetchCampusDetailPage = async (payload: {
    endUrl?: string;
    password: string;
  }) => {
    setLoading(true);
    ApiController.fetchCampusDetailPageCall(payload, (response) => {
      if (response.success) {
        const pageData = response?.data;
        const images = response?.data?.campus_image?.map(
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
        setCampusPageData((): any => ({
          id: pageData?.id,
          title: pageData?.title,
          description: pageData?.description,
          campus_images: images,
        }));
        setLoading(false);
        setCampusPageError('');
      } else {
        setLoading(false);
        const errors = response?.data?.message?.reduce((acc: { [x: string]: any }, curr: { [x: string]: any }) => ({ ...acc, ...curr }), {})
        setBackendError(errors);
        if (
          response?.data?.message[0]?.Campus ===
          'Campus Page is not published yet'
        ) {
          setCampusPageNotPublished(true);
        } else {
          setCampusPageNotPublished(false);
        }
        setCampusPageError(response.data);
      }
    });
  };

  // Fetch Single Campus Search
  // const fetchSingleCampusSearch = async () => {
  //   console.log('---------->>>>', campusName);
  //   setCampusDataLoading(true);
  //   ApiController.fetchSingleCampusSearchCall(
  //     { name: campusName },
  //     (response) => {
  //       if (response.success) {
  //         setCampusData(response.data);
  //         setCampusDataLoading(false);
  //       } else {
  //         setCampusDataLoading(false);
  //       }
  //     }
  //   );
  // };

  // useEffect(() => {
  //   if (campusData[0]?.campus?.length > 0) {
  //     setOverAllLoading(false);
  //     if (
  //       campusData[0]?.campus[0]?.campus_page_uid !== '' &&
  //       campusData[0]?.campus[0]?.campus_page_uid !== null &&
  //       campusData[0]?.campus[0]?.campus_page_uid !== undefined
  //     ) {
  //       fetchCampusDetailPage({
  //         pageId: campusData[0]?.campus[0]?.campus_page_uid,
  //         password: password,
  //       });
  //     }
  //   }
  // }, [campusData]);

  // Fetch Single Campuse Search
  useEffect(() => {
    if (campusName !== '[slug]') {
      fetchCampusDetailPage({
        endUrl: campusName,
        password: password,
      });
    }
  }, [campusName !== '[slug]']);

  if (overAllLoading || campusDataLoading) {
    return (
      <Grid
        container
        height={'50vh'}
        m='auto'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress size={40} />
      </Grid>
    );
  }
  console.log('------------>>>res', campusPageData);
  return (
    <React.Fragment>
      <ReserveForm campuseData={campusData} />
      {Object.keys(campusPageData).length > 0 || backendError?.Campus === "Campus Page is password protected" ? (
        <React.Fragment>
          <AboutUnitDetails
            error={backendError}
            loading={loading}
            campusPageData={campusPageData}
            password={password}
            setPassword={setPassword}
            onClickToCheck={() =>
              fetchCampusDetailPage({
                endUrl: campusName,
                password: password,
              })
            }
          // pageNotPublished={campusPageNotPublished}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default ReserveFormAndAboutSection;
