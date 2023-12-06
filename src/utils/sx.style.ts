import { primaryText } from '@/theme/GlobalVariables';
import assets from '@/assets';
const sx = {
  // Header
  spacing: {
    padding: { xs: '0 15px', sm: '0px 20px', lg: '0px 0px' },
  },
  linkstyle: {
    color: primaryText,
    opacity: '0.6',
  },
  // Home
  hero: {
    tab: (radius: string, mr: string, ml: string) => ({
      padding: '5px',
      backgroundColor: 'secondary.main',
      color: 'text.primary',
      fontSize: '15px',
      borderRadius: radius,
      marginRight: mr,
      marginLeft: ml,
      height: '64px',
      width: { lg: '110px', sm: '110px', md: '110', xs: '50%' },
      textTransform: 'none',
      '&.Mui-selected': {
        color: 'text.primary',
      },
    }),
    bgContainer: {
      backgroundImage: { xs: 'unset', md: assets.logo, lg: assets.logo },
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
    },
  },
  //Location Page MaxWith
  location: {
    locationContainer: {
      maxWidth: '1440px !important',
      m: 'auto',
    },
    locationDetailsTab: {
      color: 'text.primary',
      height: '65px',
      width: '110px',
      textTransform: 'none',
      '&.Mui-selected': {
        color: 'text.primary',
      },
    },
  },
};
export default sx;
