import { all } from 'redux-saga/effects';
import api from '../services/Api';
import user from './user';

export default function* root() {
  yield all([...user({ api })]);
}
