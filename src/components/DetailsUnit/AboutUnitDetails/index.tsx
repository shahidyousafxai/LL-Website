// Library Imports
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

//Local Imports
import assets from '@/assets';
import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
const ImageGallery = dynamic(() => import('../../shared/Gallery'), {
  ssr: false,
});

interface IAboutUnitDetailsProps {
  error: any;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onClickToCheck: React.EventHandler<React.MouseEvent>;
  loading: boolean;
  unitPageData: { [key: string]: string | any };
  isPublished: boolean;
}

const AboutUnitDetails: FC<IAboutUnitDetailsProps> = ({
  error,
  password,
  setPassword,
  onClickToCheck,
  loading,
  unitPageData,
  isPublished,
}) => {
  const images = [assets.videoImg, assets.blogImg, assets.formImg];

  return (
    <React.Fragment>
      {error?.message?.length > 0 ? (
        <React.Fragment>
          {isPublished ? (
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
          ) : (
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
                    error={Boolean(error?.message[0]?.Password)}
                    helperText={error?.message[0]?.Password}
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
                  {unitPageData?.unitImages?.length > 0 ? (
                    <ImageGallery images={unitPageData?.unitImages} />
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
                    {unitPageData?.title}
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='body1'
                    dangerouslySetInnerHTML={{
                      __html: unitPageData?.description,
                    }}
                  />
                  <Typography color='text.primary' variant='body1'>
                    Amenities
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='body1'
                    component='div'
                  >
                    {unitPageData?.amenities?.map(
                      (
                        point: { amanity_name: string; amenity_id: number },
                        key: number
                      ) => (
                        <li key={key}>{point?.amanity_name}</li>
                      )
                    )}
                  </Typography>
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
