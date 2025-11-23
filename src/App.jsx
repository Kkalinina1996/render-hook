import React, { useState } from "react";
import ValueDisplay from "./components/valueDisplay";


function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <h1>Current and Previous Value</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder="Enter something..."
      />

      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
