import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from '../features/counter/counterSlice';
import decrementReducer from '../features/counter/decrementSlice';

// https://github.com/rt2zz/redux-persist

const persistConfig = {
  key: 'primary',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    decrement: decrementReducer,
  })
);


export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
