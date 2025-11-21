import Magnitude_solver from "@/components/magnitudeSolver";

export default function Magnitude() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <p>To determine a vector magnitude, square it part and get the sqaure root.</p>
      <p>Magnitude of Vector 1,2,4 is 1+4+16=21, then sqrt of 21=4.58257...</p>
      <p>Note that most of the time, we will requare it, so keep it as Sqrt() unless you need to get the square root</p>
      <Magnitude_solver/>
    </div>
  );
}
