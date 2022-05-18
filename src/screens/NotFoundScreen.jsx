import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFoundScreen = () => {
  return (
    <div className='main404'>
      <div className='main404__background-pattern'>
        <div className='main404__content'>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h1' gutterBottom>
            NOT FOUND
          </Typography>
          <Typography variant='h4'>
            Sorry, but the page that you requested doesn't exist
          </Typography>
          <Button component={RouterLink} to='/' variant='contained'>
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
