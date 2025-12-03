import MatrixDisplayer from "@/components/matrixDisplayer";

export default function SpectralTheory() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>SpectralTheory</p>
      <p>Let that this vector below</p>
      <MatrixDisplayer matrix={[[-2,1],[-4,3]]}/>
      <p>We will use it to multiple 2 matrixes</p>
      <MatrixDisplayer matrix={[[2],[3]]}/>
      <MatrixDisplayer matrix={[[1],[4]]}/>
      <p>The answers are respecitively</p>
      <MatrixDisplayer matrix={[[-1],[1]]}/>
      <MatrixDisplayer matrix={[[2],[8]]}/>
      <p>If we graph this, 1st vector changed direction while the 2nd vecotr scaled</p>
      <p>Given a linear trnasformation, are there vector's whose iamges don't change directions.</p>
      <p>These vector are interesting</p>
      <p>T(v) ∝ v</p>
      <p>v is the original vector</p>
      <p>T(v) is the image or transformation of the vector</p>
      <p>Given a square matrix A<sub>n*n</sub>, suppose their exists a non-zero vector vER such that A*v=λ*v</p>
      <p>We call v an "eigonvector" of the matrix A, and λ is an "eigenvalue"</p>
      <p>To find the eigenvalue of A<sub>n*n</sub>, we simply find the roots of its so called "characteristic equation"</p>
      <p>C<sub>A</sub>(λ)=det(λI<sub>n</sub>-A)</p>
      Ex)
      A=<MatrixDisplayer matrix={[[-2, 1],[-4, 3]]}/>
      λI<sub>n</sub> = <MatrixDisplayer matrix={[["-2-λ", 1],[-4, "3-λ"]]}/>
      Then get the determinate
      <p>(-2-λ)*(3-λ)-(1*(-4))</p>
      <p>0=λ<sup>2</sup>-λ-2</p>
      <p>and by factoring</p>
      <p>0=(λ+1)(λ-2) Therefore λ=-1,2</p>
    </div>
  );
}
