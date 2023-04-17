import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  console.log(user);

  const hangleLogout = () => {
    userSignOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <nav>
      <div className="navbar bg-base-300 gap-6">
        <a className="btn btn-ghost normal-case text-xl">Logo</a>
        <Link to="/">Home</Link>
        {/* <Link to="/login">Login</Link> */}
        <Link to="/register">Register</Link>
        <Link to="/orders">Orders</Link>
        {user && <Link to="/profile">Profile</Link>}
        <Link to="/">
          {user ? (
            <>
              <span className="mr-3">{user.email}</span>{' '}
              <span>
                <button onClick={hangleLogout}>Logout</button>
              </span>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
