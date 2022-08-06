import { createSlice } from '@reduxjs/toolkit';

// reducer will run when component loads so you need to give it a default (initial) state
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // map of reducers (methods) this slice needs
    increment(state) {
      state.counter++; // although it looks like we're mutating state, redux library will detect it and will clone state, edit
      // what we're editing, and add what we're not in an immutable way
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

// we only need the reducer
export default counterSlice.reducer;
