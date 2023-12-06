import React, { FC } from 'react';
import { Container as MainContainer } from '@mui/material';
import sx from '@/utils/sx.style';

interface IContainerProps {
  children: React.ReactNode;
  [x: string]: any;
}
const Container: FC<IContainerProps> = ({ children, ...restProps }) => {
  return (
    <MainContainer maxWidth='lg' sx={sx.spacing} {...restProps}>
      {children}
    </MainContainer>
  );
};
export default Container;
