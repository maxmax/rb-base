import { createSelector } from 'reselect';

/**
 * Direct selector to the news state domain
 */
const selectNewsDomain = (state) => state.get('news');

/**
 * Other specific selectors
 */


/**
 * Default selector used by News
 */

const makeSelectNewsApp = () => createSelector(
  selectNewsDomain,
  (substate) => substate.toJS()
);

export default makeSelectNewsApp;
export {
  selectNewsDomain,
};
