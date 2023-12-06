import { useScrollTrigger } from '@mui/material';
import React from 'react';
// import { useScrollTrigger } from '@material-ui/core';
// const ScrollHandler = (props) => {
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: props.window ? window() : undefined,
//   });

//   return React.cloneElement(props.children, {
//     style: {
//       backgroundColor: trigger ? '#0F1217' : 'transparent',
//       backdropFilter: trigger && 'blur(4px)',
//       webkitBackdropFilter: trigger && 'blur(4px)',
//       marginTop: trigger && 0,
//       tranisition: 'all 0.3s ease-in-out',
//     },
//   });
// };

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  const style = {
    backgroundColor: trigger ? '#0F1217' : 'transparent',
    marginTop: trigger ? 0 : undefined,
    transition: trigger ? 'all 0.3s ease-in-out' : undefined,
  };

  if (trigger) {
    style.backdropFilter = 'blur(4px)';
    style.WebkitBackdropFilter = 'blur(4px)';
  }

  return React.cloneElement(props.children, {
    style,
  });
};

const ScrollToColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor;
