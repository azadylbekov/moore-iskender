import { useState } from "react";
import styles from "./Counter.module.scss";
import icons from "@/icons/icons";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const plusCount = () => {
		setCount((prevCount) => prevCount + 1);
	}

	const minusCount = () => {
		if (count == 0) {
			return;
		}
		setCount((prevCount) => prevCount - 1);
	}

  return (
    <div className={styles.counter}>
      <button onClick={minusCount} className={styles.counterBtn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
            fill="black"
          />
        </svg>
      </button>
      <div className={styles.count}>{count}</div>
      <button onClick={plusCount} className={styles.counterBtn}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="black" />
        </svg>
      </button>
    </div>
  );
};
