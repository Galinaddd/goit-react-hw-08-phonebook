import { Input, Label, AuthForm } from './RegistrationForm.styled';
import { register } from 'redux/auth/operation';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log('values', values);

    const newUser = {
      name: values.userName,
      email: values.email,
      password: values.password,
    };

    console.log('newUser', newUser);
    dispatch(register(newUser));
  };

  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <AuthForm>
        <Label>
          UserName
          <Input type="text" name="userName" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Pasword
          <Input type="password" name="password" required />
        </Label>
        <button type="submit">Register</button>
      </AuthForm>
    </Formik>
  );
};
