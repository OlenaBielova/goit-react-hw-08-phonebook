import styled from 'styled-components';
import img from '../../images/vivid-blurred-colorful-background.jpg';

export const FormContainer = styled.div`
  width: 300px;
  margin: 20px auto;
  padding: 20px 20px 20px 20px;

  font-size: 26px;
  text-align: center;
`;

export const ContactsContainer = styled.div`
flex-grow: 1;  
min-width: 400px;
  margin: 20px auto;
  padding: 20px 20px 20px 20px;

  font-size: 26px;
  text-align: center;
`;

export const Body = styled.div`
display: flex;
  width: 100vhpx;
  padding: 20px 20px 50px 20px;
  background-image: url(${img});
  background-size: cover;
`;