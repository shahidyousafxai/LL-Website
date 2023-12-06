import { createTheme } from '@mui/material/styles';
import Image from 'next/image';
import {
  primaryMain,
  secondaryMain,
  secondaryLight,
  primaryText,
  secondaryText,
  dividerClr,
  bgColor,
  disabledBTNBackground,
  disabledBTNText,
} from './GlobalVariables';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
      light: secondaryLight,
    },
    text: {
      primary: primaryText,
      secondary: secondaryText,
    },
    background: {
      default: bgColor,
    },
    divider: dividerClr,
    action: {
      disabledBackground: disabledBTNBackground,
      disabled: disabledBTNText,
    },
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h3: {
      fontFamily: 'Inter',
      fontSize: '40px',
      lineHeight: '50px',
      '@media (max-width:600px)': {
        fontSize: '20px',
        lineHeight: '24px',
      },
      '@media (max-width:900px)': {
        fontWeight: 'bold',
      },
    },
    // Heading about
    h6: {
      fontFamily: 'Inter',
      fontWeight: 500,
      lineHeight: '24px',
      fontSize: '20px',
    },
    // Other Headings
    h5: {
      fontFamily: 'Inter',
      fontWeight: 500,
      lineHeight: '24px',
      fontSize: '20px',
    },
    // For links Header
    subtitle1: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 15,
      lineHeight: '24px',
    },
    // For Links Footer
    subtitle2: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '16px',
    },
    // For Body
    body1: {
      fontFamily: 'Inter',
      fontSize: '15px',
      lineHeight: '24px',
    },
    // Locations Page
    body2: {
      fontFamily: 'Inter',
      fontSize: '13px',
      lineHeight: '20px',
    },

    button: {
      fontFamily: 'Inter',
      fontWeight: 500,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1110,
      xl: 1536,
    },
  },
});
