import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { Form, Btn, BtnWrapper, FormField, FormInput } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormField>
        Email
        <FormInput type="email" name="email" />
      </FormField>
      <FormField>
        Password
        <FormInput type="password" name="password" />
      </FormField>
      <BtnWrapper>
        <Btn type="submit">Log In</Btn>
      </BtnWrapper>
    </Form>
  );
};
