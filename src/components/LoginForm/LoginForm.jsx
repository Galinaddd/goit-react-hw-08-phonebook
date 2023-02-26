import { logIn } from 'redux/auth/operation';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Input, Label, UserLoginForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log('values', values);

    const user = {
      email: values.email,
      password: values.password,
    };

    console.log('user', user);
    dispatch(logIn(user));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <UserLoginForm>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <button type="submit">Log in</button>
      </UserLoginForm>
    </Formik>
  );
};
