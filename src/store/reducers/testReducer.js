import * as actionTypes from '../actions/types';
const initialSTate = {
  message: '',
};

const testReducer = (state = initialSTate, { type, payload }) => {
  switch (type) {
    case actionTypes.STATE_CHECKER: {
      return { ...state, message: payload };
    }
    default:
      return state;
  }
};
export default testReducer;
