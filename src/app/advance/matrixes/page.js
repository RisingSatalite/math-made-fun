'use client'

import { useEffect, useState } from "react";

export default function LinearSystems() {
  //[[1,2,3],[4,5,6]]
  //[[1,3,6,25],[2,7,14,58],[0,2,5,19]]
  //[[2,3,5,1,4,3],[-7,6,-2,5,-8,-1],[3,1,2,-2,7,-6],[5,3,1,-5,-1,2]]
  const [equations, setEquations] = useState([[-8,24,-4,-28],[-3,9,-4,-18],[-3,9,-2,-12],[-16,48,-8,-56]])
  const [changeNumber, setDivid] = useState(1)
  const [dividType, setDividType] = useState(true)
  const [selectedRow, setSelectedRow] = useState(0)
  const [elimationRow, setElimationRow] = useState(0)

  // Deep clone on init
  const [equationsChanged, setEquationsChanged] = useState(
    equations.map(row => [...row])
  );
  useEffect(() => {
    if(changeNumber == 0){
      if(dividType){
        setDividType(false)
        setDivid(-1)
      }
      if(!dividType){
        setDividType(true)
        setDivid(1)
      }
    }else if(changeNumber > 0) {
      setDividType(true)//For positive
    }else{
      setDividType(false)//For negative
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
    //Add check if doing so will turn into a fraction, should be issue but may want to prevent
    var updatedRquationList = [...equationsChanged];
    updatedRquationList[rowNumber] = newRow;
    setEquationsChanged(updatedRquationList);
  }

  function swapRow(row1, row2=selectedRow) {
    var updatedRquationList = [...equationsChanged];
    var oldRow1 = updatedRquationList[row1]
    var oldRow2 = updatedRquationList[row2]
    updatedRquationList[row1] = oldRow2
    updatedRquationList[row2] = oldRow1
    setEquationsChanged(updatedRquationList);
  }

  function elimateRow(changeRow, fromRow=selectedRow, byAbout=changeNumber) {
    if(selectedRow === elimationRow){
      //return//This is not working
    }
    var newRow = [...equationsChanged[changeRow]];
    for (let i = 0; i < newRow.length; i++) {
      newRow[i] = (newRow[i] + (byAbout * equationsChanged[fromRow][i]));
    }
    var updatedRquationList = [...equationsChanged];
    updatedRquationList[changeRow] = newRow;
    setEquationsChanged(updatedRquationList);
  }

  function setEquationValue(value, rowIndex, colIndex) {
    // Create a deep copy of the equations array
    var newEquations = equations.map(row => [...row]);
    newEquations[rowIndex][colIndex] = value;
    setEquations(newEquations);
  }

  function changeMatrix() {
    // Deep clone on init
    setEquationsChanged(equations.map(row => [...row]));
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
      <p>Linear Algebra</p>
      <p>Linear equations are any equation in the below formula</p>
      <p>a1x1 -- anxn = b</p>
      <p>Linear system are made out of multiple linear equations</p>
      <p>There are only 3 solution, Unique 1 solution, Infinite solutions and no solution</p>
      <p>Using elimation method take time, to make it simple, we can apply matrixes.</p>

      <input onChange={(e) => setDivid(Number(e.target.value))} type="number" placeholder="Number to multiple or divid by" className="border p-2 rounded w-64" value={changeNumber}/>
      <table>
        <tbody>
          {equationsChanged.map((equation, rowIndex) => (
            <tr key={rowIndex}>
              <>
                {rowIndex === selectedRow ? (
                  <p>Select</p>
                ) : (
                  <p> </p>
                )}
                {equation.map((variable, colIndex) => (
                  <th key={colIndex}>{variable}</th>
                ))}
                <td>
                  <button onClick={() => multiply(rowIndex)}>Multiply</button>
                </td>
                <td>
                  <button onClick={() => divid(rowIndex)}>Divid</button>
                </td>
                <td>
                  <button onClick={() => setSelectedRow(rowIndex)}>Select</button>
                </td>
                <td>
                  <button onClick={() => swapRow(rowIndex)}>Swap</button>
                </td>
                <td>
                  <button onClick={() => elimateRow(rowIndex)}>Elimate</button>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Try solving your matrix instead</h3>
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
