import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Home } from '../pages/Home';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Home />} />

        <Route />
      </Route>
    </Routes>
  );
};
