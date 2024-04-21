import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [value, setValue] = useState(0);

  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button className={styles.btn} onClick={onClick}>
        Click
      </button>
    </div>
  );
};

export default Counter;
