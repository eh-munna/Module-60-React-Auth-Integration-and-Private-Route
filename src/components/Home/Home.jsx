import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Home = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return <div>{/* <h2>{user && user.displayName}</h2> */}</div>;
};

export default Home;
