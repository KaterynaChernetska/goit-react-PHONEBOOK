import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from '../../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await ContactsAPI.getContacts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactToPost, thunkAPI) => {
    try {
      const response = await ContactsAPI.addContacts(contactToPost);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await ContactsAPI.deleteContacts(id);
      return response.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
