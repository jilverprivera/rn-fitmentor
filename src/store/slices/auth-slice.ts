import {createSlice} from '@reduxjs/toolkit';

import {STATUS_TYPES} from '../../interfaces/auth-interface';

const initialState = {
  loading: false,
  status: STATUS_TYPES['not-authenticated'],
  auth: {
    uuid: null,
    token: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthLoading: state => {
      state.loading = true;
    },
    onFinishAuthLoading: state => {
      state.loading = false;
    },
    onChecking: state => {
      state.status = STATUS_TYPES.checking;
      state.auth = initialState.auth;
    },
    onSetAuth: (state, {payload}) => {
      state.auth = payload.auth;
      state.status = STATUS_TYPES.authenticated;
      state.loading = false;
    },
    onClearAuth: state => {
      state.auth = initialState.auth;
      state.status = initialState.status;
    },
  },
});

export const {
  onAuthLoading,
  onFinishAuthLoading,
  onChecking,
  onSetAuth,
  onClearAuth,
} = authSlice.actions;
