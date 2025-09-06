'use client'

import { useEffect, useState } from "react";

export default function LinearSystems() {
  const [equations, setEquations] = useState([[1,2,3],[4,5,6]])
  const [divid, setDivid] = useState(1)
  const [selectedRow, setSelectedRow] = useEffect(0)
  const [elimationRow, setElimationRow] = useEffect(0)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Linear Algebra</p>
      <p>Linear equations are any equation in the below formula</p>
      <p>a1x1 -- anxn = b</p>
      <p>Linear system are made out of multiple linear equations</p>
      <p>There are only 3 solution, Unique 1 solution, Infinite solutions and no solution</p>
      <p>Using elimation method take time, to make it simple, we can apply matrixes.</p>

      <input onChange={(e) => setDivid(Number(e.target.value))} type="number" placeholder="Number to multiple or divid by" className="border p-2 rounded w-64" />
      <table>
        <tbody>
          {equations.map((equation, rowIndex) => (
            <tr key={rowIndex}>
              {equation.map((variable, colIndex) => (
                <th key={colIndex}>{variable}</th>
              ))}
              <button>Select</button>
              <button>Divid</button>
              <button>Elimate</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
