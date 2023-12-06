'use client';
// Library Imports
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
//Local Imports
import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
import MuiSelectDropdown from '@/components/shared/MuiSelectDropdown';
import assets from '@/assets';
import ApiController from '@/network/api';
import ThankYouBox from '@/components/shared/ThankYouBox';
const initialFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  rentBuy: '',
  financing: '',
  message: '',
};
const ReservationForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialFormData);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [rentBuy] = useState([
    { uuid: '1', label: 'Rent', value: 'Rent' },
    { uuid: '2', label: 'Buy', value: 'Buy' },
  ]);
  const [financing] = useState([
    { uuid: '1', label: 'Yes', value: 'Yes' },
    { uuid: '2', label: 'No', value: 'No' },
  ]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneReg = /^[0-9+]+$/;
    if (name === 'email') {
      if (emailReg.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }
    if (name === 'phone') {
      if (phoneReg.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      } else if (value === '') {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const fetchLocations = () => {
    ApiController.fetchLocationsCall({}, (response) => {
      if (response.success) {
        const data = response?.data;
        setLocations((): any => {
          if (Array.isArray(data))
            return data
              ?.flatMap((item: any) => item?.campus)
              ?.sort((a: any, b: any) => a?.id - b?.id)
              ?.map((item: any) => {
                return {
                  uuid: item?.id,
                  label: item?.name,
                  value: item?.id,
                };
              });
        });
      } else {
        setLocations([]);
      }
    });
  };

  // Fetch Locations UseEffect
  useEffect(() => {
    fetchLocations();
  }, []);

  // Submit Form

  const createPayload = () => {
    const payload = {
      first_name: formData.name,
      last_name: '',
      email: formData.email,
      phone_no: formData.phone,
      facility: formData?.location,
      is_lease: formData.rentBuy === 'Rent' ? true : false,
      finance_interested: formData.financing === 'Yes' ? true : false,
      message: formData.message,
    };
    return payload;
  };
  const onPressSubmit = () => {
    const payload = createPayload();
    setLoading(true);
    ApiController.submitReservationCall(payload, (response) => {
      if (response.success) {
        setFormData(initialFormData);
        setLoading(false);
        setIsSuccessfullSubmit(true);
      } else {
        setLoading(false);
        setIsSuccessfullSubmit(false);
      }
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box width='100%' borderRadius='12px'>
            <Image
              src={assets.formImg}
              alt='Form'
              style={{
                width: '100%',
                height: '640px',
                borderRadius: '25px',
              }}
            />
          </Box>
        </Grid>
        {!isSuccessfullSubmit ? (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box>
              <Typography variant='h6' color='text.primary'>
                Reserve Your Unit Today
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                Units available buy or rent today​.
              </Typography>
            </Box>
            <Box display='flex' flexDirection='column' gap='15px'>
              <TextField
                fieldName='Name'
                placeholder='Your Name'
                name='name'
                onChange={handleOnChange}
                value={formData.name}
              />

              <Box
                display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }}
                gap='20px'
              >
                <Box width={{ lg: '50%', md: '50%', sm: '100%', xs: '100%' }}>
                  <TextField
                    fieldName='Email'
                    placeholder='contact@company.com'
                    name='email'
                    onChange={handleOnChange}
                    value={formData.email}
                    error={isEmailValid}
                    helperText={isEmailValid ? 'Invalid Email' : null}
                  />
                </Box>
                <Box width={{ lg: '50%', md: '50%', sm: '100%', xs: '100%' }}>
                  <TextField
                    fieldName='Phone'
                    placeholder='(123) 456 6789'
                    name='phone'
                    onChange={handleOnChange}
                    value={formData.phone}
                  />
                </Box>
              </Box>

              <MuiSelectDropdown
                fieldName='Location'
                options={locations}
                value={formData.location}
                name='location'
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    location: event.target.value,
                  });
                }}
              />
              <Box
                display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }}
                gap='20px'
              >
                <Box width={{ lg: '50%', md: '50%', sm: '100%', xs: '100%' }}>
                  <MuiSelectDropdown
                    fieldName='Do you want to rent or buy?'
                    options={rentBuy}
                    value={formData.rentBuy}
                    name='rentBuy'
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        rentBuy: event.target.value,
                      });
                    }}
                  />
                </Box>
                <Box width={{ lg: '50%', md: '50%', sm: '100%', xs: '100%' }}>
                  <MuiSelectDropdown
                    fieldName='Are you interested in financing?'
                    options={financing}
                    value={formData.financing}
                    name='financing'
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        financing: event.target.value,
                      });
                    }}
                  />
                </Box>
              </Box>
              <TextField
                fieldName='Message'
                name='message'
                type='textarea'
                value={formData.message}
                onChange={handleOnChange}
              />
              <Button
                width='100%'
                variant='contained'
                disabled={
                  (formData.email &&
                    formData.name &&
                    formData.phone &&
                    formData.location &&
                    formData.rentBuy &&
                    formData.financing &&
                    formData.message) === ''
                    ? true
                    : false || isEmailValid
                }
                onClick={onPressSubmit}
                loading={loading}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={6} lg={6} m='auto'>
            <ThankYouBox onClose={() => setIsSuccessfullSubmit(false)} />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default ReservationForm;
