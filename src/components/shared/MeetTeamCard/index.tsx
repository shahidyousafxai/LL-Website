import React, { FC } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';

interface IMeetTheTeamProps {
  name: string;
  description: string[];
  image: React.ReactNode;
}

const MeetTeamCard: FC<IMeetTheTeamProps> = ({ name, description, image }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={4} lg={4} m='auto'>
        <Box>
          <Image
            src={image ? image : assets.meet1}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
            width={1000}
            height={1000}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} m='auto'>
        <Box display='flex' flexDirection='column' gap='15px'>
          <Typography variant='h5' color='text.primary'>
            {name}
          </Typography>
          {/* {description?.length > 0 &&
            description?.map((item: string, index: number) => (
              <Typography variant='body1' color='text.secondary' key={index}>
                {item}
              </Typography>
            ))} */}
          <Typography
            variant='body1'
            color='text.secondary'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MeetTeamCard;
