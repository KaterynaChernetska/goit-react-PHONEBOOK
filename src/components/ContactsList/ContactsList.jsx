import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectLoader,
} from 'redux/contacts/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader/Loader';
import IconPhone from 'components/IconPhone/IconPhone';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {error && <p>Oops, some error occured... Message: {error}</p>}
        {isLoading ? (
          <Loader />
        ) : (
            filteredContacts?.length > 0 && filteredContacts.map(({ id, name, number }) => (
            <li className={css.listItem} key={id}>
              <IconPhone className={css.icon} />
              <span className={css.name}>{name}:</span>
              <span className={css.number}>{number}</span>
              <button
                className={css.deleteBtn}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
