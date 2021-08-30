import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const show = useSelector(state => state.counter.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(10));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
