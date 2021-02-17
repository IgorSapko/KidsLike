import { createReducer } from '@reduxjs/toolkit';
import loaderActions from '../loader/loaderActions';

const initialState = false;
const loaderReducer = createReducer(initialState, {
  [loaderActions.loaderON]: (state, action) => {
    return true;
  },

  [loaderActions.loaderOFF]: (state, action) => {
    return false;
  },
});
export default loaderReducer;

