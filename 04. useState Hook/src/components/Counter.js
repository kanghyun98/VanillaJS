import { useState } from '../core/myReact.js';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countDouble, setCountDouble] = useState(0);

  const changeCount = (newCount) => {
    setCount(newCount);
    setCountDouble(newCount * 2);
  };

  window.increment = () => changeCount(count + 1);
  window.decrement = () => changeCount(count - 1);

  return `
    <div>
      <p>count1: ${count}, count2: ${countDouble}</p>
      <button onclick="increment()">+</button>
      <button onclick="decrement()">-</button>
    </div>
  `;
};

export default Counter;
