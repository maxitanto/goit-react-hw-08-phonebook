import { useAuth } from 'hooks/useAuth';
// import { NavLink } from 'react-router-dom';
import { NavContact, NavMenu } from './Navigation.style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavMenu to="/">Home</NavMenu>
      <NavContact>
        {isLoggedIn && <NavMenu to="/contacts">Contacts</NavMenu>}
      </NavContact>
    </nav>
  );
};
