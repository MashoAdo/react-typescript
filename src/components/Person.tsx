import { PersonProps } from '../types/component-props';

function Person({ name }: PersonProps) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
