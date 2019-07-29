import { hot } from "react-hot-loader/root";
import React, { useState } from "react";

function App() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`You clicked ${count} times !`}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default hot(App);
