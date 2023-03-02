import css from './ContactForm.module.css';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const handleFormChange = event => {
    const target = event.target.name;
    const inputValue = event.target.value;

    setValue(prevState => {
      return {
        ...prevState,
        [target]: inputValue,
      };
    });
  };

  const handleFormSumbit = event => {
    event.preventDefault();

    const { name, number } = value;
    const newContact = {
      name,
      number,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      Notiflix.Notify.failure(`${newContact.name} is already in the contacts`);
      setValue({
        name: '',
        number: '',
      });
      return;
    }
    dispatch(addContact(newContact));

    setValue({
      name: '',
      number: '',
    });
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleFormSumbit}>
        <h2 className={css.title}>Add contact</h2>
        <p className={css.inputTitle}>Name</p>
        <input
          className={css.input}
          type="text"
          name="name"
          value={value.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFormChange}
          required
          placeholder={"Enter your contact's name"}
        />
        <p className={css.inputTitle}>Number</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={value.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleFormChange}
          placeholder={"Enter your contact's phone"}
          required
        />
        <button  className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
