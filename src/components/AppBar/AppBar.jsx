import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavWrapper } from './AppBar.style';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <NavWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </header>
  );
};
