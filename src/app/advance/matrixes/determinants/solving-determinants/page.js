"use client"

import { useState } from "react";

export default function SolvingDetermiants() {
    const [equations, setEquations] = useState([[-8,24,-4,-28],[-3,9,-4,-18],[-3,9,-2,-12],[-16,48,-8,-56]])
    const [equationsChanged, setEquationsChanged] = useState([])
    
    function changeMatrix() {
      // Deep clone on init
      setEquationsChanged(equations.map(row => [...row]));
    }

  function setEquationValue(value, rowIndex, colIndex) {
    // Create a deep copy of the equations array
    var newEquations = equations.map(row => [...row]);
    newEquations[rowIndex][colIndex] = value;
    setEquations(newEquations);
  }

  function deleteColumn(columnIndex) {
    var updatedRquationList = [...equations];
    for(let i = 0; i < updatedRquationList.length; i++){
      updatedRquationList[i].splice(columnIndex, 1);
    }
    if(updatedRquationList[0].length == 0){
      updatedRquationList = [[0]]
    }
    setEquations(updatedRquationList);
  }

  function deleteRow(rowIndex) {
    var updatedRquationList = [...equations];
    updatedRquationList.splice(rowIndex, 1)
    if(updatedRquationList.length == 0){
      updatedRquationList = [[0]]
    }
    setEquations(updatedRquationList);
  }

  function addRow() {
    var updatedRquationList = [...equations];
    var newRow = [...updatedRquationList[0]]
    for(let i = 0; i < newRow.length; i++){
      newRow[i] = 0;
    }
    updatedRquationList.push(newRow)
    setEquations(updatedRquationList);
  }

  function addColumn() {
    var updatedRquationList = [...equations];
    for(let i = 0; i < updatedRquationList.length; i++){
      updatedRquationList[i].push(0);
    }
    setEquations(updatedRquationList);
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Create program to automatically solve determinants, espically for higher level matrixes</p>
      <table>
        <thead>
          <tr>
            {equations[0].map((_, colIndex) => (
              <th key={colIndex}>
                <button onClick={() => deleteColumn(colIndex)}>Delete column {colIndex + 1}</button>
              </th>
            ))}
            <th>
              {/* Empty header for the delete row button column */}
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={() => addRow()}>Add row</button>
            </th>
            <th>
              <button onClick={() => addColumn()}>Add Column</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {equations.map((equation, rowIndex) => (
            <tr key={rowIndex}>
              {equation.map((variable, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="number"
                    onChange={(e) => setEquationValue(Number(e.target.value), rowIndex, colIndex)}
                    value={equations[rowIndex][colIndex]}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => deleteRow(rowIndex)}>Delete row</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={changeMatrix}>Add your own matrix</button>
    </div>
  );
}
