import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

//Type Assertion, Initial state is an empty object which is asserted to be of type AuthUser
//This basically tells the ts compiler we are sure the state will always contain an object
//that will have the same properties as AuthUser type
//Thus there is no optional chaining needed when accessing user state properties unlike in /src/components/state/User.tsx
function User1() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => setUser({ name: 'polly', email: 'polly@g.com' });
  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User name is :{user.name}</div>
      <div>User email is :{user.email}</div>
    </div>
  );
}

export default User1;
