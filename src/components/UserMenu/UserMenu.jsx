import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import { UserMenuWrapper, Btn, WelcomeMessage } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  console.log(user);

  return (
    <UserMenuWrapper>
      <WelcomeMessage>Welcome, {user}</WelcomeMessage>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </UserMenuWrapper>
  );
};
