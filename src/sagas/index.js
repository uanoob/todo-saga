import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../store/actions';
import API_URL from '../config';

export function* fetchToDoList() {
  const response = yield call(fetch, API_URL);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, payload: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
