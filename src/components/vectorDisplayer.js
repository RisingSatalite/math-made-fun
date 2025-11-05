export default function VectorDisplayer({ vector = [] }) {
  return (
    <span>
      <table>
        <tbody>
          {vector.map((value, i) => (
            <tr key={i}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </span>
  );
}

/*
Example input
[1,2,3]

Example output
<table>
<tbody>
<tr>1</tr>
<tr>2</tr>
<tr>3</tr>
</tbody>
</table>
In a table format
*/
