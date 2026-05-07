import LinearEquationSolver from '@/components/linearEquationSolver'

export default function LinearEquationsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Linear Equations</h1>
      <p>A linear equation is a straight line that forms on a xy graph.</p>
      <p>Here are the 3 main types of equations</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Format</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General Form</td>
            <td>Ax+By+C=0</td>
            <td>2x+5y+3=0</td>
          </tr>
          <tr>
            <td>Vertex Form</td>
            <td>y-y<sub>1</sub>=m(x-x<sub>1</sub>)</td>
            <td>y-1=3(x-2)</td>
          </tr>
          <tr>
            <td>Slope Intercept Form</td>
            <td>y=mx+b</td>
            <td>y=5x+7</td>
          </tr>
        </tbody>
      </table>
      <p>m reprsent the slope of the line, how it moves as x changes</p>
      <p>To find the slope of a perpendicular to a line, use the fromula below</p>
      <p>-1/m</p>
      <p>Where m represnts the slope of the original line.</p>
      <p className="mb-6">Interactive solver and practice for solving single-variable linear equations. Enter an equation like <code>2x+3=7</code> and click Solve.</p>
      <LinearEquationSolver defaultEquation="2x+3=7" />
      <div className="mt-8 text-sm text-gray-600">Want more features? I can add quizzes, step-by-step hints, and graphing.</div>
    </div>
  )
}
