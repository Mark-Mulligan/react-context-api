import { useContext, FC } from 'react';
import CounterContextProvider, { CounterContext } from './CounterContextProvider';

const CounterDisplay: FC = () => {
  const { count } = useContext(CounterContext);

  return <div>{count}</div>;
};

export default CounterDisplay;
