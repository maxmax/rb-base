import {
  CHANGE_RQNAME,
} from '../constants';

import {
  changerqname,
} from '../actions';

describe('Home Actions', () => {
  describe('changerqname', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_RQNAME,
        name: fixture,
      };

      expect(changerqname(fixture)).toEqual(expectedResult);
    });
  });
});
