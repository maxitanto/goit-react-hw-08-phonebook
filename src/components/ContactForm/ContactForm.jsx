import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';
import { addContact } from 'redux/thunk';

import css from './ContactForm.module.css';

export function ContactForm() {
  const [contactName, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = items.some(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );

    if (isAdded) {
      alert(`${contactName}  is already in contacts.`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        phone: number,
      })
    );

    reset();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  //Reset форми
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={contactName}
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.inputNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
