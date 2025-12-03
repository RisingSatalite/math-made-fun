import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Shear() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <p>Shear</p>
      <p>To shear a matrix, we 1 of 2 formula</p>
      Eithor
      <MatrixDisplayer matrix={[[1,"k"],[0,1]]}/>
      or
      <MatrixDisplayer matrix={[[1,0],["k",1]]}/>
      <p>k is the shear factor</p>
      <p>We use the formula depending if we want to shear in the x factor or the y direction</p>
    </div>
  );
}
