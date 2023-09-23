import { StatusProps } from '../types/component-props';

function Status({ status }: StatusProps) {
  let statusText;

  if (status === 'loading') statusText = 'Loading...';
  if (status === 'success') statusText = 'Data fetched successfully!';
  if (status === 'error') statusText = 'Error fetching data';

  return (
    <div>
      <h2>Status - {statusText}</h2>
    </div>
  );
}

export default Status;
