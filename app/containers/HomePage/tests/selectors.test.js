import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectID,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectID', () => {
  const rqnameSelector = makeSelectID();
  it('should select the rqname', () => {
    const rqname = 'maxmax';
    const mockedState = fromJS({
      home: {
        rqname,
      },
    });
    expect(rqnameSelector(mockedState)).toEqual(rqname);
  });
});
