import { put, takeLatest, delay } from 'redux-saga/effects';
import { userTypes, userActions } from '../redux/reducers/user';

function* login({ api }, { username, password, onSuccess }) {
  const response = yield delay(2000);
  onSuccess && onSuccess();
  yield put(
    userActions.userSet({ first_name: 'First name', last_name: 'Last name' }),
  );
}

function* logout({ api }) {
  const response = yield delay(2000);
  yield put(userActions.userSet(null));
}

export default ({ api }) => [
  takeLatest(userTypes.LOGOUT, logout, { api }),
  takeLatest(userTypes.LOGIN, login, { api }),
];
