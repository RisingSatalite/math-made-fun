'use client';

import { useState, useMemo } from "react";
import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Shear() {
  // State for shear factor, direction, and point
  const [k, setK] = useState(1);
  const [direction, setDirection] = useState("x"); // "x" or "y"
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);

  // Compute numeric shear matrix
  const numericShearMatrix = useMemo(() => {
    const kv = Number(k) || 0;
    if (direction === "x") {
      return [
        [1, kv],
        [0, 1],
      ];
    } else {
      return [
        [1, 0],
        [kv, 1],
      ];
    }
  }, [k, direction]);

  // Multiply matrix by vector [a, b]
  const shearedPoint = useMemo(() => {
    const m = numericShearMatrix;
    const av = Number(a) || 0;
    const bv = Number(b) || 0;
    const x = m[0][0] * av + m[0][1] * bv;
    const y = m[1][0] * av + m[1][1] * bv;
    const format = (n) => Number.parseFloat(n).toFixed(4);
    return [[format(x)], [format(y)]];
  }, [numericShearMatrix, a, b]);

  return (
    <div className="grid items-start justify-items-center min-h-screen gap-4 p-6">
      <h1 className="text-2xl font-semibold">Shearing using matrices</h1>

      <p>
        Shearing is a transformation that slants the shape of an object. It can be
        performed in the x-direction or y-direction using a 2×2 matrix.
      </p>

      <div className="space-y-2 w-full max-w-xl">
        <div className="flex gap-6 items-center">
          For an X-direction shear: multiplies by
          <MatrixDisplayer
            matrix={[[1, "k"], [0, 1]]}
            className="inline-block ml-2"
          />
          </div>
        <div className="ml-4 text-sm flex gap-6 items-center">
            Ex)
            <MatrixDisplayer matrix={[[1, "k"], [0, 1]]} /> *{" "}
            <MatrixDisplayer matrix={[["a"], ["b"]]} /> ={" "}
            <MatrixDisplayer matrix={[[`a + k·b`], ["b"]]} />        
        </div>
        <div className="flex gap-6 items-center">
          For an Y-direction shear: multiplies by
          <MatrixDisplayer
            matrix={[[1, 0], ["k", 1]]}
            className="inline-block ml-2"
          />
        </div>
        <div className="ml-4 text-sm flex gap-6 items-center">

            <MatrixDisplayer matrix={[[1, 0], ["k", 1]]} /> *{" "}
            <MatrixDisplayer matrix={[["a"], ["b"]]} /> ={" "}
            <MatrixDisplayer matrix={[[`a`], ["k·a + b"]]} />
        </div>
        <p>
          <b>k</b> is the shear factor. The formula you use depends on whether
          you want to shear in the x or y direction.
        </p>
      </div>

      <hr className="w-full" />

      {/* Interactive section */}
      <div className="w-full max-w-xl space-y-2">
        <div className="flex gap-4 items-center">
          <label>
            Shear direction:
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="ml-2 border rounded px-2"
            >
              <option value="x">x-direction</option>
              <option value="y">y-direction</option>
            </select>
          </label>
          <label>
            Shear factor k:
            <input
              type="number"
              step="any"
              value={k}
              onChange={(e) => setK(e.target.value)}
              className="ml-2 border rounded px-2"
            />
          </label>
          <label>
            Point x (a):
            <input
              type="number"
              step="any"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="ml-2 border rounded px-2"
            />
          </label>
          <label>
            Point y (b):
            <input
              type="number"
              step="any"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="ml-2 border rounded px-2"
            />
          </label>
        </div>

        <div className="flex gap-6 items-center">
          <div>
            <p className="text-sm">Numeric shear matrix:</p>
            <MatrixDisplayer matrix={numericShearMatrix} />
          </div>
          <div>
            <p className="text-sm">Point before:</p>
            <MatrixDisplayer matrix={[[a], [b]]} />
          </div>
          <div>
            <p className="text-sm">Sheared point:</p>
            <MatrixDisplayer matrix={shearedPoint} />
          </div>
        </div>
      </div>
    </div>
  );
}
