import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const UserAPI = {
  async signUpUser(userData) {
    const { data } = await axios.post('/users/signup', userData);

    return data;
  },

  async loginUser(signedUserData) {
    const { data } = await axios.post('/users/login', signedUserData);

    return data;
  },

  async logOutUser() {
    const { data } = await axios.post('/users/logout');

    return data;
  },

  async getUserInfo() {
    const { data } = await axios.get('/users/current');
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await axios.get('/contacts');
    return data;
  },

  async addContacts(newContact) {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  },

  async deleteContacts(contactId) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  },

  //   async changeContacts(id) {
  //     const { data } = await axios.delete(`/contacts/${id}`);
  //     return data;
  //   },
};
