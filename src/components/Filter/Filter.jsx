import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterReducer';
import { getFilter } from 'redux/contacts.selectors';

import { FormInput } from 'pages/LoginPage/LoginPage.styled';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { Title } from 'pages/ContactsPage/ContactsPage.styled';
// import { selectContactsFilterTerm } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(getFilter);

  const handleFilterTerm = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
    <Form>
      <Title>Find contact by name:</Title>
      <FormInput
        type="text"
        name="filter"
        id="filter"
        value={filterTerm}
        placeholder="Filter contacts"
        onChange={handleFilterTerm}
      />
    </Form>
  );
};
