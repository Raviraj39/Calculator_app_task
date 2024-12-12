import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [history, setHistory] = useState(""); 
  const [total, setTotal] = useState(0); 

  
  const handleNumberClick = (num) => {
    setInput((prevInput) => prevInput + num);
    setHistory((prevHistory) => prevHistory + num);
  };


  const handleOperation = (operation) => {
    if (!input && !history) return; 
    if (operation === "add") {
      setHistory((prevHistory) => prevHistory + " + ");
    } else if (operation === "subtract") {
      setHistory((prevHistory) => prevHistory + " - ");
    }
    setInput(""); 
  };

  const handleTotal = () => {
    try {
      const result = eval(history); 
      setTotal(result);
      setHistory(result.toString()); 
      setInput(""); 
    } catch (error) {
      alert("Invalid operation");
    }
  };

  const handleClear = () => {
    setInput("");
    setHistory("");
    setTotal(0);
  };

  return (
    <div className="calculator bg-gray-300 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
  <h1 className="text-2xl font-bold text-center text-black mb-4">Calculator</h1>

  {/* Display Input Area */}
  <textarea
    rows="2"
    cols="20"
    value={history || input}
    readOnly
    placeholder="Enter number"
    className="w-full p-2 mb-4 text-lg border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>

  <div className="buttons grid grid-cols-3 gap-2 mb-4">
    <button
      onClick={() => handleNumberClick("1")}
      className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      1
    </button>
    <button
      onClick={() => handleNumberClick("2")}
      className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      2
    </button>
    <button
      onClick={() => handleNumberClick("3")}
      className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      3
    </button>
  </div>

  <div className="buttons flex justify-between mb-4">
    <button
      onClick={() => handleOperation("add")}
      className="bg-green-500 text-white p-3 rounded w-1/2 mx-1 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      +
    </button>
    <button
      onClick={() => handleOperation("subtract")}
      className="bg-red-500 text-white p-3 rounded w-1/2 mx-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      -
    </button>
  </div>

  {/* Total and Clear Buttons */}
  <div className="buttons flex justify-between mb-4">
    <button
      onClick={handleTotal}
      className="bg-yellow-500 text-white p-3 rounded w-1/2 mx-1 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      =
    </button>
    <button
      onClick={handleClear}
      className="bg-gray-500 text-white p-3 rounded w-1/2 mx-1 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      Clear
    </button>
  </div>

  {/* Display Total */}
  <div className="result text-center  ">
    <h2 className="text-xl font-semibold text-gray-700">Total: {total}</h2>
  </div>
</div>

  );
};

export default Calculator;
