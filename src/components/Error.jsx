import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Error = ({ error, githubUsername }) => {
  const {
    status,
    data: { message },
  } = error;

  return (
    error && (
      <Box
        sx={{
          textAlign: 'center',
          '& span': {
            fontWeight: 'bold',
          },
        }}
      >
        <Typography variant='h2'>{status}</Typography>
        <Typography variant='h4'>{message}</Typography>
        {githubUsername && (
          <Typography variant='body1'>
            The given github username, <span>{githubUsername}</span>, does not
            exist
          </Typography>
        )}
      </Box>
    )
  );
};

export default Error;
