import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';

import css from '../App/App.module.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length >= 1 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p className={css.text}>
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </Section>
    </div>
  );
};
export default App;
