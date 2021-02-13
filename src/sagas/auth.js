import { put, takeLatest, delay } from 'redux-saga/effects';
import { authTypes, authActions } from '../redux/reducers/auth';
import paths from '../config/paths';

function* login(_, { history }) {
  yield delay(1000);
  yield put(
    authActions.userSet({ first_name: 'First name', last_name: 'Last name' }),
  );
  history.push(paths.home);
}

function* logout(_, { history }) {
  history.push(paths.login);
  yield put(authActions.userSet(null));
}

export default ({ api }) => [
  takeLatest(authTypes.LOGOUT, logout, { api }),
  takeLatest(authTypes.LOGIN, login, { api }),
];
