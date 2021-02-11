import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/user';

function useUser() {
  const userStore = useSelector(
    (store) => ({
      user: store.user.user,
      error: store.user.error,
      fetching: store.user.fetching,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const logout = () => dispatch(userActions.logout());

  const login = (username, password, onSuccess) =>
    dispatch(userActions.login(username, password, onSuccess));

  return {
    ...userStore,
    login,
    logout,
  };
}

export default useUser;
