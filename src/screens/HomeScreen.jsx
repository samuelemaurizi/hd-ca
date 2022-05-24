import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HomeScreen = () => {
  return (
    <>
      <Typography variant='h3'>Welcome</Typography>
      <Typography
        variant='body1'
        sx={{ width: '100%', maxWidth: '76ch' }}
        align='center'
      >
        Here you can find information about Github users. Enter the user's name
        to view them and some information about yourself.
      </Typography>
      <Button
        component={Link}
        to='/step1'
        variant='contained'
        sx={{ width: 'min(100%, 29ch)' }}
      >
        Start
      </Button>
    </>
  );
};

export default HomeScreen;
