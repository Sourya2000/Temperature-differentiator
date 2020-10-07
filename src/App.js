import React, { useState } from "react";


const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 60) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature > 20 && newTemperature <= 50) {
      setTemperatureColor("hot");
    }
    else if (newTemperature > 50){
      setTemperatureColor("lush");

  };
};

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if(newTemperature <= 50 && newTemperature >= 20 ){
      setTemperatureColor("hot");
    }
    else if (newTemperature < 20) {
      setTemperatureColor("cold");
    };
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
