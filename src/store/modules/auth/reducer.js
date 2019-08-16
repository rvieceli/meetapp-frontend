import produce from 'immer';

import { SIGN_IN_SUCCESS } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
