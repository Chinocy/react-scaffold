import { all } from 'redux-saga/effects';
import api from '../services/Api';
import auth from './auth';

export default function* root() {
  yield all([...auth({ api })]);
}
