export default function __Default__() {
    const [equations, setEquations] = useState([[-8,24,-4,-28],[-3,9,-4,-18],[-3,9,-2,-12],[-16,48,-8,-56]])
    
    function changeMatrix() {
    // Deep clone on init
    setEquationsChanged(equations.map(row => [...row]));
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
