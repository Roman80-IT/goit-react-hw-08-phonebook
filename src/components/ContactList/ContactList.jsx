import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
  getFilter,
} from 'redux/contacts.selectors';
import { fetchContacts } from 'redux/contactsReducer';

import { Loader } from 'components/Loader/Loader';
// import { Contact } from 'components/Contact/Contact';
// import ErrorMessage from 'components/ErrorMessage';
// import { FaTimes } from 'react-icons/fa';
// import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import {
  // DeleteBtn,
  ListContainer,
  // ListItem,
  // NumberContainer,
  // NumberFont,
} from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const onDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  // export const ContactList = () => {
  //   const dispatch = useDispatch();

  //   const contacts = useSelector(selectContacts);
  //   const isLoading = useSelector(selectContactsIsLoading);
  //   const error = useSelector(selectContactsError);
  //   const filterTerm = useSelector(selectContactsFilterTerm);

  //! Отримаємо всі контакти з АПІ
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // // console.log('contacts in ContactList: ', contacts);

  // const filteredContacts =
  //   contacts !== null &&
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterTerm.toLowerCase().trim())
  //   );

  return (
    <ListContainer>
      {isLoading && <Loader />}
      {/* {error && <ErrorMessage message={error} />} */}
      <ul>
        {Array.isArray(contacts) &&
          filteredContacts?.map(contact => (
            <Contact
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
      </ul>
    </ListContainer>
  );

  /* <ListItem key={contact.id}>
  <h4>{contact.name}</h4>
  <NumberContainer>
    <NumberFont>{contact.number}</NumberFont>
    <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
      <FaTimes size="24" />
      {/* <MdOutlineRemoveCircleOutline
                    className="bold-icon"
                    size="30"
                  /> */
  //     </DeleteBtn>
  //   </NumberContainer>
  // </ListItem>;

  // return (
  //   <>
  //     {isLoading && <Loader />}
  //     {error && <ErrorMessage message={error} />}

  //     <ul>
  //       {filteredContacts &&
  //         filteredContacts.map(({ id, name, phone }) => {
  //           return (
  //             <li key={id}>
  //               <Contact id={id} name={name} phone={phone} />
  //             </li>
  //           );
  //         })}
  //     </ul>
  //   </>
  // );
};
