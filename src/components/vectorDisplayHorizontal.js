export default function VectorDisplayerHorizontal({ vector = [] }) {
  return (
    <span>
      <table>
        <tbody>
          <tr>
            <td>&lt;</td>
            {vector.map((value) => (
                <td>{value}</td>
            ))}
            <td>&gt;</td>
          </tr>
        </tbody>
      </table>
    </span>
  );
}
