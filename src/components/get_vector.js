'use client'
import { useState } from "react";
import VectorDisplayer from "./vectorDisplayer";

export default function Get_Vector() {
  const [vector, setVector] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
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
        <VectorDisplayer vector={vector} />
      </div>
    </div>
  );
}