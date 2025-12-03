import MatrixDisplayer from "@/components/matrixDisplayer";

export default function matrixTransformations() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h1>transformations</h1>
      <a href={`/advance/geometryTransformations/reflections`}>Reflections</a>
      <a href={`/advance/geometryTransformations/rotations`}>Rotations</a>
      <a href={`/advance/geometryTransformations/projection`}>Projections</a>
      <a href={`/advance/geometryTransformations/shear`}>Shear</a>
      <a href={`/advance/geometryTransformations/scaling`}>Scaling</a>
      <p>When combining transformations, make sure to use A<sub>ii</sub> * A<sub>i</sub> to follow the inducing rule</p>
    </div>
  );
}
