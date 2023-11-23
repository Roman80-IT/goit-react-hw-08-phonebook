import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { refreshThunk } from 'redux/authReducer';

// import { ContactList } from './ContactList/ContactList';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Navigation } from './Navigation/Navigation';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return (
    <Container>
      <Navigation />
      {/* <Section title="Phonebook"> */}
      {/* <ContactForm /> */}
      {/* </Section> */}

      {/* <Section title="Contacts"> */}
      {/* {contacts !== null && contacts.length !== 0 && <Filter />} */}
      {/* <ContactList /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      {/* </Section> */}
    </Container>
  );
};
