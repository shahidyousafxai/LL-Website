// Library Imports
import React, { FC } from 'react';
import {
  TextField as Field,
  Box,
  Typography,
  TextareaAutosize,
  styled,
} from '@mui/material';
// Local Imports
import Styles from '@/styles/home.module.css';

interface ITextFieldProps {
  fieldName?: string;
  placeholder?: string;
  name: string;
  value?: string | number;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  width?: string;
  error?: boolean;
  helperText?: string | null;
  type?: string;
}

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 12px 12px;
    color: ${theme.palette.text.primary};
    background: ${theme.palette.secondary.main};
    resize: none;
    overflow: auto;
    height: 135px !important;
    
  
    &:hover {
      border-color: ${theme.palette.primary.main};
    }
  
    &:focus {
      border-color: ${theme.palette.primary.main};
      border-width: 2px;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const TextField: FC<ITextFieldProps> = ({
  fieldName,
  placeholder,
  name,
  value,
  onChange,
  width,
  error,
  helperText,
  type,
}) => {
  return (
    <React.Fragment>
      <Box width='100%'>
        <Typography fontSize='12px' color='text.secondary'>
          {fieldName}
        </Typography>
        {type !== 'textarea' ? (
          <>
            <Field
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              type={type}
              autoComplete='off'
              fullWidth
              variant='outlined'
              className={Styles.inputFieldStyle}
              sx={{
                width: width ? width : '100%',
                borderRadius: '12px',
                backgroundColor: 'secondary.main',
                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  borderRadius: '12px',
                  backgroundColor: 'secondary.main',
                  borderColor: 'primary',
                },
                '& .MuiInputBase-input': {
                  fontSize: '13px', // Set font size for the input text
                },
                '& :hover fieldset': {
                  borderColor: 'primary',
                  borderRadius: '12px',
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                  {
                    borderColor: 'primary.main', // Change border color on hover
                    borderRadius: '12px',
                  },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                  {
                    borderRadius: '12px', // Maintain border radius on focus
                  },
                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
                  {
                    borderRadius: '12px',
                  },
              }}
              error={error}
              // helperText={error && helperText}
            />

            {error ? (
              <Typography color='error' fontSize='12px'>
                {helperText}
              </Typography>
            ) : (
              ''
            )}
          </>
        ) : (
          <StyledTextarea
            minRows={5}
            onChange={onChange}
            value={value}
            name={name}
            aria-label='message'
            autoComplete='off'
          />
        )}
      </Box>
    </React.Fragment>
  );
};
export default TextField;
