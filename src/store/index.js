import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';

const store = configureStore({
  // if we only have one reducer we would use this pattern:
  // reducer: counterSlice.reducer,

  // If we have multiple reducers we would use this pattern:
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
