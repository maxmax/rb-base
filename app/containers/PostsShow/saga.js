import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ARTICLE } from 'containers/App/constants';
import { articleLoaded, articleLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectPostsShow } from 'containers/PostsShow/selectors';

const API_BASE_URL = process.env.API_BASE_URL;
const API_SPACE_ID = process.env.API_SPACE_ID;
const API_TOKEN = process.env.API_TOKEN;

/**
 * request/response handler
 */
export function* getArticle() {
  const requestID = yield select(makeSelectPostsShow());
  const requestURL = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${requestID}?access_token=${API_TOKEN}&content_type=2wKn6yEnZewu2SCCkus4as`;
  try {
    // Call our request helper (see 'utils/request')
    const article = yield call(request, requestURL);
    yield put(articleLoaded(article.fields));
  } catch (err) {
    yield put(articleLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* articleData() {
  // Watches for LOAD_news actions and calls getnews when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_ARTICLE, getArticle);
}
