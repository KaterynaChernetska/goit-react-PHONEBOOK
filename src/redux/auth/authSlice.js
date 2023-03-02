import { createSlice } from '@reduxjs/toolkit';
import {
  loginRequest,
  registerRequest,
  userLogOut,
  userInfo,
} from './authOperations';

const authInitialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(registerRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userLogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(userInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
