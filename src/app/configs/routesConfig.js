import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/Auth/login/LoginConfig';
import SignUpConfig from '../main/Auth/sign-up/SignUpConfig';
import SignOutConfig from '../main/Auth/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import ExampleConfig from '../main/example/ExampleConfig';
import ForgotPasswordConfig from '../main/Auth/forgotPassword/ForgotPasswordConfig';
import ResetPasswordConfig from '../main/Auth/resetPassword/ResetPasswordConfig';

const routeConfigs = [ExampleConfig, SignOutConfig, SignInConfig, SignUpConfig , ForgotPasswordConfig , ResetPasswordConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/example" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
