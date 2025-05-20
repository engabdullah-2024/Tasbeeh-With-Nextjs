"use client"; // Must be first line

import React, { useState } from "react";
import Header from "./Header/page";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
<Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Tasbeeh Counter</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">{count}</h2>
        <div className="flex justify-between mb-4">
          <button
            onClick={increment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
            Decrement
          </button>
        </div>
        <button
          onClick={reset}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
          Reset
        </button>
      </div>
    </div>
          </div>
  );
};

export default Counter;
