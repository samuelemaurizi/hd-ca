import React, { useContext, useEffect } from 'react';

import GithubContext from '../context/github/githubContext';

// COMPONENTS
import Navigation from '../components/Navigation';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const GithubUserInfo = () => {
  const githubContext = useContext(GithubContext);
  const { userData, getUser, user, loading } = githubContext;

  useEffect(() => {
    getUser('samuelemaurizi');
    // eslint-disable-next-line
  }, []);

  console.log('>>>>> user', userData);

  return (
    <Box
      sx={{
        outline: '1px solid pink',
        width: '100%',
        maxWidth: '70%',
      }}
    >
      <Paper elevation={3}>
        <div>GithubUserInfo</div>
        <Navigation current={3} prevDisabled={false} nextDisabled={true} />
      </Paper>
    </Box>
  );
};

export default GithubUserInfo;
