import VectorDisplayer from "@/components/vectorDisplayer";
import VectorSymbol from "@/components/vectorSymbol";

export default function Orthogonality() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>We can extend the concept of perpendicular vector to higher dimensional spaces |R. This idea is called orthonogality</p>
      <p>A set of vectors (v1,v2) in returnis said to be orthogonality if Vector Ui * Vector Uj = 0(i!=j)</p>
      <p>Furthur, the set is call an orthogonal set if all vecotrs have a magnitude of 1</p>
      <VectorDisplayer vector={[2,1,0]}/>
      <VectorDisplayer vector={[3,-6,5]}/>
      <p>These 2 vectors are orthogonal</p>
      <p>Dot products is 0</p>
      <VectorDisplayer vector={[1,-1,-1]}/>
      <VectorDisplayer vector={[5,2,3]}/>
      <p>These 2 vectors are also orthogonal</p>
      <p>We can normalize them to make them orthonormal</p>
      <span>Sprt 3</span>
      <VectorDisplayer vector={[1,-1,-1]}/>
      <span>Sqrt 38</span>
      <VectorDisplayer vector={[5,2,3]}/>
      <p>Any orthogonal set is automatically linearly indepent!</p>
      <p>It is always preferrable to have a basis for a subspace that is orthnormal</p>
      <p>So to transform any basis into a orthogonal one, we use Fourier Expansion</p>
      <p>Let U be a subspace of |R4, with an orthongoanl basis of (U1...U4), then and vector VER can be expressed as a linear combination like so</p>
      <p><VectorSymbol letter={"x"}/> = proj<sub><VectorSymbol letter={"v"}/>1</sub><VectorSymbol letter={"x"}/> + ... + proj<sub><VectorSymbol letter={"v"}/>4</sub><VectorSymbol letter={"x"}/></p>
      <p>When it is expanded to Vx*Vu/||Vu||*Vu</p>
      <p>The value we multiple by Vu is called a Fouier coefficient</p>
    </div>
  );
}
