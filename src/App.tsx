import { useState } from "react";

function App() {
  const [number] = useState(0);

  // function increaseNumber() {
  //   setNumber(number + 1);
  // }

  return (
    <div className="App">
      Hello world!

      <button>
        Current Number is: {number}
      </button>
    </div>
  );
}

export default App;