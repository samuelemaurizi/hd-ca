import {
  SET_USER_DATA,
  SET_GITHUB_USERNAME,
  GET_GITHUB_USER,
  SET_LOADING,
  CLEAR_GITHUB_USER,
} from '../types';

const githubReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_DATA:
      console.log('reducer', payload);
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
    default:
      return state;
  }
};

export default githubReducer;
