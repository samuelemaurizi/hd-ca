import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SET_USER_DATA,
  SET_GITHUB_USERNAME,
  GET_GITHUB_USER,
  CLEAR_GITHUB_USER,
  SET_LOADING,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    userData: {},
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  console.log('USER DATA', state.userData);

  const setUserData = (data) => {
    setLoading();

    dispatch({
      type: SET_USER_DATA,
      payload: data,
    });
  };

  const setGithubUsername = (name) => {
    dispatch({ type: SET_GITHUB_USERNAME });
  };

  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: 'token' + process.env.REACT_APP_TOKEN,
      },
    });

    dispatch({
      type: GET_GITHUB_USER,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_GITHUB_USER });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        userData: state.userData,
        user: state.user,
        loading: state.loading,
        setUserData,
        setGithubUsername,
        getUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
