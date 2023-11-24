import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
  getFilter,
} from 'redux/contacts.selectors';
import { deleteContact, fetchContacts } from 'redux/contactsReducer';

import { Loader } from 'components/Loader/Loader';
// import { Contact } from 'components/Contact/Contact';
// import ErrorMessage from 'components/ErrorMessage';
import { FaTimes } from 'react-icons/fa';

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

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

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
    <div>
      {isLoading && <Loader />}
      {/* {error && <ErrorMessage message={error} />} */}
      <ul>
        {Array.isArray(contacts) &&
          filteredContacts?.map(contact => (
            <li key={contact.id}>
              <h4>{contact.name}</h4>
              <div>
                <p>{contact.number}</p>
                <button onClick={() => onDeleteContact(contact.id)}>
                  <FaTimes />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );

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
