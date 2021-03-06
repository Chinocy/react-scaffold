import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  login: ['values', 'history'],
  logout: ['history'],
  userSet: ['user'],
  fetchingSet: ['fetching'],
});

export const authTypes = Types;
export const authActions = Creators;

const INITIAL_STATE = {
  user: null,
  fetching: false,
};

const setUser = (state, { user }) => ({ ...state, fetching: false, user });

const login = (state) => ({ ...state, fetching: true });

const logout = (state) => ({ ...state, fetching: true });

const setFetching = (state, { fetching }) => ({ ...state, fetching });

export const HANDLERS = {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout,
  [Types.USER_SET]: setUser,
  [Types.FETCHING_SET]: setFetching,
};

export default createReducer(INITIAL_STATE, HANDLERS);
