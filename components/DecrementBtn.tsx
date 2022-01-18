import { useContext } from 'react';
import { CounterContext } from './CounterContextProvider';

const DecrementBtn = () => {
  const { decrement } = useContext(CounterContext);

  return <button onClick={decrement}>Decrement</button>;
};

export default DecrementBtn;
