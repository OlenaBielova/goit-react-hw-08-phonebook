import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Form, Btn, BtnWrapper, FormField, FormInput } from '../RegisterForm/RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
      const form = e.currentTarget;
      
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
     
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormField>
        Username
        <FormInput type="text" name="name" />
      </FormField>
      <FormField>
        Email
        <FormInput type="email" name="email" />
      </FormField>
      <FormField>
        Password
        <FormInput type="password" name="password" />
      </FormField>
      <BtnWrapper>
<Btn type="submit">Register</Btn>
      </BtnWrapper>
    </Form>
  );
};