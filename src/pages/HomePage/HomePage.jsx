import React from 'react';
import { Container, Greeting, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>PhoneBook</Title>
      <Greeting>Welcome to the contact book!</Greeting>
    </Container>
  );
};

export default HomePage;
