// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import css from './App.module.css';

import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { RegisterPage } from 'pages/Register';
import { LoginPage } from 'pages/Login';
import { ContactsPage } from 'pages/contacts';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoure';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <div className={css.container}>
    //   <h1 className={css.title}> Phonebook </h1>
    //   <ContactForm />
    //   <h2 className={css.subTitle}>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>

    isRefreshing ? (
      'Fetching user data...'
    ) : (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      </div>
    )
  );
};
