export default function MatrixDisplayer({matrix}) {
  return (
    <div>
      <table>
        <tbody>
          {matrix.map((equation, rowIndex) => (
            <tr key={rowIndex}>
              <>
                {equation.map((variable, colIndex) => (
                  <th key={colIndex}>{variable}</th>
                ))}
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
