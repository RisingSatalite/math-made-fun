import MatrixDisplayer from "@/components/matrixDisplayer";

export default function rotations() {
return (
    <div className="grid items-center justify-items-center min-h-screen">
        <p>Rotations</p>
        <p>To rotate a line or matrix around the origin, we use the below formula</p>
        <MatrixDisplayer matrix={[["cosθ","-sinθ"],["sinθ","cosθ"]]}/>
        <p>Depending if you use a positive angle, rotation will be CCW or CW</p>
        <p>CCW(CounterClockWise) θ &gt; 0</p>
        <p>CW(ClockWise) θ &lt; 0</p>
    </div>
);
}
