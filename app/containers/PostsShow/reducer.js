/*
 *
 * PostsShow reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SHOWID,
} from './constants';

// const initialState = fromJS({});
// The initial state of the App
const initialState = fromJS({
  pageid: '',
});

function postsShowReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SHOWID:
      return state
        .set('pageid', action.pageid);
    default:
      return state;
  }
}

export default postsShowReducer;
