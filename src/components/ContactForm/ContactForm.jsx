import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, fetchContacts } from 'redux/contactsReducer';
import { selectContacts } from 'redux/contacts.selectors';

import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';

import { Form, FormContainer } from './ContactForm.styled';
import {
  FormBtn,
  FormInput,
  FormLabel,
  FormSpan,
} from 'pages/LoginPage/LoginPage.styled';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = values => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return Notify.failure(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          <FormSpan>Name</FormSpan>
          <FormInput
            {...register('name', { required: true })}
            type="text"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter name"
          />
          {errors.name && <span>This field is required</span>}
        </FormLabel>
        <FormLabel>
          <FormSpan>Number</FormSpan>
          <FormInput
            {...register('number', { required: true })}
            type="tel"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            placeholder="Enter number (123-45-67)"
          />
          {errors.number && <span>This field is required</span>}
        </FormLabel>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </FormContainer>
  );

  //   return (
  //     <form onSubmit={handleAddContact}>
  //       <label>
  //         Name
  //         <Input
  //           type="text"
  //           name="contactName"
  //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           required
  //           placeholder="Enter name"
  //         />
  //       </label>
  //       <label>
  //         Number
  //         <Input
  //           type="tel"
  //           name="contactNumber"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
  //           required
  //           placeholder="Enter number (123-45-67)"
  //         />
  //       </label>
  //       <Button type="submit">Add contact</Button>
  //     </form>
  //   );
};
