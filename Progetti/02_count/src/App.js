import { useState } from "react";

export default function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function aumentaCount() {
    if (step > 0) {
      setCount((curCount) => curCount + step);
    } else setCount((curCount) => curCount + 1);
  }

  function diminuisciCount() {
    if (step > 0) {
      setCount((curCount) => curCount - step);
    } else setCount((curCount) => curCount - 1);
  }

  function aumentaStep() {
    setStep((curStep) => curStep + 1);
  }

  function diminuisciStep() {
    setStep((curStep) => Math.max(0, curStep - 1));
  }

  return (
    <div className="main">
      <h1>Calcola i giorni</h1>
      <div>
        <button className="bottone" onClick={diminuisciStep}>
          -
        </button>
        <span>Step:{step}</span>
        <button className="bottone" onClick={aumentaStep}>
          +
        </button>
      </div>

      <div>
        <button className="bottone" onClick={diminuisciCount}>
          -
        </button>
        <span>Count:{count}</span>
        <button className="bottone" onClick={aumentaCount}>
          +
        </button>
      </div>
      <span>
        {count === 0
          ? "Oggi è"
          : count > 0
          ? `Fra ${count} giorni sarà `
          : `${count} giorni fa era `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
