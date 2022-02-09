import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};


export const decrementSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    decrement: (state) => {
      state.value -= 3;
    },
  },
});

export const { decrement } = decrementSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCountD = (state: RootState) => state.decrement.value;

export default decrementSlice.reducer;
