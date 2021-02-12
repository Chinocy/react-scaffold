import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/user';
import { useHistory } from 'react-router-dom';

const useUser = () => {
  const userStore = useSelector(
    (store) => ({
      user: store.user.user,
      error: store.user.error,
      fetching: store.user.fetching,
    }),
    shallowEqual,
  );

  let history = useHistory();

  const dispatch = useDispatch();

  const logout = () => dispatch(userActions.logout(history));

  const login = (values) => dispatch(userActions.login(values, history));

  return {
    ...userStore,
    login,
    logout,
  };
};

export default useUser;
