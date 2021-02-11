import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  login: ['username', 'password', 'onSuccess'],
  logout: null,
  userSet: ['user'],
  fetchingSet: ['fetching'],
});

export const userTypes = Types;
export const userActions = Creators;

const INITIAL_STATE = Immutable({
  user: null,
  fetching: false,
});

const setUser = (state, { user }) =>
  Immutable.merge(state, { fetching: false, user });
const login = (state) => Immutable.merge(state, { fetching: true });
const logout = (state) => Immutable.merge(state, { fetching: true });
const setFetching = (state, { fetching }) =>
  Immutable.merge(state, { fetching });

export const HANDLERS = {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout,
  [Types.USER_SET]: setUser,
  [Types.FETCHING_SET]: setFetching,
};

export default createReducer(INITIAL_STATE, HANDLERS);
