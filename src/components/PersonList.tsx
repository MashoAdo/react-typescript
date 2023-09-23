import { PersonListProps } from '../types/component-props';

function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((name_, index) => (
        <p key={index}>
          {name_.first} {name_.last}
        </p>
      ))}
    </div>
  );
}

export default PersonList;
