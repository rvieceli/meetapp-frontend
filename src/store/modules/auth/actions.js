export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_FAILURE = '@auth/SIGN_FAILURE';
export const SIGN_OUT = '@auth/SIGN_OUT';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure(error) {
  return {
    type: SIGN_FAILURE,
    payload: { error },
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
