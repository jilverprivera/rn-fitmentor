import {configureStore} from '@reduxjs/toolkit';

import {authSlice, userSlice} from './slices';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
