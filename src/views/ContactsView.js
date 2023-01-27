
 import { ContactForm } from '../components/ContactForm/Form';
import { ContactList } from '../components/ContactList/ContactList';
// import { ContactsContainer, FormContainer, Body } from './App.styled';
const ContactView = () => {

return (
    <>
        {/* <FormContainer> */}
              <ContactForm />
            {/* </FormContainer> */}
            {/* <ContactsContainer> */}
              <ContactList />
            {/* </ContactsContainer> */}
    </>
  );
};

export default ContactView;