import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { BlockContainer, Container, Title } from './ContactsPage.styled';

export const ContactsPage = () => {
  return (
    <Container>
      <BlockContainer>
        <Title>Add contact</Title>
        <ContactForm />
      </BlockContainer>

      <BlockContainer>
        <ContactList />
      </BlockContainer>
    </Container>
  );
};

export default ContactsPage;
