import { useState } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState();
  return (
    <div>
      <h1>Super Converter test</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={(e) => {
            setMinutes(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Number(minutes) / 60}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled
        />
      </div>
      <button onClick={() => {
        setMinutes(0);
      }}>
        Reset
      </button>
    </div>
  );
}

export default App;
