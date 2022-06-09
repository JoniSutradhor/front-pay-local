import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import * as yup from "yup";
import _ from "@lodash";
import { Paper, Grid, Card, CardContent, CardHeader } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Box } from "@mui/system";
import '../../../styles/colors.css'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required("You must enter your name"),
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  acceptTermsConditions: yup
    .boolean()
    .oneOf([true], "The terms and conditions must be accepted."),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  acceptTermsConditions: false,
};

function ClassicSignUpPage() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }


  return (
    // <div className="flex flex-col flex-auto sm:justify-center min-w-0">
    //   <Paper className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
    //     <h1>Registration</h1>
    //     <p className='bg-grey-100 py-4 pl-16 pr-8'>Company Information</p>
    //     <div className='flex justify-around'>
    //       <TextField label="Outlined" variant="outlined" />
    //       <TextField label="Outlined" variant="outlined" />
    //     </div>
    //   </Paper>
    // </div>
    <div>
      <Paper className="py-40 pl-48 pr-20 mx-64 my-48">
        <Grid container>
          <Grid item md={9} className="pr-24">
            <h1>Registration</h1>
            <Typography className="bg-gray-100 py-8 pl-8 my-16">
              Company Information
            </Typography>
            <form
              name="registerForm"
              noValidate
              className=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container>
                <Grid item md={4} className="pr-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="ORGANIZATION ID"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item md={6} className="pl-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="COMPANY NAME"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} className="pr-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="ORGANIZATION TYPE"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Typography className="bg-gray-100 py-8 pl-8 my-16">
                User Information
              </Typography>
              <Grid container>
                <Grid item md={6} className="pr-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="FULL NAME"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item md={4} className="pl-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="PHONE NO."
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} className="pr-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="EMAIL"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item md={6} className="pl-10">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="DESIGNATION"
                        autoFocus
                        type="name"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} className="pr-10">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mb-24"
                        label="TYPE YOUR PASSWORD"
                        type="password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        variant="outlined"
                        required
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Controller
                name="acceptTermsConditions"
                control={control}
                render={({ field }) => (
                  <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                    <FormControlLabel
                      label={<p>I accept the <span className="text-primary-500">Terms & Conditions</span> of Front Payment Go.</p>}
                      control={<Checkbox size="small" {...field} />}
                    />
                    <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
                  </FormControl>
                )}
              />
              <Grid container className="mt-20">
                <Grid item md={5}></Grid>
                <Grid item md={7} className="space-x-12">
                  <Button variant="outlined"
                    type="submit"
                    size="large"
                    className="flex-auto rounded-md text-13 font-500 px-64"
                    color="secondary"
                  >
                    Back To Login
                  </Button>
                  <Button variant="contained"
                    type="submit"
                    size="large"
                    className="flex-auto rounded-md text-13 font-500 px-64"
                    color="secondary"
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item md={3} className="w-full px-8">
            <Card sx={{ boxShadow: 1, borderRadius: '0' }}>
              <CardHeader
                sx={{ backgroundColor: '#F2FAFD' }}
                title={
                  <Typography >
                    How much does it cost?
                  </Typography>
                }
              />
              <CardContent >
                <Typography>
                  Arcu ultrices vel ullamcorper ipsum vitae in in massa. Habitasse quisque amet, metus, donec risus, molestie ipsum, sed tristique. Egestas vitae dignissim lectus mauris. Facilisis non ante id nisl amet, nunc. Quis felis nisi, dignissim lacus, consectetur egestas id lectus nunc. Malesuada elementum maecenas scelerisque porttitor purus diam condimentum pretium neque. Consequat nunc pulvinar neque, velit facilisis quam mi vel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ClassicSignUpPage;
