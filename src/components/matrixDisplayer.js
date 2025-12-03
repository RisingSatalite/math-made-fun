export default function MatrixDisplayer({matrix}) {
  return (
    <span>
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
    </span>
  );
}
