import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WelcomeMessage = styled.b`
font-size: 12px;

  text-align: end;
`;
export const Btn = styled.button`
  width: 70px;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  font-size: 14px;
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
