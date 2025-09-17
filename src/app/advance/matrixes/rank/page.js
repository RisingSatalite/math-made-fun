import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Rank() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MatrixDisplayer matrix={[[1,0,3],[0,1,5],[0,0,0]]}/><p>Unique solution</p>
      <MatrixDisplayer matrix={[[1,2,5,7],[0,1,3,11],[0,0,0,0]]}/><p>Infinite solution</p>
      <MatrixDisplayer matrix={[[1,2,3,4],[0,0,0,5]]}/><p>No solution</p>
    </div>
  );
}
