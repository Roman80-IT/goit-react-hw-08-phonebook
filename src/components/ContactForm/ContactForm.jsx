import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsReducer2';

import { Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.contactName.value;
    const phone = event.currentTarget.elements.contactNumber.value;

    const newContact = {
      name,
      phone,
    };

    const isNameHas = name => {
      return contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    if (isNameHas(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    console.log('newContact: ', newContact);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleAddContact}>
      <label>
        Name
        <Input
          type="text"
          name="contactName"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Enter name"
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="contactNumber"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          required
          placeholder="Enter number (123-45-67)"
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
