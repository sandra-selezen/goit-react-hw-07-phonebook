import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn, Item, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <div>
            <span>{contact.name}:</span> <span>{contact.phone}</span>
          </div>
          <div>
            <DeleteBtn title="Delete contact" aria-label='Delete contact' type="button" onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></DeleteBtn>
          </div>
        </Item>
      ))}
    </List>
  )
}