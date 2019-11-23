import { GET_USERS } from '../actions/types';

const initialState = {
  loading: true,
  users: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: payload
      };
    default:
      return state;
  }
}
