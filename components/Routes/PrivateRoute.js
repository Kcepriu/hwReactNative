import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
  navigate,
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? '' : Component;
};

return PrivateRoute;
