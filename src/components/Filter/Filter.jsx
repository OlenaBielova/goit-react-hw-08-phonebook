import React from 'react';
import { SearchByName, SearchInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <SearchByName>
      Find contact by name
      <SearchInput
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        name="filter"
      />
    </SearchByName>
  );
};
