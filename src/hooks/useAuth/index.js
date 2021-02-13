import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../redux/reducers/auth';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const authStore = useSelector(
    (store) => ({
      user: store.auth.user,
      error: store.auth.error,
      fetching: store.auth.fetching,
    }),
    shallowEqual,
  );

  let history = useHistory();

  const dispatch = useDispatch();

  const logout = () => dispatch(authActions.logout(history));

  const login = (values) => dispatch(authActions.login(values, history));

  return {
    ...authStore,
    login,
    logout,
  };
};

export default useAuth;
