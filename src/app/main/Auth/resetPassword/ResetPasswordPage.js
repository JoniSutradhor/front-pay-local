import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * Form Validation Schema
 */
const schema = Yup.object().shape({
    password: Yup
        .string()
        .required('Please enter new your password.')
        .min(8, 'Password is too short - must be at least 8 chars.'),
    confirmpassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
});

const defaultValues = {
  password: '',
  confirmpassword: ''
};

function ForgotPasswordPage() {
  const [isSend, setIsSend] = React.useState(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState; 

  function onSubmit(values) {
    reset(defaultValues);
    setIsSend(true)
  }

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32">
      <Paper className="flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-7xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden h-3xl">
        <div className="w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 ltr:border-r-1 rtl:border-l-1">
          {
            !!isSend === false && (
              <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-8">
                    <div className='text-4xl font-semibold text-center mb-5'>Set New Password</div>
                    <div className='text-16 leading-6 text-center pb-7'>Your password must be between 8-15 digits and contain both numbers and alphabets.</div>
                <form
                  name="resetPassForm"
                  noValidate
                  className="flex flex-col justify-center w-full mt-48"
                  onSubmit={handleSubmit(onSubmit)}
                >
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
                    <Controller
                        name="confirmpassword"
                        control={control}
                        render={({ field }) => (
                        <TextField
                            {...field}
                            className="mb-24"
                            label="Confirm Password"
                            type="password"
                            error={!!errors.confirmpassword}
                            helperText={errors?.confirmpassword?.message}
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
                    Update Password
                  </Button>
                </form>
                <div className='mt-52'>
                    <div className="flex items-center mt-16 space-x-12">
                    <Button variant="outlined" className="flex-auto rounded-md text-13 font-500" href="mail:kundeservice@frontpayment.no">
                      <FuseSvgIcon size={15} color="action">
                        feather:mail
                      </FuseSvgIcon>
                      <span className='ml-4 text-black'>Contact via Email</span>
                    </Button>
                    <Button variant="outlined" className="flex-auto rounded-md text-13 font-500" href="tel:38809440">
                        <FuseSvgIcon size={15} color="action">
                            feather:phone
                        </FuseSvgIcon>
                        <span className='ml-4 text-black'>Call Now</span>
                    </Button>
                    </div>
                    <div className="flex items-center w-full mt-12">
                        <Button  variant="outlined" className="flex-auto rounded-md text-13 font-500" href='https://frontpayment.no/' target={'top'}>
                        <FuseSvgIcon size={15} color="action">
                            feather:globe
                        </FuseSvgIcon>
                        <span className='ml-4 text-black'>Visit our website</span>
                        </Button>
                    </div>
                </div>
            </div>
            )
          }
          {
            !!isSend === true && (
              <div className='w-full max-w-320 sm:w-320 mx-auto sm:mx-8 h-full bg-grey-50 rounded-md p-10 flex justify-end items-center'>
                <div className='flex flex-col pb-92'>
                  <div className='text-4xl font-semibold text-center mb-5'>Password updated successfully!</div>
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
