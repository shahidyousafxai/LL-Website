import React, { useState, useEffect } from 'react';
import ApiController from '@/network/api';
import MeetTeam from '../MeetTeam';
import { CircularProgress, Grid } from '@mui/material';

const MeetTheTeamSection = () => {
  const [meetTeam, setMeetTeam] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchMeetTeamCall = async () => {
    setLoading(true);
    ApiController.fetchMeetTheTeamCall({}, (response) => {
      if (response.success) {
        setLoading(false);
        setMeetTeam(response?.data);
      } else {
        setLoading(false);
        setMeetTeam([]);
      }
    });
  };

  useEffect(() => {
    fetchMeetTeamCall();
  }, []);

  if (loading)
    return (
      //   <Box>
      //     <MeetTheTeamSkelton />
      //     <MeetTheTeamSkelton />
      //   </Box>
      <Grid
        container
        height={'80vh'}
        m='auto'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress size={40} />
      </Grid>
    );

  return <MeetTeam meetTeam={meetTeam} />;
};

export default MeetTheTeamSection;
