import { createStore } from 'redux';

// reducer will run when component loads so you need to give it a default (initial) state
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      // even though we're not changing this property, we have to return it because redux won't merge
      // changed states existing states (we have to specify it whether it changes or not)
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  // if neither of these branches are triggered just return the state
  return state;
};

const store = createStore(counterReducer);

export default store;
