/**
 * Gets the newsitories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_NEWS } from 'containers/App/constants';
import { newsLoaded, newsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

const API_BASE_URL = process.env.API_BASE_URL;
const API_SPACE_ID = process.env.API_SPACE_ID;
const API_TOKEN = process.env.API_TOKEN;

/**
 * Github news request/response handler
 */
export function* getNews() {
  const requestURL = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=2wKn6yEnZewu2SCCkus4as`;

  try {
    // Call our request helper (see 'utils/request')
    const news = yield call(request, requestURL);
    yield put(newsLoaded(news.items));
  } catch (err) {
    yield put(newsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* newsData() {
  // Watches for LOAD_news actions and calls getnews when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_NEWS, getNews);
}
