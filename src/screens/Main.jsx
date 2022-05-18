import React from 'react';
import { Outlet } from 'react-router-dom';

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Main = () => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Main;
