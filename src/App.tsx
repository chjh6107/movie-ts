import { useState } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState();
  return (
    <div>
      <h1>Super Converter test</h1>
      <label htmlFor="minutes">Minutes</label>
      <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={ e => {
          setMinutes(Number(e.target.value));
          console.log(e.target.value);
        }
      } />
      <h4>You want to convert {minutes}</h4>
      <label htmlFor="hours">Hours</label>
      <input value={hours} id="hours" placeholder="Hours" type="number" />
    </div>
  );
}

export default App;
