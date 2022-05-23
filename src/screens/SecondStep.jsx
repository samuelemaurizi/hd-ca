import React, { useState, useEffect, useContext } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link, useNavigate } from 'react-router-dom';

import GithubContext from '../context/github/githubContext';

// HELPERS
import { isObjValueValid } from '../helpers';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SecondStep = () => {
  const githubContext = useContext(GithubContext);
  const { userData, setUserData } = githubContext;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    checked: false,
  });
  const { email, checked } = formData;

  const isValid = isObjValueValid(formData);
  const [disabled, setDisabled] = useState(false);

  // @DESC  if userData in context set form with that data
  useEffect(() => {
    if (userData) setFormData(userData);
  }, [userData]);

  useEffect(() => {
    if (isValid) setDisabled(false);
  }, [isValid]);

  const handleChangeObj = (e) => {
    if (e.target.name === 'email') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    navigate('/step3');
  };

  const handleError = (e) => {
    // console.log('error', e);
    setDisabled(true);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        // outline: '1px solid pink',
        width: '100%',
        maxWidth: '70%',
      }}
    >
      <ValidatorForm onSubmit={handleSubmit} onError={handleError}>
        <TextValidator
          placeholder='Email'
          name='email'
          value={email || ''}
          onChange={handleChangeObj}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
          fullWidth
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingInline: '0.75rem',
            '& > span': {
              color: 'red',
            },
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChangeObj} />}
            label='Agree with terms and services'
            labelPlacement='start'
            name='checked'
          />
          {/* <Typography
            variant='caption'
            sx={{
              display: checked || firstMount ? 'none' : 'block',
            }}
          >
            need to agree
          </Typography> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
          }}
        >
          <Button component={Link} to='/step1' variant='contained'>
            Prev
          </Button>
          <Button type='submit' variant='contained' disabled={disabled}>
            Submit
          </Button>
        </Box>
      </ValidatorForm>
    </Paper>
  );
};

export default SecondStep;
