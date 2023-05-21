import { Toaster } from 'react-hot-toast';
import { Container } from './Layout/Layout.styled';

export const App = () => {

  return (
    <Container>
      <h1>Phonebook</h1>
      <h2>Contacts</h2>
      <Toaster position="top-center" />
    </Container>
  );
};