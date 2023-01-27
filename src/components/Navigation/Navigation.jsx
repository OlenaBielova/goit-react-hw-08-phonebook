import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
console.log(isLoggedIn);
  return (
    <Nav>
      <Link to="/">
        Home
      </Link>
      {isLoggedIn && 
        <Link to="/contacts">
          Contacts
        </Link>
      }
    </Nav>
  );
};