export default function Linear_Dependant() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Linear Dependence is use with matrixes and vectors</p>
      <p>Lets say you have a graph that with 3 arrows on it, and you can use the 3 arrows to move, let say red, blue and green here</p>
      <p>We can use these lines to get to point X.</p>
      
      <p>Because we have multiple line, we can use them in an order, but combination matters. Red blue and blue red are the same, but if red green and blue blue green take you to the same spot, this is bad</p>
      <p>If there are multiple ways to get to the same point, with different types of arrow, that break math</p>
      <p>This is important as this break vectors and points, which are the same mathematic object</p>
    </div>
  );
}
