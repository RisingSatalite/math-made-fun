import Projection_solver from "@/components/projection_solver";

export default function Projections() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <p>To check for variance, of which vector is most important to a main vecotr made of multiple vectors</p>
      <p>To project Vector B onto Vector A, use the below formula</p>
      <p>proj<sub>A</sub>B = ((B * A)/|| A ||) * A</p>
      <p>Use the dot point of B and A, divid by A magnitude, and then multiply that by Vector A to get the Vector</p>
      <p>This mean that the final answer is a vector, because we multiple vector by B by the dot product divded by magnitude of B</p>
      <Projection_solver/>
    </div>
  );
}
