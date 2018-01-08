/*
 *
 * PostsShow actions
 *
 */

import {
  CHANGE_SHOWID,
} from './constants';

export function changeShowId(pageid) {
  return {
    type: CHANGE_SHOWID,
    pageid,
  };
}
