import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsReducer';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { BlockContainer, Container, Title } from './ContactsPage.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <BlockContainer>
        <Title>Add contact</Title>
        <ContactForm />
      </BlockContainer>

      <BlockContainer>
        <Filter />
      </BlockContainer>

      <BlockContainer>
        <Title>Contacts</Title>
        <ContactList />
      </BlockContainer>
    </Container>
  );
};

export default ContactsPage;
