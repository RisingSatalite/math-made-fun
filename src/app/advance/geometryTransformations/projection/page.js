import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Projections() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <p>Projections</p>
      <p>To project a matrix onto a line</p>
      <span>1/(1+m<sup>2</sup>)*</span><MatrixDisplayer matrix={[[1,"m"],["m","m^2"]]}/>
      <p>The m is from the y=mx fromula</p>
    </div>
  );
}
