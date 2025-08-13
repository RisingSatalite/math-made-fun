'use client'

import { useState } from "react"

export default function Page({ params }) {
  // params.id comes directly from the URL

  // const cannot be used since nerdamer gets modified when other modules are loaded  
  var nerdamer = require('nerdamer'); 
  // Load additional modules. These are not required.

  
  const [equation, setEquation] = useState("")

  var solution = nerdamer(params.equation);
  return (
    <div className="grid items-center justify-items-center">
      <div className="grid items-left justify-items-left">
        <h1>You entered: {params.equation}</h1>
        <p>{solution.text()}</p>
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

    </div>
  );
}