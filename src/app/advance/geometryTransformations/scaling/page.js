import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Scaling() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>Scaling</p>
      <p>To scale a matrix, we use a rather basic formula</p>
      <MatrixDisplayer matrix={[["kx",0],[0,"ky"]]}/>
      <p>k<sub>x</sub> is the x scale factor</p>
      <p>k<sub>y</sub> is the y scale factor</p>
    </div>
  );
}
