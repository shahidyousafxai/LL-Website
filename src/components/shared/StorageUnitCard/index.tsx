import React, { FC } from 'react';
import Image from 'next/image';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

// Local Imports
import Button from '../Button';
import assets from '@/assets';
import styles from '@/styles/home.module.css';

interface IStorageUnitCardProps {
  title: string;
  description: string;
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const StorageUnitCard: FC<IStorageUnitCardProps> = ({
  title,
  description,
  image,
  link,
  onClick,
  loading,
}) => {
  return (
    <React.Fragment>
      <Box
        bgcolor={'secondary.main'}
        borderRadius='12px'
        p={{
          lg: '20px 20px 20px 20px',
          md: '20px 20px 20px 20px',
          sm: '20px 0px 20px 20px',
          xs: '20px 0px 20px 20px',
        }}
        boxShadow={'4px 48px 80px secondary.main'}
        display='flex'
        flexDirection={{
          lg: 'column',
          md: 'column',
          sm: 'row-reverse',
          xs: 'row-reverse',
        }}
        justifyContent={'space-between'}
        gap='10px'
        width={'100%'}
        height={{ lg: '250px', md: '250px', sm: '160px', xs: '160px' }}
        overflow={'hidden'}
      >
        <Box
          width={{ lg: '100%', md: '100%', sm: '50%', xs: '50%' }}
          alignSelf='end'
          display='flex'
          justifyContent='center'
          alignItems='center'
          height={{ lg: '100%', md: '100%', sm: '100%', xs: '100%' }}
        >
          <Image
            src={image ? image : assets.unit1Img}
            alt="RV's and Cars"
            className={styles.unitsImg}
          />
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width={{ lg: '100%', md: '100%', sm: '70%', xs: '70%' }}
        >
          <Box alignSelf='start'>
            <Typography variant='body1' color='text.primary'>
              {title}
            </Typography>
            <Typography fontSize='13px' color='text.secondary'>
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            }}
          >
            <Button
              width='44px'
              height='44px'
              variant='contained'
              radius='12px'
              onClick={onClick}
              loading={loading}
            >
              <KeyboardArrowRightRoundedIcon sx={{ color: 'text.primary' }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default StorageUnitCard;
