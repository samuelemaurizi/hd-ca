import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// const STEP_AMOUNT = 2;

const Navigation = ({ prevDisabled, nextDisabled, current, type }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '24px',
      }}
    >
      <Button
        component={Link}
        to={current - 1 === 0 ? '/' : `/step${current - 1}`}
        variant='contained'
      >
        Prev
      </Button>
      {/* <Link
        className={[
          'navigation-button',
          prevDisabled ? 'navigation-button--disabled' : '',
        ].join(' ')}
        to={current - 1 === 0 ? '/' : `/step${current - 1}`}
      >
        Prev
      </Link> */}
      {/* <Link
        to={`/step${current + 1}`}
        className={[
          'navigation-button',
          nextDisabled ? 'navigation-button--disabled' : '',
        ].join(' ')}
      >
        Next
      </Link> */}
      <Button
        type={type}
        component={Link}
        to={`/step${current + 1}`}
        variant='contained'
        disabled={nextDisabled}
        sx={{
          display: current === 3 ? 'none' : 'inline-block',
        }}
      >
        {current === 2 ? 'Submit' : 'Next'}
      </Button>
    </Box>
  );
};

export default Navigation;
