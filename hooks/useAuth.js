import { useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsRefresing,
  selectUser,
  selectIsError,
  selectTextError,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const isRefresing = useSelector(selectIsRefresing);
  const user = useSelector(selectUser);
  const isError = useSelector(selectIsError);
  const textError = useSelector(selectTextError);

  return { isAuth, isRefresing, user, isError, textError };
};

export default useAuth;
