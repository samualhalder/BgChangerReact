import React, { useState } from "react";
function Screan() {
  const [color, setcolor] = useState("white");

  return (
    <>
      <div>
        <div className="bg-indigo-700 p-1 justify-center text-center">
          <button
            className="bg-red-700 p-1 m-4 rounded-3xl h-auto w-14 hover:bg-red-400"
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-700 p-1 m-4 rounded-3xl h-auto w-14 hover:bg-green-400"
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-700 p-1 m-4 rounded-3xl h-auto w-14 hover:bg-blue-400"
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-yellow-400 p-1 m-4 rounded-3xl h-auto w-14 hover:bg-yellow-700"
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-violet-700 p-1 m-4 rounded-3xl h-auto w-14 hover:bg-violet-400"
            onClick={() => setcolor("violet")}
          >
            Violet
          </button>
          <button
            className="bg-white p-1 m-4 rounded-3xl h-auto w-14 hover:bg-gray-400"
            onClick={() => setcolor("white")}
          >
            White
          </button>
          <button
            className="bg-black text-white p-1 m-4 rounded-3xl h-auto w-14 hover:bg-gray-400"
            onClick={() => setcolor("black")}
          >
            Black
          </button>
        </div>
        <div
          className="h-[85vh] bg-red-400 justify-center text-center p-[42vh]"
          style={{ backgroundColor: color }}
        >
          {color == "black" ? (
            <h1 className="text-white  justify-center text-center mt-444">
              {color}
            </h1>
          ) : (
            <h1 className="text-black justify-center text-center">{color}</h1>
          )}
        </div>
        <div className="justify-center text-center"> © Samual Halder</div>
      </div>
    </>
  );
}

export default Screan;
