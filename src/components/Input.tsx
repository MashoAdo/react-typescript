import { InputProps } from '../types/component-props';

function Input({ value, handleChange }: InputProps) {
  return <input type="text" value={value} onChange={handleChange} />;
}

export default Input;
