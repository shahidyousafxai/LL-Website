// Library Imports
import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

//Local Imports
import { data } from '@/utils/data';
import assets from '@/assets';
import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
const ImageGallery = dynamic(() => import('../../shared/Gallery'), {
  ssr: false,
});

interface IAccountUnitDetailsProps {
  error: any;
  loading: boolean;
  campusPageData: { [key: string]: string | any };
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickToCheck: any;
  pageNotPublished: boolean;
}

const AboutUnitDetails: FC<IAccountUnitDetailsProps> = ({
  error,
  loading,
  campusPageData,
  password,
  setPassword,
  onClickToCheck,
  // pageNotPublished,
}) => {
  const images = [assets.videoImg, assets.blogImg, assets.formImg];
  console.log('erorrrrrrrrrrrrr', error);
  //   (img: { id: number; url: string }) => {
  //     const url = img?.url?.replace('download', 'view');
  //     return {
  //       default: {
  //         src: `${url}`,
  //         height: 800,
  //         width: 1200,
  //         blurDataURL: `${url}`,
  //         blurWidth: 8,
  //         blurHeight: 4,
  //       },
  //     };
  //   }
  // );
  return (
    <React.Fragment>
      {error?.Campus ? (
        <React.Fragment>
          {error?.Campus === 'Campus Page is password protected' ? (
            <Grid container spacing={3} mb='150px' mt='120px' rowGap={'100px'}>
              <Box textAlign='center' width='100%'>
                <Typography variant='h3' color='text.primary'>
                  Please Enter Password
                </Typography>
                <Box
                  display='flex'
                  alignItems='start'
                  gap='20px'
                  width='50%'
                  pt='30px'
                  m='auto'
                >
                  <TextField
                    placeholder='Enter Password'
                    name='password'
                    type='text'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={Boolean(error?.Campus)}
                    helperText={error?.Campus}
                  />
                  <Box mt='4px'>
                    <Button
                      variant='contained'
                      onClick={onClickToCheck}
                      loading={loading}
                    >
                      Check
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
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
      ) : (
        <React.Fragment>
          {loading ? (
            <Grid
              container
              height={'40vh'}
              m='auto'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <CircularProgress size={40} />
            </Grid>
          ) : (
            <Grid container spacing={3} mb='150px' mt='120px' rowGap={'100px'}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                order={{ lg: 1, md: 1, sm: 2, xs: 2 }}
              >
                <Box width={'100%'} height='100%'>
                  {campusPageData?.campus_images?.length > 0 ? (
                    <ImageGallery
                      images={
                        campusPageData?.campus_images?.length > 0
                          ? campusPageData?.campus_images
                          : images
                      }
                    />
                  ) : (
                    <ImageGallery images={images} />
                  )}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                order={{ lg: 1, md: 1, sm: 1, xs: 1 }}
                display={'flex'}
                m={'auto'}
              >
                <Box
                  component='div'
                  display='flex'
                  flexDirection='column'
                  gap='20px'
                >
                  <Typography color='text.primary' variant='h5'>
                    {campusPageData?.title}
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='body1'
                    dangerouslySetInnerHTML={{
                      __html: campusPageData?.description,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default AboutUnitDetails;
