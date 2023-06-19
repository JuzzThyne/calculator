import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleClick = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue); // eslint-disable-line no-eval
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-slate-300 h-screen">
        <div className="w-80 h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 bg-slate-200">
          {/* <div className=" w-full md:w-1/2 lg:w-1/4 bg-slate-200"> */}
          <h1 className="flex justify-center items-center pt-2 pb-2">
            Calculator
          </h1>
          <div className="bg-gray-200 p-4 ">
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <input type="text" 
              value={displayValue} 
              readOnly
              class="input input-bordered input-info w-full max-w-xs col-span-4 md:col-span-4 p-2 text-right" 
              />
              <button onClick={ () => handleClick('7')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">7</button>
              <button onClick={() => handleClick('8')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">8</button>
              <button onClick={() => handleClick('9')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">9</button>
              <button onClick={() => handleClick('+')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">+</button>
              <button onClick={() => handleClick('4')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">4</button>
              <button onClick={() => handleClick('5')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">5</button>
              <button onClick={() => handleClick('6')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">6</button>
              <button onClick={() => handleClick('-')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">-</button>
              <button onClick={() => handleClick('1')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">1</button>
              <button onClick={() => handleClick('2')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">2</button>
              <button onClick={() => handleClick('3')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">3</button>
              <button onClick={() => handleClick('*')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">*</button>
              <button onClick={() => handleClick('0')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">0</button>
              <button onClick={() => handleClick('.')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">.</button>
              <button onClick={handleClear} className="btn btn-ghost col-span-1 bg-gray-200 p-2">C</button>
              <button onClick={() => handleClick('/')} className="btn btn-ghost col-span-1 bg-gray-200 p-2">/</button>
              <button onClick={calculateResult} className="col-span-4 md:col-span-4 bg-blue-500 text-white p-2">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
