import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import history from '@history';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});

const defaultValues = {
  email: '',
};

function ForgotPasswordPage() {
  const [isSend, setIsSend] = React.useState(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
    setIsSend(true)
    setTimeout(() => {
      history.push('/login');
    }
      , 3000);
  }

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32">
      <Paper className="flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-7xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden h-3xl">
        <div className="w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 ltr:border-r-1 rtl:border-l-1">
          {
            !!isSend === false && (
              <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-8">
                    <div className='text-4xl font-semibold text-center mb-5'>Reset Password</div>
                    <div className='text-16 leading-6 text-center pb-7'>Please type in your email to get password reset link.</div>
                <form
                  name="resetPassForm"
                  noValidate
                  className="flex flex-col justify-center w-full mt-48"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="Email"
                        autoFocus
                        type="email"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />

                  <Button
                    variant="contained"
                    color="secondary"
                    className=" w-full mt-16 rounded-md"
                    aria-label="Sign in"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                    size="large"
                  >
                    Confirm Reset
                  </Button>
                  <div className="flex flex-col text-center justify-center items-center mt-32 mb-16 font-medium">
                    <Link className="login-page-no-underline" to="/login">
                      Back to Login
                    </Link>
                  </div>
                </form>
              </div>
            )
          }
          {
            !!isSend === true && (
              <div className='w-full max-w-320 sm:w-320 mx-auto sm:mx-8 h-full bg-grey-50 rounded-md p-10 flex justify-end items-center'>
                <div className='flex flex-col pb-92'>
                  <div className='text-4xl font-semibold text-center mb-5'>Password Reset Link Sent</div>
                  <div className='text-16 leading-6 text-center pb-60'>A link has been sent to your email ID for resetting your password.</div>
                  <Link to='/login'>
                    <Button
                        variant="contained"
                        color="secondary"
                        className=" w-full mt-16 rounded-md"
                        aria-label="Confirm"
                        size="large"
                    >
                        Go To Login
                    </Button>
                  </Link>
                  
                </div>
              </div>
            )
          }
        </div>

        <Box
          className="relative hidden md:flex flex-auto items-end p-48 overflow-hidden bg-hero-login h-full w-full bg-no-repeat bg-cover" 
          style={{backgroundImage: `url(${require('src/images/Auth/Dark.jpg')})`}}
        >
          <div className="z-10 relative w-full max-w-2xl">
            <div className="leading-none text-white">
              <div className="text-32 font-normal tracking-wider mb-12">Welcome to</div>
              <div className="text-44 font-bold">Front Payment Go</div>
            </div>
            <div className="mt-24 text-lg tracking-tight text-gray-400 max-w-512 leading-6">
              Turpis nulla integer dui tempor mattis. Turpis semper in ante lacus sit interdum. Ut commodo donec dictum faucibus.
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default ForgotPasswordPage;
