import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterReducer';
import { getFilter } from 'redux/contacts.selectors';
// import { selectContactsFilterTerm } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(getFilter);

  const handleFilterTerm = event => {
    return dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contact by name:</p>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filterTerm}
        placeholder="Filter contacts"
        onChange={handleFilterTerm}
      />
    </div>
  );
};
