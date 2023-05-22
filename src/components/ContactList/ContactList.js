
import { RiUserUnfollowFill } from 'react-icons/ri';
import { List } from "./ContactList.styled";
import { Item } from 'components/ContactListItem/ContactListItem.styled';

export const ContactList = ({ items, ...otherProps }) => {

  return (
    <List>
      {items.map(item => (
        <Item key={item.key} item={item} {...otherProps} />
      ))}
    </List>
      
      
    
  )
}

/* {!contacts?.length && !error && !isLoading && (
        <div>Contacts not found</div>
      )}
      {!error && !isLoading && contacts?.length > 0 && (
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
      )} */