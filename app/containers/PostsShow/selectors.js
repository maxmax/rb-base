import { createSelector } from 'reselect';

const selectPostsShowDomain = (state) => state.get('postsShow');

const makeSelectPostsShow = () => createSelector(
  selectPostsShowDomain,
  (postsShowState) => postsShowState.get('pageid')
);

// export default makeSelectPostsShow;
export {
  selectPostsShowDomain,
  makeSelectPostsShow,
};
