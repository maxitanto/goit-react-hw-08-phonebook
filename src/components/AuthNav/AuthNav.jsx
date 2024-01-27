import { NavMenu } from 'components/Navigation/Navigation.style';
import { NavAuth } from './AuthNav.style';

export const AuthNav = () => {
  return (
    <div>
      <NavMenu to="/register">Register</NavMenu>
      <NavAuth>
        <NavMenu to="/login">Log In</NavMenu>
      </NavAuth>
    </div>
  );
};
