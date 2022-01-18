import { useContext } from 'react';
import { CounterContext } from './CounterContextProvider';

const IncrementBtn = () => {
  const { increment } = useContext(CounterContext);

  return <button onClick={increment}>Increment</button>;
};

export default IncrementBtn;
