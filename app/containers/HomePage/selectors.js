/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectID = () => createSelector(
  selectHome,
  (homeState) => homeState.get('rqname')
);

export {
  selectHome,
  makeSelectID,
};
