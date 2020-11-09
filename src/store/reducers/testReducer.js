import { act } from 'react-dom/test-utils';
import * as actionTypes from '../actions/types';
const initialSTate = {
  message: '',
};

const testReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.STATE_CHECKER: {
      return { ...state, message: payload };
    }
    default:
      return state;
  }
};
export default testReducer;
