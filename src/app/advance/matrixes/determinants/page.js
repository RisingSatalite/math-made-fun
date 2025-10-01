import MatrixDisplayer from "@/components/matrixDisplayer";

export default function __Default__() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Deteminant is a unqiue number for every square number that we can use to solve for inidivudal square fo r it inverse</p>
      <p>For a 2x2 martix, it has a formula which is ((a*d)-(b*c))</p>
      <MatrixDisplayer matrix={[["a","b"],["c","d"]]}/>
      <p>If not 0, then invertable</p>
    </div>
  );
}
