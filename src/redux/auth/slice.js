import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const authReduser = authSlice.reducer;
