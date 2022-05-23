import React, { useContext, useEffect } from 'react';

import GithubContext from '../context/github/githubContext';

// COMPONENTS
import Navigation from '../components/Navigation';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookIcon from '@mui/icons-material/Book';

const GithubUserInfo = () => {
  const githubContext = useContext(GithubContext);
  const { getGithubUser, user, loading } = githubContext;

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
    getGithubUser('samuelemaurizi');
    // eslint-disable-next-line
  }, []);

  console.log('>>>>> user', user);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Box
      sx={{
        outline: '1px solid pink',
        width: '100%',
        maxWidth: '70%',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '1rem 2rem',
        }}
      >
        <Typography variant='h5' align='center'>
          GithubUserInfo
        </Typography>
        <Navigation current={3} prevDisabled={false} nextDisabled={true} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Hireable:{' '}
          {hireable ? (
            <CheckIcon color='success' />
          ) : (
            <NotInterestedIcon color='error' />
          )}
        </Box>
        <Box>
          <Box>
            <img
              src={avatar_url}
              alt={name}
              className='round-image'
              style={{ width: '150px' }}
            />
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
              // sx={{ width: 'min(100%, 29ch)' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Profile
            </Button>
            <List>
              {login && (
                <ListItem>
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
                  <ListItemText>Blog: {blog}</ListItemText>
                </ListItem>
              )}
            </List>
          </Box>
        </Box>
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
    </Box>
  );
};

export default GithubUserInfo;
