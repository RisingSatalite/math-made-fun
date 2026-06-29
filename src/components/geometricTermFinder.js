'use client'

import React, { useState } from 'react'

export default function GeometricTermFinder() {
  const [firstTerm, setFirstTerm] = useState(2)
  const [ratio, setRatio] = useState(3)
  const [termNumber, setTermNumber] = useState(5)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = () => {
    const a1 = Number(firstTerm)
    const r = Number(ratio)
    const n = Number(termNumber)

    if (!Number.isFinite(a1) || !Number.isFinite(r) || !Number.isFinite(n)) {
      setError('Please enter valid numbers.')
      setResult(null)
      return
    }

    if (!Number.isInteger(n) || n <= 0) {
      setError('The term number must be a positive whole number.')
      setResult(null)
      return
    }

    const an = a1 * r ** (n - 1)
    setResult({ an, formula: `a${n} = ${a1} × ${r}^((${n} - 1))` })
    setError('')
  }

  return (
    <div className="rounded-md bg-black/80 p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">Find a specific term in a geometric sequence</h3>
      <p className="mb-3 text-sm text-gray-300">Use a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup></p>

      <div className="mb-3 grid gap-3 md:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block">First term (a₁)</span>
          <input type="number" value={firstTerm} onChange={(e) => setFirstTerm(e.target.value)} className="w-full rounded border p-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Common ratio (r)</span>
          <input type="number" value={ratio} onChange={(e) => setRatio(e.target.value)} className="w-full rounded border p-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Term number (n)</span>
          <input type="number" value={termNumber} onChange={(e) => setTermNumber(e.target.value)} className="w-full rounded border p-2" />
        </label>
      </div>

      <button onClick={calculate} className="rounded bg-blue-600 px-3 py-2 text-white">Find term</button>

      {error ? <p className="mt-3 text-red-400">{error}</p> : null}
      {result ? (
        <div className="mt-3 rounded bg-black/60 p-3 text-sm">
          <p><strong>Answer:</strong> {result.an}</p>
          <p className="mt-1 text-gray-400">{result.formula}</p>
        </div>
      ) : null}
    </div>
  )
}
