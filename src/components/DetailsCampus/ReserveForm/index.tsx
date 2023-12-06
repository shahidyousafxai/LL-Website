//Library Imports
import React, { FC, useMemo, useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
//Local Imports
import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
import Map from '@/components/shared/Map';
import MuiSelectDropdown from '@/components/shared/MuiSelectDropdown';
import ApiController from '@/network/api';
import { RootState } from '@/redux/store';

// InterFace
interface IReserverFormProps {
  campuseData: { [key: string]: string | [] | number } | any;
}

// Initial Form State
const initialFormData = {
  name: '',
  email: '',
  phoneNumber: '',
  location: '',
  rentBuy: '',
  financing: '',
  message: '',
};

const ReserveForm: FC<IReserverFormProps> = ({ campuseData }) => {
  const campuseDetails = campuseData[0]?.campus[0];
  // REDUX STATES
  const unitDetails = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );

  // Memoized Map
  const Memoiz = useMemo(
    () => (
      <Map
        data={[campuseDetails]}
        triggerChildFunction={() => console.log('empty')}
      />
    ),
    [unitDetails]
  );

  // ALL OTHER STATES
  const [loading, setLoading] = useState(false);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  const [rentBuy] = useState([
    { uuid: '1', label: 'Rent', value: 'Rent' },
    { uuid: '2', label: 'Buy', value: 'Buy' },
  ]);
  const [financing] = useState([
    { uuid: '1', label: 'Yes', value: 'Yes' },
    { uuid: '2', label: 'No', value: 'No' },
  ]);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [reserveFormData, setReserveFormData] = useState(initialFormData);
  const [isError, setIsError] = useState<boolean>(false);

  // HANDLE ONCHANGE FORM
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneReg = /^[0-9+]+$/;

    if (name === 'email') {
      if (emailReg.test(value)) {
        setReserveFormData({
          ...reserveFormData,
          [name]: value,
        });
        setIsValidEmail(false);
      } else {
        setIsValidEmail(true);
      }
    }

    if (name === 'phoneNumber') {
      if (phoneReg.test(value)) {
        setReserveFormData({
          ...reserveFormData,
          [name]: value,
        });
      } else if (value === '') {
        setReserveFormData({
          ...reserveFormData,
          [name]: value,
        });
      }
    } else {
      setReserveFormData({
        ...reserveFormData,
        [name]: value,
      });
    }
  };
  // PAYLOAD
  const createPayload = () => {
    const payload = {
      first_name: reserveFormData.name,
      last_name: '',
      email: reserveFormData.email,
      phone_no: reserveFormData.phoneNumber,
      facility: campuseDetails?.id,
      is_lease: reserveFormData.rentBuy === 'Rent' ? true : false,
      finance_interested: reserveFormData.financing === 'Yes' ? true : false,
      message: '',
    };
    return payload;
  };

  // ONPRESS SUBMIT
  const onPressSubmit = () => {
    const payload = createPayload();
    setLoading(true);
    ApiController.submitReservationCall(payload, (response) => {
      if (response.success) {
        setReserveFormData(initialFormData);
        setIsSuccessfullSubmit(true);
        setLoading(false);
        window.scrollTo(0, 0);
      } else {
        setIsError(true);
        setLoading(false);
        setIsSuccessfullSubmit(false);
      }
    });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} mt='60px' mb='60px'>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          mt={{ lg: '60px', md: '0px', sm: '0px', xs: '0px' }}
        >
          {!isSuccessfullSubmit ? (
            <Box>
              <Box>
                <Typography variant='h3' color='text.primary' fontWeight='bold'>
                  Rent or Buy Boat & RV Storage Units in {campuseDetails?.city}
                </Typography>
                <Typography color='text.secondary' variant='body1'>
                  Contact Us Today
                </Typography>
              </Box>
              <Box component='div' display='flex' flexDirection='column'>
                <Box>
                  <TextField
                    fieldName='Name'
                    placeholder='Your name'
                    name='name'
                    type='text'
                    value={reserveFormData.name}
                    onChange={handleOnChange}
                  />
                </Box>
                <Box
                  component='div'
                  display='flex'
                  width='100%'
                  gap='20px'
                  flexWrap={{
                    lg: 'unset',
                    md: 'unset',
                    sm: 'unset',
                    xs: 'wrap',
                  }}
                  mt='15px'
                >
                  <TextField
                    fieldName='Email'
                    placeholder='contact@company.com'
                    name='email'
                    width='100%'
                    type='email'
                    value={reserveFormData.email}
                    onChange={handleOnChange}
                    error={isValidEmail}
                    helperText={isValidEmail ? 'Invalid Email' : null}
                  />
                  <TextField
                    fieldName='Phone'
                    placeholder='(123) 456 6789'
                    name='phoneNumber'
                    width='100%'
                    type='text'
                    value={reserveFormData.phoneNumber}
                    onChange={handleOnChange}
                  />
                </Box>
                <Box
                  component='div'
                  display='flex'
                  width='100%'
                  gap='20px'
                  flexWrap={{
                    lg: 'unset',
                    md: 'unset',
                    sm: 'unset',
                    xs: 'wrap',
                  }}
                  marginTop={'15px'}
                >
                  <MuiSelectDropdown
                    fieldName='Do you want to rent or buy?'
                    options={rentBuy}
                    value={reserveFormData.rentBuy}
                    name='rentBuy'
                    onChange={(event) => {
                      setReserveFormData({
                        ...reserveFormData,
                        rentBuy: event.target.value,
                      });
                    }}
                  />
                  <MuiSelectDropdown
                    fieldName='Are you interested in financing?'
                    options={financing}
                    value={reserveFormData.financing}
                    name='financing'
                    onChange={(event) => {
                      setReserveFormData({
                        ...reserveFormData,
                        financing: event.target.value,
                      });
                    }}
                  />
                </Box>
                <Box mt='25px'>
                  <Button
                    width='100%'
                    variant='contained'
                    onClick={onPressSubmit}
                    disabled={
                      (reserveFormData?.name &&
                        reserveFormData?.email &&
                        reserveFormData?.phoneNumber &&
                        reserveFormData?.rentBuy &&
                        reserveFormData?.financing) === ''
                        ? true
                        : false || isValidEmail
                    }
                    loading={loading}
                  >
                    Send
                  </Button>
                  <Typography fontSize='12px' color='text.secondary'>
                    To learn more about how we use the information you send us,
                    please see our{' '}
                    <u style={{ color: '#fff' }}>privacy policy</u> .
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              component='div'
              display='flex'
              flexDirection='column'
              gap='20px'
            >
              <Box>
                <Typography variant='h3' color='text.primary' fontWeight='bold'>
                  Thank You For Your Request
                </Typography>
                <Typography color='text.secondary' variant='body1'>
                  A LuxeLocker Staff will contact you shortly.
                </Typography>
              </Box>
              <Box>
                <Typography
                  textAlign='center'
                  variant='body1'
                  color='text.primary'
                >
                  If you would like to purchase a unit in{' '}
                  {unitDetails?.name ? unitDetails?.name : ''} please download
                  our app.
                </Typography>
              </Box>
              <Box display='flex' gap={'10px'} justifyContent='center'>
                <Box
                  display='flex'
                  gap='10px'
                  bgcolor={'black'}
                  width='max-content'
                  padding='5px 14px'
                  borderRadius='11px'
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.open(
                      'https://apps.apple.com/us/app/luxelocker/id1545827160',
                      '_blank'
                    );
                  }}
                >
                  <Box>
                    <svg viewBox='0 0 384 512' width='25'>
                      <path
                        fill='currentColor'
                        d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                      />
                    </svg>
                  </Box>
                  <Box
                    display='flex'
                    flexDirection='column'
                    gap='5px'
                    alignItems='start'
                    justifyContent='center'
                    padding='5px 0px 10px 0px'
                    mb='-10px'
                  >
                    <Typography component='p' fontSize='10px' lineHeight='0'>
                      Download on the
                    </Typography>
                    <Typography component='p' fontSize='19px'>
                      App Store
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display='flex'
                  gap='10px'
                  bgcolor={'black'}
                  width='max-content'
                  padding='5px 14px'
                  borderRadius='11px'
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.open(
                      'https://play.google.com/store/apps/details?id=com.luxelocker.luxelocker',
                      '_blank'
                    );
                  }}
                >
                  <Box mt='5px'>
                    <svg viewBox='30 336.7 120.9 129.2' width='25'>
                      <path
                        fill='#FFD400'
                        d='M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z'
                      />
                      <path
                        fill='#FF3333'
                        d='M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z'
                      />
                      <path
                        fill='#48FF48'
                        d='M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z'
                      />
                      <path
                        fill='#3BCCFF'
                        d='M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z'
                      />
                    </svg>
                  </Box>
                  <Box
                    display='flex'
                    flexDirection='column'
                    gap='5px'
                    alignItems='start'
                    justifyContent='center'
                    padding='5px 0px 10px 0px'
                    mb='-10px'
                  >
                    <Typography component='p' fontSize='11px' lineHeight='0'>
                      GET IT ON
                    </Typography>
                    <Typography component='p' fontSize='19px'>
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                width='100%'
                variant='contained'
                onClick={() => {
                  setIsSuccessfullSubmit(!isSuccessfullSubmit);
                  console.log('close done btn');
                }}
              >
                Close
              </Button>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} height='630px'>
          {Memoiz}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default ReserveForm;
