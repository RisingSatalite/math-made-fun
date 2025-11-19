'use client'
import { useEffect, useState } from "react";
import VectorDisplayerHorizontal from "./vectorDisplayHorizontal";

export default function Get_Vector({ sendDataToParent }) {
  const [vector, setVector] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if(sendDataToParent){
        sendDataToParent("Hello from child!");
    }
  },[vector])

  function parseAndSet(e) {
    e?.preventDefault?.();
    const parts = input.split(",").map((s) => s.trim()).filter((s) => s !== "");
    const nums = parts.map((p) => Number(p)).filter((n) => !Number.isNaN(n));

    if (parts.length > 0 && nums.length === 0) {
      setError("No valid numbers found. Use comma-separated numbers, e.g. 1, 2, 3");
      setVector([]);
      return;
    }

    setError("");
    setVector(nums);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-6">
      <h2 className="text-2xl font-semibold">Vector Input</h2>

      <form onSubmit={parseAndSet} className="flex flex-col items-center gap-4 w-full max-w-lg">
        <input
          className="w-full px-3 py-2 border rounded shadow-sm"
          placeholder="Enter vector as comma-separated numbers, e.g. 1, 2, 3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Set vector
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-900"
            onClick={() => {
              setInput("");
              setVector([]);
              setError("");
            }}
          >
            Clear
          </button>
        </div>

        {error && <div className="text-red-600">{error}</div>}
      </form>

      <div className="w-full max-w-xs">
        <VectorDisplayerHorizontal vector={vector} />
      </div>
    </div>
  );
}