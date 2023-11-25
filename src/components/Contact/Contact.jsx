import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from 'redux/contacts.selectors';
import { deleteContact } from 'redux/contactsReducer';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import PersonIcon from '@mui/icons-material/Person';
import { Link, Paper } from '@mui/material';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <ListItem
      components={Paper}
      secondaryAction={
        <LoadingButton
          edge="end"
          aria-label="delete"
          // onClick={onDeleteContact}
          onClick={() => onDeleteContact(id)}
          title={`Delete ${name}`}
          loading={isLoading}
          variant="outlined"
          color="success"
        >
          <DeleteIcon />
        </LoadingButton>
      }
      // sx={{ borderBottom: '1px solid lightGreen' }}
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: getRandomHexColor() }}>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Link
            href={'tel:' + number}
            underline="hover"
            sx={{ color: 'green' }}
          >
            {number}
          </Link>
        }
      />
    </ListItem>
  );
};

// const onDeleteContact = contactId => {
//   dispatch(deleteContact(contactId));
// };

//  <ListItem key={contact.id}>
//   <h4>{contact.name}</h4>
//   <NumberContainer>
//     <NumberFont>{contact.number}</NumberFont>
//     <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
//       <FaTimes size="24" />
//       {/* <MdOutlineRemoveCircleOutline
//                     className="bold-icon"
//                     size="30"
//       /> */}
//     </DeleteBtn>
//   </NumberContainer>
// </ListItem>;
