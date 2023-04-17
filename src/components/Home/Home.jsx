import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Home = () => {
  const userss = useContext(AuthContext);
  return (
    <div>
      <h2>{userss && userss.displayName}</h2>
    </div>
  );
};

export default Home;
