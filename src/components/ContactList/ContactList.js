import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { getFilter } from 'redux/selectors';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn, Item, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  const displayContactlist = filter === "" ? contacts : filteredContacts;

  if (!displayContactlist?.length) {
    return <div>Contacts not found</div>;
  }
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <List>
      {displayContactlist.map(contact => (
        <Item key={contact.id}>
          <div>
            <span>{contact.name}:</span> <span>{contact.number}</span>
          </div>
          <div>
            <DeleteBtn title="Delete contact" aria-label='Delete contact' type="button" onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></DeleteBtn>
          </div>
        </Item>
      ))}
    </List>
  )
}