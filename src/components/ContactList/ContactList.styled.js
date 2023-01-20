import styled from 'styled-components';

export const List = styled.ul`
  margin-right: auto;
  margin-left: auto;
  padding: 0 !important;
  width: 480px;
  list-style-type: circle;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 !important;
  font-size: 20px;
  gap: 20px;
  line-height: 0;
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;
