
import { fromJS } from 'immutable';
import newsReducer from '../reducer';

describe('newsReducer', () => {
  it('returns the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
