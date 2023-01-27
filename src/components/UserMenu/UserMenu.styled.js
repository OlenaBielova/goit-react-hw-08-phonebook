import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  width: 70px;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: white;
    outline: 4px solid red;
    color: red;
    cursor: pointer;
  }
`;
