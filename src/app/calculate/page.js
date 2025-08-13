'use client'

import { useState } from "react"

export default function EquationsSolver() {
    const [equation, setEquation] = useState("")
    return (
        <div className="grid items-center justify-items-center">
            <input onChange={(e) => setEquation(e.target)}></input>
            <a href={`/calculate/`}>Solve {equation}</a>
        </div>
    )
}