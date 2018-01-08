/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_RQNAME,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  rqname: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_RQNAME:

      // Delete prefixed '@' from the github rqname
      return state
        .set('rqname', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;
