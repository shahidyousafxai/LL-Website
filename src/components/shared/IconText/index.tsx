import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps } from '@mui/material';

interface IconTextProps {
  text: string;
  icon: React.ReactNode;
  fontSize?: string;
  color?: string;
  sx?: SxProps;
  width?: string;
}
const IconText: FC<IconTextProps> = ({
  text,
  icon,
  fontSize,
  color,
  sx,
  width,
}) => {
  return (
    <React.Fragment>
      <Box display='flex' gap='10px' alignContent='center' sx={sx}>
        <Box component='span'>{icon}</Box>
        <Typography
          fontSize={fontSize ? fontSize : '0.75rem'}
          color={color && color}
          width={width ? width : 'max-content'}
        >
          {text}
        </Typography>
      </Box>
    </React.Fragment>
  );
};
export default IconText;
