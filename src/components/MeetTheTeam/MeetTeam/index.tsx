// Library Import
import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Local Imports
import MeetTeamCard from '@/components/shared/MeetTeamCard';
import { data } from '@/utils/data';

interface IMeetTheTeamProps {
  meetTeam: any[];
}

const MeetTeam: FC<IMeetTheTeamProps> = ({ meetTeam }) => {
  const sortByOrder = meetTeam?.sort((a, b) => a?.order - b?.order);
  return (
    <React.Fragment>
      <Grid
        display='flex'
        flexDirection='column'
        gap='80px'
        mt='50px'
        mb='100px'
      >
        {sortByOrder?.map((item, index) => {
          const image = item?.image?.replaceAll('download', 'view');
          return (
            <MeetTeamCard
              key={index}
              name={item?.name + ' - ' + item?.title}
              description={item?.summary?.replaceAll('\n\n', '<br /><br />')}
              image={image}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default MeetTeam;
