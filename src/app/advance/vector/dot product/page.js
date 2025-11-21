import Dot_product_solver from "@/components/dotProductSolver";

export default function DotProduct() {
  //src\app\advance\vector\dot product\page.js
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>If you have 2 vectors of the same size, you cna multiple both of vector components and then add them together to get the dot product</p>
      <p>Ex, [1,2,3],[3,-2,4]</p>
      <p>1*3, 2*-2 and 3*4</p>
      <p>3,-4,12</p>
      <p>11</p>
      <Dot_product_solver/>
    </div>
  );
}
