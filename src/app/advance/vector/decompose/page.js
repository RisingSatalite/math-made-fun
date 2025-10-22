export default function Decompose() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>To turn a vector into it components, we can turn A into A<sub>1</sub> and A<sub>2</sub></p>
      <p>A<sub>2</sub> will be parrallet to vector B, while A<sub>1</sub> perpendicular to Vecter B</p>
      <p>To get A<sub>2</sub>, we can use the projection formula, then we can subtract vector A by A<sub>2</sub> to determine for A<sub>1</sub></p>
      <p>2,-3,1 1,-1,3, A<sub>1</sub> is 14/11,25/11,-13/11</p>
    </div>
  );
}
