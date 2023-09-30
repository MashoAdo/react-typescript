import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

//Explicit type definition and allowing multiple types e.g AuthUser | null type
//Typescript won't allow direct access of user properties without optional chaining...
//because user can be null
function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => setUser({ name: 'polly', email: 'polly@g.com' });
  const handleLogout = () => setUser(null);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>

      <div>User name is :{user?.name}</div>
      <div>User email is :{user?.email}</div>
    </div>
  );
}

export default User;
