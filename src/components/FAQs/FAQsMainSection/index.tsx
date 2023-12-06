// Library Imports
import React, { FC, useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material';
// Local Imports
import FAQsSection from '../FAQSection';
import ApiController from '@/network/api';
import HeroSectionFAQs from '../HeroSectionFAQs';

function FAQsMainSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const [faqs, setFaqs] = useState<any[]>([]);

  const fetchFAQCall = async () => {
    setLoading(true);
    ApiController.fetchFAQsCall({}, (response) => {
      if (response.success) {
        setLoading(false);
        setFaqs(response?.data);
      } else {
        setLoading(false);
        setFaqs([]);
      }
    });
  };

  useEffect(() => {
    fetchFAQCall();
  }, []);

  if (loading) {
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

  return (
    <React.Fragment>
      <HeroSectionFAQs />
      <FAQsSection faqs={faqs} />
    </React.Fragment>
  );
}
export default FAQsMainSection;
