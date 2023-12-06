// Library Imports
import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Grid, Box, Typography } from '@mui/material';

//Local Imports
import { data } from '@/utils/data';
import assets from '@/assets';
const ImageGallery = dynamic(() => import('../../../shared/Gallery'), {
  ssr: false,
});
// import ImageGallery from '@/components/shared/Gallery';

const AboutUnitDetailsLocationPage: FC = () => {
  const images = [assets.videoImg, assets.blogImg, assets.formImg];
  return (
    <React.Fragment>
      <Grid container spacing={3} mb='150px' mt='120px' rowGap={'100px'}>
        <Grid item xs={12} sm={12} md={6} lg={6} display={'flex'} m={'auto'}>
          <Box component='div' display='flex' flexDirection='column' gap='20px'>
            <Typography color='text.primary' variant='h5'>
              About Storage in Glendale, Arizona
            </Typography>
            <Typography color='text.secondary' variant='body1'>
              {data.detailsCampus.about.desc[0]}
            </Typography>
            <Typography color='text.primary' variant='body1'>
              Amenities
            </Typography>
            <Typography color='text.secondary' variant='body1' component='div'>
              {data.detailsCampus.aboutUnit.points.map((point, key) => (
                <li key={key}>{point}</li>
              ))}
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box width={'100%'} height='100%'>
            <ImageGallery images={images} />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default AboutUnitDetailsLocationPage;
