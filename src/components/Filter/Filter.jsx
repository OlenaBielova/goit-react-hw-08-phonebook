import React from 'react';
import { SearchByName, SearchInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <SearchByName>
      Find contact by name
      <br />
      <SearchInput
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </SearchByName>
  );
};
