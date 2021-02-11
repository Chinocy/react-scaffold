import { call, put, all, takeLatest, select, delay } from 'redux-saga/effects';
import { userTypes, userActions } from '../redux/reducers/user';

function* login({ api }, { username, password, onSuccess }) {
  const response = yield delay(2000);
  onSuccess && onSuccess();
  yield put(userActions.userSet({ first_name: 'Charles', last_name: 'Yuan' }));
}

function* logout({ api }) {
  const response = yield delay(2000);
  yield put(userActions.userSet(null));
}

export default ({ api }) => [
  takeLatest(userTypes.LOGOUT, logout, { api }),
  takeLatest(userTypes.LOGIN, login, { api }),
];
