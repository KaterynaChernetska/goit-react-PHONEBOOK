import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import Notiflix from 'notiflix';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const handleFilter = event => {
    const value = event.target.value.toLowerCase();
    if (!contacts.some(({ name }) => name.toLowerCase().includes(value))) {
      Notiflix.Notify.failure(`${value} is not in the contacts`);
      return;
    }
    dispatch(setFilter(value));
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}> Find contacts by name</h2>
      <input  className={css.input}
        type="text"
        name="name"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder={"Enter your contact's name"}
        onChange={handleFilter}
      />
    </div>
  );
};
