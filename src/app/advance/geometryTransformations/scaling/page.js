"use client"

import React, { useState, useRef, useEffect } from "react";
import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Scaling() {
  const [kx, setKx] = useState(1);
  const [ky, setKy] = useState(1);
  const [vec, setVec] = useState({ x: 1, y: 0 });
  const [animating, setAnimating] = useState(false);

  const rafRef = useRef(null);

  useEffect(() => {
    if (!animating) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }
    const loop = (t) => {
      const seconds = t / 1000;
      // oscillate scales between 0.5 and 1.5
      setKx(1 + 0.5 * Math.sin(seconds));
      setKy(1 + 0.5 * Math.cos(seconds));
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [animating]);

  const matrixNumeric = [[Number(kx.toFixed(6)), 0], [0, Number(ky.toFixed(6))]];

  const scaleVec = (m, v) => ({ x: m[0][0] * v.x + m[0][1] * v.y, y: m[1][0] * v.x + m[1][1] * v.y });

  const scaled = scaleVec(matrixNumeric, vec);

  const format = (n) => {
    if (Number.isInteger(n)) return n.toString();
    return Number(n).toFixed(3);
  };

  const size = 300;
  const center = size / 2;
  const scale = 60;

  return (
    <div className="grid items-center justify-items-center min-h-screen gap-4 p-4">
      <p>Scaling transforms change the size of objects by stretching or shrinking coordinates.</p>
      <p>We can represent scaling with a matrix:</p>
      <MatrixDisplayer matrix={[["kx", 0], [0, "ky"]]} />

      <div className="text-center">
        <h2 className="text-xl font-semibold">Scaling</h2>
        <p className="text-sm">Scale a vector using the scaling matrix</p>
      </div>

      <div className="flex gap-4 flex-col sm:flex-row items-center">
        <div className="space-y-2">
          <label>
            Scale X (kx)
            <input
              type="range"
              min={-3}
              max={3}
              step={0.1}
              value={kx}
              onChange={(e) => setKx(Number(e.target.value))}
            />
          </label>
          <label>
            kx:
            <input
              type="number"
              step="0.1"
              value={kx}
              onChange={(e) => setKx(Number(e.target.value))}
              className="ml-2 w-20"
            />
          </label>

          <label>
            Scale Y (ky)
            <input
              type="range"
              min={-3}
              max={3}
              step={0.1}
              value={ky}
              onChange={(e) => setKy(Number(e.target.value))}
            />
          </label>
          <label>
            ky:
            <input
              type="number"
              step="0.1"
              value={ky}
              onChange={(e) => setKy(Number(e.target.value))}
              className="ml-2 w-20"
            />
          </label>

          <div>
            <label>
              Vector x:
              <input
                type="number"
                step="0.1"
                value={vec.x}
                onChange={(e) => setVec((v) => ({ ...v, x: Number(e.target.value) }))}
                className="ml-2 w-20"
              />
            </label>
            <label className="ml-4">
              Vector y:
              <input
                type="number"
                step="0.1"
                value={vec.y}
                onChange={(e) => setVec((v) => ({ ...v, y: Number(e.target.value) }))}
                className="ml-2 w-20"
              />
            </label>
          </div>

          <div className="flex gap-2">
            <button onClick={() => setAnimating((a) => !a)} className="px-3 py-1 border">
              {animating ? "Stop" : "Animate"}
            </button>
            <button
              onClick={() => {
                setKx(1);
                setKy(1);
                setVec({ x: 1, y: 0 });
                setAnimating(false);
              }}
              className="px-3 py-1 border"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p>Symbolic scaling matrix:</p>
          <MatrixDisplayer matrix={[["kx", "0"], ["0", "ky"]]} />

          <p>Numeric scaling matrix:</p>
          <MatrixDisplayer
            matrix={[[format(matrixNumeric[0][0]), format(matrixNumeric[0][1])], [format(matrixNumeric[1][0]), format(matrixNumeric[1][1])]]}
          />

          <p>
            Original vector: [{format(vec.x)}, {format(vec.y)}] → Scaled: [{format(scaled.x)},{format(scaled.y)}]
          </p>
        </div>
      </div>

      <div>
        <svg width={size} height={size} className="border">
          <line x1={0} y1={center} x2={size} y2={center} stroke="#ddd" />
          <line x1={center} y1={0} x2={center} y2={size} stroke="#ddd" />

          <line
            x1={center}
            y1={center}
            x2={center + vec.x * scale}
            y2={center - vec.y * scale}
            stroke="#2563eb"
            strokeWidth={3}
            markerEnd="url(#arrow)"
          />

          <line
            x1={center}
            y1={center}
            x2={center + scaled.x * scale}
            y2={center - scaled.y * scale}
            stroke="#dc2626"
            strokeWidth={3}
            markerEnd="url(#arrow)"
          />

          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#000" />
            </marker>
          </defs>

          <text x={10} y={20} fontSize={12} fill="#2563eb">
            Original
          </text>
          <text x={10} y={36} fontSize={12} fill="#dc2626">
            Scaled
          </text>
        </svg>
      </div>
    </div>
  );
}
