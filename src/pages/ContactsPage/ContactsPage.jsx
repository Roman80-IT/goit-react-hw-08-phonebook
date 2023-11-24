import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsReducer';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Add new contact</h2>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts list</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
