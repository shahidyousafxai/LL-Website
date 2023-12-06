// Library Imports
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Grid, Box, Typography, Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
// Local Imports
import { data } from '@/utils/data';
import IconWithLink from '@/components/shared/IconWithLink';
import assets from '@/assets';
import sx from '@/utils/sx.style';
import styles from '@/styles/appbar.module.css';
const Footer: FC = () => {
  const section1 = data?.footer?.section1;
  const section2 = data?.footer?.section2;
  const section3 = data?.footer?.section3;
  const section4 = data?.footer?.section4;
  const section5 = data?.footer?.copyright;

  return (
    <React.Fragment>
      <Grid bgcolor='secondary.main'>
        <Grid container maxWidth='lg' m='auto' pb='60px' sx={sx.spacing}>
          <Grid item xs={12} sm={12} md={12} lg={6.5} pt='40px'>
            <Box display='flex' flexDirection='column' gap={'20px'}>
              <Image
                src={assets.logo}
                alt='LuxeLocker'
                width={160}
                style={{ marginTop: '5px' }}
              />
              <Typography
                variant='subtitle2'
                color='text.primary'
                sx={{ opacity: '0.5' }}
                width={{ xs: '100%', md: '50%', lg: '50%' }}
              >
                {section1.desc}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2.5} pt='40px'>
            <Box>
              <Typography
                variant='subtitle2'
                color='text.primary'
                className={styles.footerNavlink}
              >
                {section2.title}
              </Typography>
              {section2?.links?.map((item, index) => (
                <Link href={item.path} key={index} className={styles.linkstyle}>
                  <Typography
                    key={index}
                    variant='subtitle2'
                    color='text.primary'
                    pt={index === 0 ? '16px' : '10px'}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2.3} pt='40px'>
            <Box>
              <Typography
                variant='subtitle2'
                color='text.primary'
                className={styles.footerNavlink}
              >
                {section3.title}
              </Typography>
              {section3?.links?.map((item, index) => (
                <Link href={item.path} key={index} className={styles.linkstyle}>
                  <Typography
                    key={index}
                    variant='subtitle2'
                    color='text.primary'
                    pt={index === 0 ? '16px' : '10px'}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={0.7} pt='40px'>
            <Box>
              <Typography
                variant='subtitle2'
                color='text.primary'
                className={styles.footerNavlink}
              >
                {section4.title}
              </Typography>
              {section4?.links?.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={styles.linkstyle}
                  target='_blank'
                >
                  <Typography
                    key={index}
                    variant='subtitle2'
                    color='text.primary'
                    pt={index === 0 ? '16px' : '10px'}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Grid container maxWidth='lg' m='auto' sx={sx.spacing}>
          <Divider className={styles.footerdivier} />

          <Grid item xs={12} sm={4} md={4} lg={4} py='15px'>
            <Typography
              variant='subtitle2'
              color='text.primary'
              sx={{ opacity: '0.5' }}
              textAlign={{ xs: 'center', sm: 'left', md: 'left' }}
              component='div'
            >
              {section5.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={4} lg={4} py='15px'>
            <Typography
              variant='subtitle2'
              color='text.primary'
              component='div'
              display='flex'
              justifyContent='center'
              gap='10px'
            >
              {section5.policies?.map((item, index) => (
                <Typography
                  key={index}
                  variant='subtitle2'
                  sx={{ opacity: '0.5' }}
                >
                  {item}
                </Typography>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={4} lg={4} py='15px'>
            <Box
              display='flex'
              gap='25px'
              alignSelf='center'
              justifyContent={{ xs: 'center', sm: 'end', md: 'end' }}
              component='div'
            >
              <IconWithLink link='https://twitter.com/luxelocker'>
                <TwitterIcon fontSize='small' sx={sx.linkstyle} />
              </IconWithLink>
              <IconWithLink link='https://www.facebook.com/Luxelockerstorage'>
                <FacebookRoundedIcon sx={sx.linkstyle} fontSize='small' />
              </IconWithLink>
              <IconWithLink link='https://www.instagram.com/luxelockerstorage/'>
                <InstagramIcon sx={sx.linkstyle} fontSize='small' />
              </IconWithLink>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Footer;
