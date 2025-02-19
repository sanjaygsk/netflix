import { configureStore, combineReducers } from '@reduxjs/toolkit';
import placeReducer from './reducers/homeReducer';

const rootReducer = combineReducers({
  places: placeReducer
  // Add other reducers here
});

const store = () => configureStore({
  reducer: rootReducer
});

export default store;