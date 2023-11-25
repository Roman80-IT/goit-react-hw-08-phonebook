import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReducer';
import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
  FormSpan,
} from './LoginPage.styled';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>
        <FormSpan>Email</FormSpan>
        <FormInput {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </FormLabel>
      <FormLabel>
        <FormSpan>Password</FormSpan>
        <FormInput
          {...register('password', { required: true, minLength: 6 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </FormLabel>
      <FormBtn type="submit">Log In</FormBtn>
    </Form>
  );
};

export default LoginPage;
