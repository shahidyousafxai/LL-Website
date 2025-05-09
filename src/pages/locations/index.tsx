import React from 'react';
import Head from 'next/head';
import { Container as MuiContainer } from '@mui/material';
import GetStarted from '@/components/Home/GetStarted';
import sx from '@/utils/sx.style';
import HeroSectionAndLocationSection from '@/components/Locations/HeroSectionAndLocationSection';
import Container from '@/components/shared/Container';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Luxelocker</title>
        <meta name='description' content='Generated by Luxelocker' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <MuiContainer sx={sx.location.locationContainer}>
          <HeroSectionAndLocationSection />
        </MuiContainer>
        <Container>
          <GetStarted />
        </Container>
      </main>
    </React.Fragment>
  );
}
