import { Input, Label, AuthForm, Button } from './RegistrationForm.styled';
import { register } from 'redux/auth/operation';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    

    const newUser = {
      name: values.userName,
      email: values.email,
      password: values.password,
    };

    
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
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Register</Button>
      </AuthForm>
    </Formik>
  );
};
