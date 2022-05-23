import React, { useState, useEffect, useContext } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link, useNavigate } from 'react-router-dom';

import GithubContext from '../context/github/githubContext';

// HELPERS
import { isObjValueValid } from '../helpers';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const FirstStep = () => {
  const githubContext = useContext(GithubContext);
  const { setUserData, userData } = githubContext;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    githubUsername: '',
  });
  const { firstName, lastName, githubUsername } = formData;

  const isValid = isObjValueValid(formData);
  const [disabled, setDisabled] = useState(false);

  // @DESC  if userData in context set form with that data
  useEffect(() => {
    if (userData) setFormData(userData);
  }, [userData]);

  useEffect(() => {
    if (isValid) setDisabled(false);
  }, [isValid]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    navigate('/step2');
  };

  const handleError = (e) => {
    // console.log('error', e);
    setDisabled(true);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        outline: '1px solid pink',
        width: '100%',
        maxWidth: '70%',
      }}
    >
      <ValidatorForm onSubmit={handleSubmit} onError={handleError}>
        <Stack spacing={3}>
          <TextValidator
            placeholder='First Name'
            name='firstName'
            value={firstName || ''}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
            fullWidth
          />
          <TextValidator
            placeholder='Last Name'
            name='lastName'
            value={lastName || ''}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
            disabled={false}
            fullWidth
          />
          <TextValidator
            placeholder='Github Username'
            name='githubUsername'
            value={githubUsername || ''}
            onChange={handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
            fullWidth
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button component={Link} to='/' variant='contained'>
              Prev
            </Button>
            <Button type='submit' variant='contained' disabled={disabled}>
              Next
            </Button>
          </Box>
        </Stack>
      </ValidatorForm>
    </Paper>
  );
};

export default FirstStep;
