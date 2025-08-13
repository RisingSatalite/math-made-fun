'use client'

import { useState } from "react"

export default function EquationsSolver() {
    const [equation, setEquation] = useState("")

    return (
        <div className="grid items-center justify-items-center gap-2">
            <input 
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                placeholder="Enter equation"
                className="border px-2 py-1"
            />
            <a href={`/calculate/${encodeURIComponent(equation)}`}>
                Solve {equation}
            </a>
        </div>
    )
}
