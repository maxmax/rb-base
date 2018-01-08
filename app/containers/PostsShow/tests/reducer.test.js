
import { fromJS } from 'immutable';
import postsShowReducer from '../reducer';

describe('postsShowReducer', () => {
  it('returns the initial state', () => {
    expect(postsShowReducer(undefined, {})).toEqual(fromJS({}));
  });
});
