import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  max-width: 400px;
  text-align: right;
`;

export const FormField = styled.label`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  height: 30px;
  font-size: 20px;
`;

export const FormInput = styled.input`
  min-width: 200px;
  margin-left: 20px;
  height: 30px;
  font-size: 16px;
`;

export const BtnWrapper = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

export const Btn = styled.button`
  width: 85px;
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
