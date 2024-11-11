// store.js
import { configureStore } from '@reduxjs/toolkit';
import bicycleReducer from './slices/bicycleSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    bicycles: bicycleReducer,
    cart: cartReducer,
  },
});

export default store;
