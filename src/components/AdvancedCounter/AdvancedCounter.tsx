//Import React's useState and useEffect hook for state management
import { useEffect, useState } from "react";
//Import heroicons/tailwind for up arrow icon and down arrow icon
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

//Define a functional component named AdvancedCounter
export const AdvancedCounter = () => {
  //Initialize state variable 'count' with default value 0
  //and 'setCount' function to update the state
  const [count, setCount] = useState(0);
  //
  const [history, setHistory] = useState<number[]>([0]);

  //update history every time count changes
  useEffect(() => {
    //only update if its a new value
    if (history[history.length - 1] !== count) {
      setHistory((prevHistory) => [...prevHistory, count]);
    }
  }, [count]);
  return (
    //Main container with styling classes
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto ring-1 ring-gray-300 mt-10">
      <div className="flex flex-col items-center">
        {/* Counter title */}
        <h2 className="text-lg mb-6">Counter</h2>
        {/* Display current count value */}
        <h3 className="text-2xl mb-10 font-light">Current Count: {count}</h3>

        {/* Button container with flex layout */}
        <div className="flex gap-4">
          {/* Increment button - increases count by 1 */}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            {" "}
            <ArrowUpIcon className="w-6 h-3" />
            Increment
          </button>

          {/* Decrement button - decreases count by 1 */}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => setCount((count) => count - 1)}
          >
            <ArrowDownIcon className="w-6 h-3" />
            Decrement
          </button>

          {/* Reset button - sets count back to 0 */}
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
        <div className="mt-6 text-left">
          <h4 className="text-lg text-gray-700">
            {/* keep track of all counts*/}
            Count History:
          </h4>
          <div className="space-y-1">
            {history.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
