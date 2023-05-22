import { useDeleteContactsMutation } from "redux/contactsAPI";
import { DeleteBtn, Item } from "./ContactListItem.styled";

export const ContactListItem = ({ item }) => {

  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  return (
    <Item item={item}>
      <div>
        <span>{item.name}:</span> <span>{item.phone}</span>
      </div>
      <div>
        <DeleteBtn title="Delete contact" aria-label='Delete contact' type="button" onClick={deleteContacts}/> 
      </div>
    </Item>
  );
}