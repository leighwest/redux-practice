import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // if we only have one reducer we would use this pattern:
  // reducer: counterSlice.reducer,

  // If we have multiple reducers we would use this pattern:
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
