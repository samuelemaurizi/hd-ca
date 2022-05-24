import {
  SET_USER_DATA,
  GET_GITHUB_USER,
  SET_LOADING,
  CLEAR_GITHUB_USER,
  SET_ERROR,
} from '../types';

const githubReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...payload },
        loading: false,
      };
    case GET_GITHUB_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_GITHUB_USER:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
