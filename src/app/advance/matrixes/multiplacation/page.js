import MatrixDisplayer from "@/components/matrixDisplayer";

export default function __Default__() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>To multiply matrix of A(m*n) with vector of X(n*1)</p>
      <p>The sizes of the matrixes have to be the same size</p>
      <p>THe number of column in the matrix has to be equal to the number of rows in the martix/vector</p>
      <MatrixDisplayer matrix={[[1,2,3],[-5,8,4]]}/>
      <MatrixDisplayer matrix={[[2],[10],[-1]]}/>
      <p>Multiplying a matrix by a column with a vector results in vector</p>
      <p>To multiply matrix by matrix, the 2 matrix need to be the compatible size of (m*p) and (q*n), such that P = Q.</p>
      <p>The new matrix will have the row of the first by the columns of the 2nd matrix</p>
      <p>To get the value of a specifc cell in the new matrix such as (i,j), multiple the matrix 1 row i and matrix 2 column j.</p>
    </div>
  );
}
