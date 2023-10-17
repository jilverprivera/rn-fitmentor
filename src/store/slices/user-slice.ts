import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: null,
  imageUrl: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onSetUser: (state, {payload}) => {
      state.name = payload.name;
      state.imageUrl = payload.imageUrl;
    },
    onClearUser: state => {
      state.name = initialState.name;
      state.imageUrl = initialState.imageUrl;
    },
  },
});

export const {onSetUser, onClearUser} = userSlice.actions;
