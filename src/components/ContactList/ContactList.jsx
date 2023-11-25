import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
  getFilter,
} from 'redux/contacts.selectors';
import { fetchContacts } from 'redux/contactsReducer';

import { Loader } from 'components/Loader/Loader';
import { Contact } from 'components/Contact/Contact';
// import ErrorMessage from 'components/ErrorMessage';

// import { FaTimes } from 'react-icons/fa';
// import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
import { ListContainer, Title } from './ContactList.styled';
import { Filter } from 'components/Filter/Filter';
import Empty from './Empty';

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

  // export const ContactList = () => {
  //   const dispatch = useDispatch();

  //   const contacts = useSelector(selectContacts);
  //   const isLoading = useSelector(selectContactsIsLoading);
  //   const error = useSelector(selectContactsError);
  //   const filterTerm = useSelector(selectContactsFilterTerm);

  // const filteredContacts =
  //   contacts !== null &&
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterTerm.toLowerCase().trim())
  //   );

  return (
    <ListContainer>
      {isLoading && <Loader />}
      {!isLoading && contacts?.length > 1 && <Filter />}
      {!isLoading && contacts?.length < 1 && <Empty />}
      {/* {error && <ErrorMessage message={error} />} */}
      <ul>
        {Array.isArray(contacts) && contacts.length > 0 && (
          <>
            <Title>Contacts</Title>

            {filteredContacts?.map(contact => (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </>
        )}
      </ul>
    </ListContainer>
  );

  // {
  //   Array.isArray(contacts) &&
  //     filteredContacts?.map(contact => (
  //       <Contact
  //         id={contact.id}
  //         key={contact.id}
  //         name={contact.name}
  //         number={contact.number}
  //       />
  //     ));
  // }

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
