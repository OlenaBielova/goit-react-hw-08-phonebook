import { ContactForm } from '../Form/Form';

import { ContactList } from '../ContactList/ContactList';
import { ContactsContainer, FormContainer, Body } from './App.styled';

export function App() {
  return (
    <Body>
      <FormContainer>
      <ContactForm />
      </FormContainer>
      <ContactsContainer>
      <ContactList />
    </ContactsContainer>
    </Body>
  );
}
