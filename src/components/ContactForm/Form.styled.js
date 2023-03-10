import { Form, Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const NewContactForm = styled(Form)`
  // margin-right: auto;
  // margin-left: auto;
  width: 350px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(7, 132, 249);
`;

export const NameInput = styled(Field)`
  min-width: 155px;
  margin-left: 32px;
  margin-bottom: 10px;
  height: 30px;
  font-size: 16px;
`;

export const NumberInput = styled(Field)`
  min-width: 155px;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 30px;
  font-size: 16px;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  outline: 1px solid rgb(7, 132, 249);
  color: rgb(7, 132, 249);
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: rgb(7, 132, 249);
    color: white;
    cursor: pointer;
  }
`;

export const Error = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: red;
  font-weight: normal;
`;
