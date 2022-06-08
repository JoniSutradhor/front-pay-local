import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - must be at least 8 chars.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function LoginPage() {
  const [isCode, setIsCode] = React.useState(false);
  console.log(isCode);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
    setIsCode(true)
  }
  const styles = theme => ({
    bigTextFieldInputProps: {
      paddingTop: '5px',
      fontSize: '3.5rem'

    },
  });
  //countdown timer minutes and seconds
  React.useEffect(() => {
    secondsToTime(120);
  }, [0]);

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    console.log(obj);
    return obj;
  };


  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32">
      <Paper className="flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-6xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden">
        <div className="w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 ltr:border-r-1 rtl:border-l-1">
          {
            !!isCode === false && (
              <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-8">
                <img className="w-auto h-full mx-auto max-h-64 mb-52" src='assets/images/logo/front-payment-go.png' alt="companylogo" loading='lazy' />
                <form
                  name="loginForm"
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

                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="Password"
                        type="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                    <Controller
                      name="remember"
                      control={control}
                      render={({ field }) => (
                        <FormControl>
                          <FormControlLabel
                            label="Remember Me"
                            control={<Checkbox size="small" {...field} />}
                          />
                        </FormControl>
                      )}
                    />

                    <Link className="text-md font-medium login-page-no-underline" to="/pages/auth/forgot-password">
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    variant="contained"
                    color="secondary"
                    className=" w-full mt-16 rounded-md"
                    aria-label="Sign in"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    type="submit"
                    size="large"
                  >
                    Login
                  </Button>
                  <div className="flex flex-col text-center justify-center items-center mt-32 mb-16 font-medium">
                    <div className='mb-4'>Don't have an account?</div>
                    <Link className="login-page-no-underline" to="/sign-up">
                      Register Now
                    </Link>
                  </div>

                  <div className="flex items-center mt-16 space-x-12">
                    <Button variant="outlined" className="flex-auto rounded-md text-13 font-500">
                      <FuseSvgIcon size={15} color="action">
                        feather:mail
                      </FuseSvgIcon>
                      <span className='ml-4'>Contact via Email</span>
                    </Button>
                    <Button variant="outlined" className="flex-auto rounded-md text-13 font-500">
                      <FuseSvgIcon size={15} color="action">
                        feather:phone
                      </FuseSvgIcon>
                      <span className='ml-4'>Call Now</span>
                    </Button>
                  </div>
                  <div className="flex items-center w-full mt-12">
                    <Button variant="outlined" className="flex-auto rounded-md text-13 font-500">
                      <FuseSvgIcon size={15} color="action">
                        feather:globe
                      </FuseSvgIcon>
                      <span className='ml-4'>Visit our website</span>
                    </Button>
                  </div>
                </form>
              </div>
            )
          }
          {
            !!isCode === true && (
              <div className='w-full max-w-320 sm:w-320 mx-auto sm:mx-8'>
                <div className='flex flex-col pb-92'>
                  <div className='text-6xl font-semibold text-center mb-5'>Security Code</div>
                  <div className='text-16 leading-6 text-center pb-60'>A 5 digit code was sent to your email. Please type the code to continue.</div>
                  <div className='flex gap-5'>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="login-custom-input"
                    />
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="login-custom-input"
                    />
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="login-custom-input"
                    />
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="login-custom-input"
                    />
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      variant="filled"
                      className="login-custom-input"
                    />
                  </div>
                  <div className='flex justify-between py-40 text-16 font-semibold'>
                    <div>
                      Time Remaining
                      <span className='font-normal'> 1:28</span>
                    </div>
                    <a href='/' className="cursor-pointer">Resend Code</a>
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className=" w-full mt-16 rounded-md"
                    aria-label="Confirm"
                    size="large"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            )
          }
        </div>

        <Box
          className="relative hidden md:flex flex-auto items-end justify-end h-full p-48 overflow-hidden"
          sx={{ backgroundColor: 'primary.main' }}
        >
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Box
              component="g"
              sx={{ color: 'primary.light' }}
              className="opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
            >
              <circle r="234" cx="790" cy="491" />
            </Box>
          </svg>
          <div className="z-10 relative w-full max-w-2xl">
            <div className="leading-none text-white">
              <div className="text-28 font-normal tracking-wider mb-12">Welcome to</div>
              <div className="text-7xl font-bold">Front Payment Go</div>
            </div>
            <div className="mt-24 text-16 text-lg tracking-tight leading-6 text-gray-400 w-400 leading-6">
              Turpis nulla integer dui tempor mattis. Turpis semper in ante lacus sit interdum. Ut commodo donec dictum faucibus.
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default LoginPage;
