// Library Imports
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  IconButton,
  Drawer,
  Typography,
  Divider,
  Collapse,
} from '@mui/material';
import { Container } from '@mui/system';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
// Local Imports

import { data } from '@/utils/data';
import assets from '@/assets';
import Button from '@/components/shared/Button';
import IconText from '@/components/shared/IconText';
import IconWithLink from '@/components/shared/IconWithLink';
import sx from '@/utils/sx.style';
import CallIcon from '@/assets/Icons/CallIcon';
import styles from '@/styles/appbar.module.css';
import EmailIcon from '@/assets/Icons/EmailIcon';
import LocationIcon from '@/assets/Icons/LocationIcon';
import ScrollToColor from './scrollToColor';

const Appbar: FC = (props: any) => {
  const router = useRouter();
  const navItem = data.header;
  let { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const isActive = (href: string) => {
    return router.pathname === href ? true : false;
  };
  // Drawer
  const drawer = (
    <React.Fragment>
      <Box
        bgcolor='background.default'
        className={styles.drawerMain}
        sx={sx.spacing}
      >
        <Box className={styles.drawerContainer}>
          <Box className={styles.mobileNav}>
            <Box className={styles.mobileLogo} mt={2}>
              <Link href='/' style={{ textDecoration: 'none' }}>
                <Image src={assets.logo} alt='Logo' width={135} />
              </Link>
              <IconButton
                aria-label='open drawer'
                onClick={handleToggleDrawer}
                sx={{ padding: '0px' }}
              >
                <CloseRoundedIcon sx={{ color: 'text.primary' }} />
              </IconButton>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='start'
              gap='25px'
              mt='20px'
            >
              {navItem.map((item: any, index) => {
                const isOpen = openDropdownIndex === index;
                return (
                  <Link
                    href={item.path}
                    key={index}
                    style={{ textDecoration: 'none', width: '100%' }}
                    onClick={() => {
                      if (item?.path !== '#') {
                        setOpenDropdownIndex(isOpen ? null : index);
                        handleToggleDrawer();
                      }
                    }}
                  >
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      width='100%'
                      alignItems='center'
                    >
                      <Typography
                        color={isActive(item.path) ? 'primary' : 'text.primary'}
                        variant='subtitle1'
                      >
                        {item.name}
                      </Typography>
                      {item?.child?.length > 0 && (
                        <KeyboardArrowDownRoundedIcon
                          sx={{
                            color: 'text.primary',
                            transform: isOpen ? 'rotate(-180deg)' : 'unset',
                            transition: 'all 0.3s ease',
                          }}
                          onClick={() =>
                            setOpenDropdownIndex(isOpen ? null : index)
                          }
                        />
                      )}
                    </Box>
                    <Collapse
                      in={isOpen && item?.child && item?.child?.length > 0}
                    >
                      <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='start'
                        gap='25px'
                        mt='20px'
                      >
                        {' '}
                        {item?.child?.map(
                          (
                            childItem: { [key: string]: any },
                            index: number
                          ) => {
                            return (
                              <Link
                                href={childItem?.path}
                                key={index}
                                className={styles.linkstyle}
                              >
                                <Typography
                                  color={
                                    isActive(childItem?.path)
                                      ? 'primary'
                                      : 'text.secondary'
                                  }
                                  variant='subtitle1'
                                >
                                  {childItem?.name}
                                </Typography>
                              </Link>
                            );
                          }
                        )}
                      </Box>
                    </Collapse>
                  </Link>
                );
              })}
            </Box>
            <Box className={styles.navButtons}>
              <Button variant='contained' onClick={handleModal} width='100%'>
                Rent or Buy
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box display='flex' flexDirection='column' gap='20px'>
            <IconText icon={<CallIcon />} text='833-333-5893' />
            <IconText icon={<EmailIcon />} text='info@luxelocker.com' />
            <IconText
              icon={<LocationIcon />}
              text='349 Lake Havasu Ave S. Suite 106. Lake Havasu City, AZ 86403'
            />
          </Box>
        </Box>
        <Box display='flex' gap='60px' alignSelf='center' mb={2}>
          <IconWithLink link='https://twitter.com/luxelocker'>
            <TwitterIcon color='primary' fontSize='medium' />
          </IconWithLink>
          <IconWithLink link='https://www.facebook.com/Luxelockerstorage'>
            <FacebookRoundedIcon color='primary' fontSize='medium' />
          </IconWithLink>
          <IconWithLink link='https://www.instagram.com/luxelockerstorage/'>
            <InstagramIcon color='primary' fontSize='medium' />
          </IconWithLink>
        </Box>
      </Box>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Grid>
        {/* // Top Bar */}
        <Grid
          bgcolor='secondary.main'
          display={{ xs: 'none', sm: 'none', md: 'flex' }}
          className={styles.topbar}
        >
          <Box maxWidth='lg' className={styles.topbarbox}>
            <Box display='flex' gap='50px'>
              <IconText icon={<CallIcon />} text='229-518-9570' />
              <IconText icon={<EmailIcon />} text='info@luxelocker.com' />
              <IconText
                icon={<LocationIcon />}
                text='349 Lake Havasu Ave S. Suite 106. Lake Havasu City, AZ 86403'
              />
            </Box>
            <Box display='flex' gap='20px'>
              <IconWithLink link='https://twitter.com/luxelocker'>
                <TwitterIcon color='primary' fontSize='small' />
              </IconWithLink>
              <IconWithLink link='https://www.facebook.com/Luxelockerstorage'>
                <FacebookRoundedIcon color='primary' fontSize='small' />
              </IconWithLink>
              <IconWithLink link='https://www.instagram.com/luxelockerstorage/'>
                <InstagramIcon color='primary' fontSize='small' />
              </IconWithLink>
            </Box>
          </Box>
        </Grid>
        {/* App Bar */}
        <ScrollToColor>
          <AppBar
            color='transparent'
            elevation={0}
            sx={{
              marginTop: { xs: '0px', sm: '0px', md: '55px' },
            }}
          >
            <Container maxWidth='lg' sx={{ padding: { xs: '0px', sm: '0px' } }}>
              <Toolbar className={styles.toolbar} sx={sx.spacing}>
                <Box mt={2}>
                  <Link href='/' style={{ textDecoration: 'none' }}>
                    <Image src={assets.logo} alt='Logo' width={160} />
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'block', md: 'none' },
                    textAlign: 'center',
                  }}
                >
                  <IconButton
                    aria-label='open drawer'
                    onClick={handleToggleDrawer}
                    sx={{ padding: '0px' }}
                  >
                    <MenuRoundedIcon sx={{ color: 'text.primary' }} />
                  </IconButton>
                </Box>
                <Box
                  className={styles.navLinks}
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'flex',
                      gap: '20px',
                    },
                  }}
                >
                  {navItem.map((item, index) => {
                    return (
                      <Link
                        href={item.path}
                        key={index}
                        className={styles.linkstyle}
                      >
                        <Typography
                          color={
                            isActive(item.path) ? 'primary' : 'text.primary'
                          }
                          variant='subtitle1'
                          display='flex'
                          flexDirection='column'
                          alignItems='center'
                        >
                          {item.name}
                          {isActive(item.path) && (
                            <Box
                              component='span'
                              sx={{ fontSize: '30px', lineHeight: 0 }}
                            >
                              .
                            </Box>
                          )}
                        </Typography>
                      </Link>
                    );
                  })}
                </Box>
                <Box
                  className={styles.actions}
                  sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
                >
                  <Button variant='contained' onClick={handleModal}>
                    Rent or Buy
                  </Button>
                </Box>
              </Toolbar>
              {/* Drawer */}
              <Box component='nav'>
                <Drawer
                  container={container}
                  variant='temporary'
                  anchor='top'
                  open={openDrawer}
                  onClose={handleToggleDrawer}
                  ModalProps={{
                    keepMounted: false, // Better open performance on mobile.
                  }}
                  transitionDuration={700}
                  sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
            </Container>
          </AppBar>
        </ScrollToColor>
      </Grid>
    </React.Fragment>
  );
};

export default Appbar;
