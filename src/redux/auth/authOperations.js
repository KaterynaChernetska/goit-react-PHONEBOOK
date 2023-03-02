import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserAPI } from '../../services/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerRequest = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.signUpUser(formData);
      token.set(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.loginUser(formData);
      token.set(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await UserAPI.logOutUser();

      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const userInfo = createAsyncThunk('user/info', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const response = await UserAPI.getUserInfo();
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
