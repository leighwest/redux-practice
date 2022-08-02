import { createStore } from "redux";

// reducer will run when component loads so you need to give it a default (initial) state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  // if neither of these branches are triggered just return the state
  return state;
};

const store = createStore(counterReducer);

export default store;
