import React, { FC } from 'react';
import RelatedPost from '@/components/shared/RelatedPost';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';

interface IRelatedPostProps {
  name: string;
  loading: boolean;
  data: any[];
}

const RelatedPostSection: FC<IRelatedPostProps> = ({ name, loading, data }) => {
  return (
    <React.Fragment>
      {loading ? (
        <Grid
          container
          height={'50vh'}
          m='auto'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <CircularProgress size={40} />
        </Grid>
      ) : (
        <React.Fragment>
          {data?.length > 0 ? (
            <RelatedPost name={name} blogs={data} />
          ) : (
            <Box>
              <Typography color='text.primary'>No Related Post</Typography>
            </Box>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RelatedPostSection;
