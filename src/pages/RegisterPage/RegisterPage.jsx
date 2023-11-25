import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';

import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
  FormSpan,
} from 'pages/LoginPage/LoginPage.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
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
        <FormSpan>Name</FormSpan>
        <FormInput {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </FormLabel>
      <FormLabel>
        <FormSpan>Password</FormSpan>
        <FormInput
          {...register('password', { required: true, minLength: 6 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </FormLabel>

      <FormBtn type="submit">Sign Up</FormBtn>
    </Form>
  );
};

export default RegisterPage;
