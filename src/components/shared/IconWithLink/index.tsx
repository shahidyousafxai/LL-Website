import React, { FC } from 'react';

interface IconProps {
  link?: string;
  icon?: any;
  children: React.ReactNode;
}

const IconWithLink: FC<IconProps> = ({ link, icon, children }) => {
  return (
    <React.Fragment>
      <a target='_blank' rel='noreferrer' href={link}>
        {children}
      </a>
    </React.Fragment>
  );
};
export default IconWithLink;
