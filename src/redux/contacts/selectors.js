import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts.items;
export const selectLoader = state => state.contactsData.contacts.isLoading;
export const selectError = state => state.contactsData.contacts.error;
export const selectFilter = state => state.contactsData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
