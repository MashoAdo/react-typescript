import { ButtonProps } from '../types/component-props';

function Button({ handleClick }: ButtonProps) {
  return <button onClick={handleClick}>Button</button>;
}

export default Button;
