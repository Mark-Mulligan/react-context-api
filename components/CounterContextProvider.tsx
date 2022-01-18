import { useState, createContext, FC } from 'react';

type CounterContextState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const counterDefaultValues: CounterContextState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

export const CounterContext = createContext<CounterContextState>(counterDefaultValues);

const CounterContextProvider: FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count: count, increment: incrementCount, decrement: decrementCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
