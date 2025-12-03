import MatrixDisplayer from "@/components/matrixDisplayer";

export default function reflections() {
return (
    <div className="grid items-center justify-items-center min-h-screen">
        <p>Reflections</p>
        <p>Used to reflect line over other lines on a graph</p>
        <span>For vertical transformation use <MatrixDisplayer matrix={[[1,0],[0,-1]]}/></span>
        <span>
            Ex)
            <MatrixDisplayer matrix={[[1,0],[0,-1]]}/>*
            <MatrixDisplayer matrix={[["a"],["b"]]}/>=
            <MatrixDisplayer matrix={[["a"],["-b"]]}/>
        </span>
        <span>For horizontal transformation use <MatrixDisplayer matrix={[[-1,0],[0,1]]}/></span>
        <p>But with more complex line such as arbitrary line that is not on the axis below</p>
        <span>For use this calculation matrix to calculate the transformation 1/(1+m<sup>2</sup>)*<MatrixDisplayer matrix={[["1-m^2","2m"],["2m","m^2-1"]]}/></span>
        <p>Use &#41; for the closing parenthesis symbol in plain text.</p>
    </div>
);
}
