import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const response = await axios.post('/users/signup', credentials);
      console.log('registration result', response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      console.log('registration result', response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    console.log(
      '  before after clean axios.defaults.headers.common.Authorization',
      axios.defaults.headers.common.Authorization
    );
    clearAuthHeader();
    console.log('registration result', response);
    console.log(
      '  after clean axios.defaults.headers.common.Authorization',
      axios.defaults.headers.common.Authorization
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/users/current');
      console.log('registration result', response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
