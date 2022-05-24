import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SET_USER_DATA,
  GET_GITHUB_USER,
  CLEAR_GITHUB_USER,
  SET_LOADING,
  SET_ERROR,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    stepOne: {},
    setpTwo: {},
    userData: {},
    user: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setUserData = (data) => {
    setLoading();

    dispatch({
      type: SET_USER_DATA,
      payload: data,
    });
  };

  const getGithubUser = async (username) => {
    setLoading();

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: 'token' + process.env.REACT_APP_TOKEN,
        },
      });

      dispatch({
        type: GET_GITHUB_USER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response,
      });
    }
  };

  const clearUsers = () => dispatch({ type: CLEAR_GITHUB_USER });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        userData: state.userData,
        user: state.user,
        loading: state.loading,
        error: state.error,
        setUserData,
        getGithubUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
