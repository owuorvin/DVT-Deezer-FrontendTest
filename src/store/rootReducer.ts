import { combineReducers } from '@reduxjs/toolkit';
import songs from './songsSlice';

/**
 * @description Aggregate all reducers into a root reducer
 */
const rootReducer = combineReducers({
  songs
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
