import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, UserText } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <UserText>Welcome, {user.name} </UserText>
      <p>{user.email}</p>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};
