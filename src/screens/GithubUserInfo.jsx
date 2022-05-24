import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import GithubContext from '../context/github/githubContext';

// COMPONENTS
import Spinner from '../components/Spinner';
import Error from '../components/Error';

// MUI
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Link as MuiLink } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookIcon from '@mui/icons-material/Book';

const GithubUserInfo = () => {
  const githubContext = useContext(GithubContext);
  const { userData, getGithubUser, user, loading, error } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (userData) getGithubUser(userData.githubUsername);
    }

    return () => (mounted = false);
    // eslint-disable-next-line
  }, [userData]);

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      className='motion-div'
    >
      {loading ? (
        <Spinner />
      ) : error && user ? (
        <Error error={error} githubUsername={userData.githubUsername} />
      ) : (
        <Paper
          elevation={3}
          sx={{
            maxWidth: '700px',
            padding: '2rem',
            '& > *': {
              marginBottom: '1rem',
            },
          }}
        >
          <Typography variant='h5' align='center' gutterBottom>
            GithubUserInfo
          </Typography>
          <Button
            component={Link}
            to='/step2'
            variant='contained'
            className='last-prev-btn'
          >
            Prev
          </Button>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBlock: '0.75rem',
            }}
          >
            Hireable:{' '}
            {hireable ? (
              <CheckIcon color='success' />
            ) : (
              <NotInterestedIcon color='error' />
            )}
          </Box>
          <Box>
            <img src={avatar_url} alt={name} style={{ width: '150px' }} />
            <Typography variant='h4'>{name}</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <LocationOnIcon />
              <Typography variant='body1'>Location: {location}</Typography>
            </Box>
          </Box>
          <Box>
            {bio && (
              <>
                <Typography variant='h6'>Bio</Typography>
                <Typography variant='body1'>{bio}</Typography>
              </>
            )}
            <Button
              href={html_url}
              variant='contained'
              sx={{ marginBlock: '0.75rem', width: '100%' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Profile
            </Button>
            <List>
              {login && (
                <ListItem
                  sx={{
                    '& div': {
                      marginBottom: '0.5rem',
                    },
                  }}
                >
                  <ListItemText>Username: {login}</ListItemText>
                </ListItem>
              )}
              {company && (
                <ListItem>
                  <ListItemText>Company: {company}</ListItemText>
                </ListItem>
              )}
              {blog && (
                <ListItem>
                  <ListItemText>
                    Blog:{' '}
                    <MuiLink
                      href={blog}
                      underline='none'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {blog}
                    </MuiLink>
                  </ListItemText>
                </ListItem>
              )}
            </List>
          </Box>
          <Box></Box>
          <Box
            sx={{
              '& div': {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
                '&:last-child': {
                  marginBottom: '0px',
                },
              },
            }}
          >
            <Box>
              <GroupIcon />
              <Typography>Followers: {followers}</Typography>
            </Box>
            <Box>
              <GroupIcon />
              <Typography>Following: {following}</Typography>
            </Box>
            <Box>
              <BookIcon />
              <Typography>Public Repo: {public_repos}</Typography>
            </Box>
            <Box>
              <GitHubIcon />
              <Typography>Public gists: {public_gists}</Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </motion.div>
  );
};

export default GithubUserInfo;
