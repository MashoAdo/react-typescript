import { useState } from 'react';

//Typescript infers the type of the state from the initial value
function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
    </div>
  );
}

export default LoggedIn;
