import React, { FC } from 'react';
import Appbar from '../AppBar/Appbar';
import Footer from '../Footer';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Appbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
