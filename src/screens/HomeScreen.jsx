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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, maiores
        sed? Porro consequuntur sunt debitis repudiandae voluptatibus at
        doloremque nostrum asperiores dolores, adipisci facere quisquam
        repellendus voluptas perferendis maiores ipsam tempore odio culpa
        praesentium? Doloribus et laboriosam, repellat, molestiae modi at qui
        alias sed quod necessitatibus minima beatae aliquam quidem!
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
