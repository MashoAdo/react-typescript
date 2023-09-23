import { GreetProps } from '../types/component-props';

function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name},you have {messageCount} unread messages?
        </h2>
      ) : (
        'Welcome User'
      )}
    </div>
  );
}

export default Greet;
