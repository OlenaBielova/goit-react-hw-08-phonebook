import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { Filter } from '../Filter/Filter';
import { Wrapper, List, Contact, DeleteBtn, DeleteIcon } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';


export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);

  const { items, isLoading, error } = contacts;

  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <h3>My contacts</h3>
    <Filter />
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {filteredContacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            <DeleteIcon size={25}/>
          </DeleteBtn>
          <p>
            {name} : {number}
          </p>
          
        </Contact>
      ))}
    </List></Wrapper>
  );
};
