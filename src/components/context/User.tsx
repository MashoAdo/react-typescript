import { useContext } from 'react';
import { UserContext } from './UserProvider';

const UserCtx = () => {
  const { setUser, user } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      name: 'naipa',
      email: 'n@g.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default UserCtx;
