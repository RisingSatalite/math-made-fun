'use client'

import React, { useState } from 'react'

export default function GeometricInitialValueSolver() {
  const [ratio, setRatio] = useState(2)
  const [termNumber, setTermNumber] = useState(4)
  const [termValue, setTermValue] = useState(24)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const solve = () => {
    const r = Number(ratio)
    const n = Number(termNumber)
    const an = Number(termValue)

    if (!Number.isFinite(r) || !Number.isFinite(n) || !Number.isFinite(an)) {
      setError('Please enter valid numbers.')
      setResult(null)
      return
    }

    if (!Number.isInteger(n) || n <= 0) {
      setError('The term number must be a positive whole number.')
      setResult(null)
      return
    }

    if (r === 0) {
      setError('The ratio cannot be 0 for this formula.')
      setResult(null)
      return
    }

    const a1 = an / (r ** (n - 1))
    setResult({ a1, formula: `a₁ = aₙ / r^(n-1)` })
    setError('')
  }

  return (
    <div className="rounded-md bg-black/80 p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">Solve for the initial value in a geometric sequence</h3>
      <p className="mb-3 text-sm text-gray-300">
        Use <strong>a₁ = aₙ / r<sup>n-1</sup></strong>.
      </p>

      <div className="mb-3 grid gap-3 md:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block">Common ratio (r)</span>
          <input type="number" value={ratio} onChange={(e) => setRatio(e.target.value)} className="w-full rounded border p-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Term number (n)</span>
          <input type="number" value={termNumber} onChange={(e) => setTermNumber(e.target.value)} className="w-full rounded border p-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Term value (aₙ)</span>
          <input type="number" value={termValue} onChange={(e) => setTermValue(e.target.value)} className="w-full rounded border p-2" />
        </label>
      </div>

      <button onClick={solve} className="rounded bg-purple-600 px-3 py-2 text-white">Solve initial value</button>

      {error ? <p className="mt-3 text-red-400">{error}</p> : null}
      {result ? (
        <div className="mt-3 rounded bg-black/60 p-3 text-sm">
          <p><strong>Initial value:</strong> {result.a1}</p>
          <p className="mt-1 text-gray-400">{result.formula}</p>
        </div>
      ) : null}
    </div>
  )
}
