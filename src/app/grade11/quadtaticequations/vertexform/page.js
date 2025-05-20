import Image from "next/image";

export default function QuadraticEquations() {
    return (
        <div className="grid items-center justify-items-center">
            Quadratic equations


            <p>the factored form of a quadratic equation is</p>
            <p>y = A ( X - H ) ^ 2 + K</p>

            <p>If a is positive the graph goes up, but if negative, it trend down</p>
            <p>X interept are when X is equal to eithor R or R</p>
            
            <p>To change x^2 + bx to X+h^2 get b/2 </p>
            <Image src="/perfectsquare.png" alt="vertex form" width={500} height={500}/>

            <Image src="/solvingperfectsquare.png" alt="standard to vertex form" width={1000} height={1000}/>
        </div>
    );
}