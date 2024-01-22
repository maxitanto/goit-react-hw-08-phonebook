import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './Contacts.module.css';

export const ContactsPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}> Phonebook </h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
