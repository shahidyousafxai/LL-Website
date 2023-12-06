//Library Imports
import React, { FC, useState, useMemo } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

//Local Imports
import TextField from '@/components/shared/TextField';
import Button from '@/components/shared/Button';
import { RootState } from '@/redux/store';
import ThankYouBox from '@/components/shared/ThankYouBox';
import ApiController from '@/network/api';
import Map from '@/components/shared/Map';

const initialFormData = {
  name: '',
  email: '',
  phoneNumber: '',
};

const ReserveFormUnitDetails: FC = () => {
  // REDUX STATES
  const campusUnitDetils = useSelector(
    (state: RootState) => state?.campusUnitDetailsReducer?.campusUnitDetails
  );

  const camppusUnitName = useSelector(
    (state: RootState) => state?.campusDetailsReducer?.unitDetails
  );
  const unitDetails = campusUnitDetils?.campusUnitDetails;

  // Memoized Map
  const Memoiz = useMemo(
    () => (
      <Map
        data={[camppusUnitName]}
        triggerChildFunction={() => console.log('empty')}
      />
    ),
    [camppusUnitName]
  );

  // ALL STATES
  const [reserveFormData, setReserveFormData] = useState(initialFormData);
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // HANLDE ONCHNAGE
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

  // CREATE PAYLOAD
  const createPayload = () => {
    return {
      facility: unitDetails?.facility,
      unit: unitDetails?.id,
      email: reserveFormData?.email,
      first_name: reserveFormData?.name,
      last_name: '',
      phone_no: reserveFormData?.phoneNumber,
      is_lease: campusUnitDetils?.tab === 'Rent' ? true : false,
      finance_interested: false,
      message: '',
    };
  };

  // HANDLE SUBMIT FORM
  const onPressSubmit = () => {
    const payload = createPayload();
    setLoading(true);
    ApiController.submitReservationCall(payload, (response) => {
      if (response.success) {
        setReserveFormData(initialFormData);
        setIsSuccessfullSubmit(true);
        setLoading(false);
      } else {
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
                  Rent or Buy Boat & RV Storage Unit #{unitDetails?.unit_number}
                </Typography>
                <Typography color='text.secondary' variant='body1'>
                  Contact Us Today
                </Typography>
              </Box>
              <Box
                component='div'
                display='flex'
                flexDirection='column'
                gap='20px'
              >
                <TextField
                  fieldName='Name'
                  placeholder='Your name'
                  name='name'
                  type='text'
                  value={reserveFormData.name}
                  onChange={handleOnChange}
                />
                <Box
                  component='div'
                  display='flex'
                  width='100%'
                  gap='20px'
                  pb='10px'
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
                <Button
                  width='100%'
                  variant='contained'
                  onClick={onPressSubmit}
                  loading={loading}
                  disabled={
                    (reserveFormData?.name &&
                      reserveFormData?.email &&
                      reserveFormData?.phoneNumber) === ''
                      ? true
                      : false || isValidEmail
                  }
                >
                  Send
                </Button>
                <Typography fontSize='12px' color='text.secondary'>
                  To learn more about how we use the information you send us,
                  please see our <u style={{ color: '#fff' }}>privacy policy</u>{' '}
                  .
                </Typography>
              </Box>
            </Box>
          ) : (
            <ThankYouBox
              onClose={() => setIsSuccessfullSubmit(false)}
              subText='If you would like to buy or rent a unit today please download our app.'
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} height='610px'>
          {Memoiz}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default ReserveFormUnitDetails;
