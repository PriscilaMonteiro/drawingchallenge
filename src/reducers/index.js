import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
  word: {
    
    
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
    return({
      ...state,
      word: {},
      isFetching: true,
      error: ''
    });
    case(FETCH_SUCCESS):
    return({
      ...state,
      word: action.payload,
      isFetching: false,
      error: ''
    });
    case (FETCH_FAIL):
      return({
        ...state,
        word: {},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};
