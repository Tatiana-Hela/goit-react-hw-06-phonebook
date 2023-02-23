import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import css from '../ContactList/ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length === 0 && (
        <p className={css.text}>Your phonebook is empty. Please add contact.</p>
      )}
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
export default ContactList;
