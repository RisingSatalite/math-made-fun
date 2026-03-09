export default function SetThoery() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h1>Set Theory</h1>
      <p>It close to the core of mathematics.</p>
      <p>It is the idea that we can create groups or collections of objects to represent them</p>
      <p>These collection may include them directly, or include other collections, or a mix of both.</p>
      <p>To describe certain common useful groups of number, set theory uses</p>
      <table>
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>N</td>
          <td>Natural Numbers</td>
          <td>Positive counting numbers</td>
          <td>1, 2, 3, ...</td>
        </tr>
        <tr>
          <td>Z</td>
          <td>Integers</td>
          <td>All whole numbers, positive and negative</td>
          <td>-3, 0, 12</td>
        </tr>
        <tr>
          <td>Q</td>
          <td>Rational Numbers</td>
          <td>Numbers that can be written as fractions</td>
          <td>1/2, -3/4, 5</td>
        </tr>
        <tr>
          <td>R</td>
          <td>Real Numbers</td>
          <td>All rational and irrational numbers</td>
          <td>√2, π, -1, 0, 2.5</td>
        </tr>
        <tr>
          <td>C</td>
          <td>Complex Numbers</td>
          <td>Numbers with real and imaginary parts</td>
          <td>2+3i, -i, 0</td>
        </tr>
        <tr>
          <td>I</td>
          <td>Irrational Numbers</td>
          <td>Numbers that can not be written as a fraction, mostly infinitely repreating arbitary numbers</td>
          <td>√2, e, π</td>
        </tr>
        </tbody>
        </table>
        <h3>Difference type of number also have their own groups</h3>
        <table>
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>P</td>
          <td>Prime Numbers</td>
          <td>Numbers divisible only by 1 and itself</td>
          <td>2, 3, 5, 7, 11</td>
        </tr>
        <tr>
          <td>E</td>
          <td>Even Numbers</td>
          <td>Integers divisible by 2</td>
          <td>...-4, -2, 0, 2, 4...</td>
        </tr>
        <tr>
          <td>O</td>
          <td>Odd Numbers</td>
          <td>Integers not divisible by 2</td>
          <td>...-3, -1, 1, 3...</td>
        </tr>
        </tbody>
        </table>
        <h3>Additional, here are some useful Symbols are used to discribe relationship of collections</h3>
        <table>
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>∅</td>
          <td>Empty Set</td>
          <td>Set with no elements</td>
          <td>None</td>
        </tr>
        <tr>
          <td>U</td>
          <td>Universal Set</td>
          <td>All elements under consideration</td>
          <td>Depends on context</td>
        </tr>
        <tr>
          <td>A ∪ B</td>
          <td>Union</td>
          <td>All elements in A or B</td>
          <td>{'{'+'1,2'+'} ∪ {'+'2,3'+'} = {'+'1,2,3'+'}'}</td>
        </tr>
        <tr>
          <td>A ∩ B</td>
          <td>Intersection</td>
          <td>Elements in both A and B</td>
          <td>{'{'+'1,2'+'} ∩ {'+'2,3'+'} = {'+'2'+'}'}</td>
        </tr>
        <tr>
          <td>A \ B</td>
          <td>Difference</td>
          <td>Elements in A not in B</td>
          <td>{'{'+'1,2,3'+'} \\ {'+'2,3'+'} = {'+'1'+'}'}</td>
        </tr>
        <tr>
          <td>A<sup>c</sup></td>
          <td>Complement</td>
          <td>Elements not in A</td>
          <td>U \ A</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
