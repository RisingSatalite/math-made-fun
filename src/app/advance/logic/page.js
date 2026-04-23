export default function Logic() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h1>Logic</h1>
      <h2>Symbols</h2>
      <p>∧ and, is when we take 2 input, and only output true if both inputs are true, if eithor one is false, then output is false</p>
      <p>∨ or: is when we take 2 inputs, and input true if eithor of the 2 inputs are true, otherwise false if both are false</p>
      <p>¬, not: to represent not or the opposite, if given true, return false and vice versa</p>
      <h2>Negation of a statement</h2>
      <p>To negate a statement you need to reverse the symbols</p>
      <table>
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Negation</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td>A</td>
                    <td>¬A</td>
                </tr>
                <tr>
                    <td>A ∧ B</td>
                    <td>¬A ∨ ¬B</td>
                </tr>
                <tr>
                    <td>A ∨ B</td>
                    <td>¬A ∧ ¬B</td>
                </tr>
            </tbody>
        </table>

    </div>
  );
}
