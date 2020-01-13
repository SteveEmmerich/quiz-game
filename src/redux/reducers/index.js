import { createStore, combineReducers } from "redux";
import { actionTypes } from "../actions";

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
const initialState = {
  questions: [],
  answers: [],
  results: []
};
const answerReducer = createReducer(initialState, {
  [actionTypes.ANSWER]: (state, action) => {
    // Will be id, and answer
    // We could make this check if the answer is correct or not.
    state.answers.push(action.payload);
  }
});

const noop = (state = initialState, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  return state;
};
const root = combineReducers({ noop });

const store = createStore(root);

export default store;
