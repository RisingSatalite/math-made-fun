import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Projections() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>Projections</p>
      <p>Matrix are complicated, and when we want to use them, it is easier if they are simplified.</p>
      <p>Example: A covariance matrix (used in statistics, ML, physics)</p>
      <MatrixDisplayer matrix={
        [
          [
            <span>σ<sub>1</sub><sup>2</sup></span>,
            <span>ρ<sub>12</sub>σ<sub>1</sub>σ<sub>2</sub></span>,
            <span>ρ<sub>13</sub>σ<sub>1</sub>σ<sub>3</sub></span>
          ],[
            <span>ρ<sub>12</sub>σ<sub>1</sub>σ<sub>2</sub></span>,
            <span>σ<sub>2</sub><sup>2</sup></span>,
            <span>ρ<sub>23</sub>σ<sub>2</sub>σ<sub>3</sub></span>
          ],[
            <span>ρ<sub>13</sub>σ<sub>1</sub>σ<sub>3</sub></span>,
            <span>ρ<sub>23</sub>σ<sub>2</sub>σ<sub>3</sub></span>,
            <span>σ<sub>3</sub><sup>2</sup></span>
          ]
        ]}/>
      <p>Projecting a matrix onto a line simplifies complex data by reducing its dimensions, allowing for easier analysis and interpretation.</p>
      <p>This technique is often used in statistics and machine learning to find the closest representation of data points along a specific direction, enhancing model performance.</p>
      <p>To project a matrix onto a line, we use the below formula</p>
      <span>1/(1+m<sup>2</sup>)*<MatrixDisplayer matrix={[[1,"m"],["m","m^2"]]}/>then multiply it with<MatrixDisplayer matrix={[["Your"],["Matrix"]]}/></span>
      <p>The m is from the line fromula of y=mx</p>
      <p>Just take the slope from the line and subsite it into the formula</p>
    </div>
  );
}
