import React, { useState, useEffect, useContext } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import GithubContext from '../context/github/githubContext';

// MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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

  const [disabled, setDisabled] = useState(false);

  // @DESC  if userData in context set form with that data
  useEffect(() => {
    if (userData) setFormData(userData);
  }, [userData]);

  useEffect(() => {
    setDisabled(!formData.checked);
  }, [formData]);

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
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      className='motion-div'
    >
      <Paper
        elevation={3}
        sx={{
          padding: '2rem',
        }}
      >
        <ValidatorForm onSubmit={handleSubmit} onError={handleError}>
          <TextValidator
            autoFocus
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
            }}
            className='checkbox-container'
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked || false}
                  onChange={handleChangeObj}
                />
              }
              label='Agree with terms and services'
              labelPlacement='start'
              name='checked'
              className='checkbox'
              // sx={{
              //   display: 'flex',
              //   marginLeft: '0px',
              //   flexWrap: 'wrap',
              // }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}
            className='btns-form-container'
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
    </motion.div>
  );
};

export default SecondStep;
