import * as actionsTypes from './types';

export const storeTester = (message) => ({
  type: actionsTypes.STATE_CHECKER,
  payload: message,
});
