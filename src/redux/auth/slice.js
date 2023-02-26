import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log('action', action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const authReduser = authSlice.reducer;
