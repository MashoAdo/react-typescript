import React, { useReducer } from 'react';

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'Increase' | 'Decrease';
  payload: number;
};

type ResetAction = {
  type: 'Reset';
};

// Discriminated unions
type CounterAction = UpdateAction | ResetAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'Increase':
      return { count: state.count + action.payload };
    case 'Decrease':
      return { count: state.count - action.payload };
    case 'Reset':
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'Increase', payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'Decrease', payload: 1 })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
