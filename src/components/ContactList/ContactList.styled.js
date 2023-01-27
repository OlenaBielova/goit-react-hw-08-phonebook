import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

export const Wrapper = styled.div`
  text-align: center;
`;

export const List = styled.ul`
  padding: 0 !important;
  list-style-type: circle;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0 !important;
  font-size: 20px;
  font-weight: normal;
  gap: 20px;
  line-height: 0;
`;

export const DeleteBtn = styled.button`
  width: 35px;
  background: transparent;
  border: none !important;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(TiDelete)`
  margin-top: auto;
  margin-bottom: auto;
  background-color: transparent;
  color: rgb(7, 132, 249);x 
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
`;
