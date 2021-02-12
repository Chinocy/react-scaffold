import { put, takeLatest, delay } from 'redux-saga/effects';
import { userTypes, userActions } from '../redux/reducers/user';
import paths from '../routes/paths';

function* login({ api }, { values, history }) {
  yield delay(1000);
  yield put(
    userActions.userSet({ first_name: 'First name', last_name: 'Last name' }),
  );
  history.push(paths.home);
}

function* logout({ api }, { history }) {
  history.push(paths.login);
  yield put(userActions.userSet(null));
}

export default ({ api }) => [
  takeLatest(userTypes.LOGOUT, logout, { api }),
  takeLatest(userTypes.LOGIN, login, { api }),
];
