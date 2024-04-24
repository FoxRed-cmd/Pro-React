import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "shared/ui/Button/Button";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={cls.Counter}>
      <h1>{counterValue}</h1>
      <Button onClick={increment}>Count + 1</Button>
      <Button onClick={decrement}>Count - 1</Button>
    </div>
  );
};
