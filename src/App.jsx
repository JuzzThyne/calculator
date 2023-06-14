import { useState } from "react";
import "./App.css";


function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-300 h-screen">
        <div className="w-80 h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 bg-slate-200">
        {/* <div className=" w-full md:w-1/2 lg:w-1/4 bg-slate-200"> */}
            <h1 className="flex justify-center items-center pt-2 pb-2">Calculator</h1>
            <div className="bg-gray-600 p-4 ">
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  className="col-span-4 md:col-span-4 bg-white border border-gray-300 p-2 text-right"
                />
                <button className="col-span-1 bg-gray-200 p-2">7</button>
                <button className="col-span-1 bg-gray-200 p-2">8</button>
                <button className="col-span-1 bg-gray-200 p-2">9</button>
                <button className="col-span-1 bg-gray-200 p-2">+</button>
                <button className="col-span-1 bg-gray-200 p-2">4</button>
                <button className="col-span-1 bg-gray-200 p-2">5</button>
                <button className="col-span-1 bg-gray-200 p-2">6</button>
                <button className="col-span-1 bg-gray-200 p-2">-</button>
                <button className="col-span-1 bg-gray-200 p-2">1</button>
                <button className="col-span-1 bg-gray-200 p-2">2</button>
                <button className="col-span-1 bg-gray-200 p-2">3</button>
                <button className="col-span-1 bg-gray-200 p-2">*</button>
                <button className="col-span-1 bg-gray-200 p-2">0</button>
                <button className="col-span-1 bg-gray-200 p-2">.</button>
                <button className="col-span-1 bg-gray-200 p-2">C</button>
                <button className="col-span-1 bg-gray-200 p-2">/</button>
                <button className="col-span-4 md:col-span-4 bg-blue-500 text-white p-2">
                  Calculate
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;