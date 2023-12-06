import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { faqBgColor, primaryMain } from '@/theme/GlobalVariables';

interface AccordionProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Accordion: FC<AccordionProps> = ({
  isOpen,
  title,
  description,
  onClick,
}) => {
  const sx = {
    featureHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
  };
  return (
    <React.Fragment>
      <Box
        padding='20px'
        bgcolor={faqBgColor}
        borderRadius='12px'
        border={isOpen ? `1px solid ${primaryMain}` : 'unset'}
      >
        <div style={sx.featureHeader} onClick={onClick}>
          <Typography variant='subtitle1' color='text.primary'>
            {title}
          </Typography>
          <IconButton sx={{ padding: '0px' }}>
            {isOpen ? (
              <RemoveRoundedIcon sx={{ color: 'text.primary' }} />
            ) : (
              <AddRoundedIcon sx={{ color: 'text.primary' }} />
            )}
          </IconButton>
        </div>
        <Collapse in={isOpen} collapsedSize={0}>
          <Typography
            variant='body1'
            color='text.secondary'
            dangerouslySetInnerHTML={{ __html: description }}
            sx={{
              mt: '10px',
              a: {
                color: primaryMain,
              },
              // img: {
              //   width: '100%',
              //   height: 'auto',
              // },
            }}
          />
        </Collapse>
      </Box>
    </React.Fragment>
  );
};

export default Accordion;
