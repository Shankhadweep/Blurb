import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.3)"} height={"100%"}>
      <Typography p={"2rem"} variant='h5' textAlign={"center"} width={"100%"} paddingTop={"10rem"} color={"white"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
}

export default AppLayout()(Home);
