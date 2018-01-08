import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changerqname,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      rqname: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changerqname action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('rqname', fixture);

    expect(homeReducer(state, changerqname(fixture))).toEqual(expectedResult);
  });
});
