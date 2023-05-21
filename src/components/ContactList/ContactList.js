import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn, Item, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
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