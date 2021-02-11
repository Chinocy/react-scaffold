import { all } from 'redux-saga/effects';
import api from '../services/Api';
import userSaga from './UserSaga';

export default function* root() {
  yield all([...userSaga({ api })]);
}
