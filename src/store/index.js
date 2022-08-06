import { createSlice, configureStore } from '@reduxjs/toolkit';

// reducer will run when component loads so you need to give it a default (initial) state
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
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

const store = configureStore({
  reducer: counterSlice.reducer,

  // If we had multiple reducers we would use this pattern:
  // reducer: { counter: counterSlice.reducer },
});

export default store;
