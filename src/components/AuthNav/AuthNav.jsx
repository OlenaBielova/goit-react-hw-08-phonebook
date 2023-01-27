import { NavLink } from 'react-router-dom';
import { AuthNavWrapper, Link } from './AuthNav';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthNavWrapper>
  );
};
