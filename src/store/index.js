import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// reducer will run when component loads so you need to give it a default (initial) state
const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState, // JS will interpret this as initialState: initialState (i.e. line 5 variable)
  reducers: {
    // map of reducers this slice needs
    increment(state) {
      state.counter++; // although it looks like we're mutating state, redux library will detect it and will clone state, edit
      // what we're editing, and add what we're not in an immutable way
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    // IMPORTANT: you must never mutate existing state: always override and return a brand new state
    // i.e. don't do this: state.counter++ (mutating the original state)
    // instead we return brand new values like this:
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
