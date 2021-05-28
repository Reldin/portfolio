import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './to-do';

const store = configureStore( {
  reducer: { todo: todoSlice.reducer}
});


export default store;