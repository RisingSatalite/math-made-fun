'use client'

import { useEffect, useState } from "react";

export default function LinearSystems() {
  const [equations, setEquations] = useState([[1,2,3],[4,5,6]])
  const [changeNumber, setDivid] = useState(1)
  const [selectedRow, setSelectedRow] = useState(0)
  const [elimationRow, setElimationRow] = useState(0)

  const [equationsChanged, setEquationsChanged] = useState(equations)

  useEffect(() => {
    if(changeNumber == 0){
      setDivid(1)
    }
  },[changeNumber])

  function multiply(rowNumber) {
    var newRow = [...equationsChanged[rowNumber]];
    for (let i = 0; i < newRow.length; i++) {
      newRow[i] = changeNumber * newRow[i];
    }
    var updatedRquationList = [...equationsChanged];
    updatedRquationList[rowNumber] = newRow;
    setEquationsChanged(updatedRquationList);
  }

  function divid(rowNumber) {
    var newRow = [...equationsChanged[rowNumber]];
    for (let i = 0; i < newRow.length; i++) {
      newRow[i] = newRow[i]/changeNumber;
    }
    var updatedRquationList = [...equationsChanged];
    updatedRquationList[rowNumber] = newRow;
    setEquationsChanged(updatedRquationList);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Linear Algebra</p>
      <p>Linear equations are any equation in the below formula</p>
      <p>a1x1 -- anxn = b</p>
      <p>Linear system are made out of multiple linear equations</p>
      <p>There are only 3 solution, Unique 1 solution, Infinite solutions and no solution</p>
      <p>Using elimation method take time, to make it simple, we can apply matrixes.</p>

      <input onChange={(e) => setDivid(Number(e.target.value))} type="number" placeholder="Number to multiple or divid by" className="border p-2 rounded w-64" />
      <span>{selectedRow}</span>
      <span>{elimationRow}</span>
      <table>
        <tbody>
          {equationsChanged.map((equation, rowIndex) => (
            <tr key={rowIndex}>
              <>
                {equation.map((variable, colIndex) => (
                  <th key={colIndex}>{variable}</th>
                ))}
                <td>
                  <button onClick={() => setSelectedRow(rowIndex)}>Select</button>
                </td>
                <td>
                  <button onClick={() => multiply(rowIndex)}>Multiply</button>
                </td>
                <td>
                  <button onClick={() => divid(rowIndex)}>Divid</button>
                </td>
                <td>
                  <button onClick={() => setElimationRow(rowIndex)}>Elimate</button>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
