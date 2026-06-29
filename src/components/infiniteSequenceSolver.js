'use client'

import React, { useState } from 'react'

export default function InfiniteSequenceSolver() {
  const [firstTerm, setFirstTerm] = useState(4)
  const [ratio, setRatio] = useState(0.5)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculateSum = () => {
    const a1 = Number(firstTerm)
    const r = Number(ratio)

    if (!Number.isFinite(a1) || !Number.isFinite(r)) {
      setError('Please enter valid numbers.')
      setResult(null)
      return
    }

    if (Math.abs(r) >= 1) {
      setResult({ type: 'diverges', a1, r, sum: 'does not exist' })
      setError('')
      return
    }

    const sum = a1 / (1 - r)
    setResult({ type: 'converges', a1, r, sum })
    setError('')
  }

  const loadExample = () => {
    setFirstTerm(3)
    setRatio(0.25)
    setResult({ type: 'converges', a1: 3, r: 0.25, sum: 4 })
    setError('')
  }

  return (
    <div className="max-w-2xl rounded-md bg-black/80 p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">Infinite geometric sequence</h3>
      <p className="mb-3 text-sm text-gray-300">
        For an infinite geometric sequence, the sum exists only when <strong>|r| &lt; 1</strong>.
        Then the sum is <strong>S = a₁ / (1 - r)</strong>.
      </p>

      <div className="mb-3 grid gap-3 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block">First term (a₁)</span>
          <input
            type="number"
            value={firstTerm}
            onChange={(e) => setFirstTerm(e.target.value)}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Common ratio (r)</span>
          <input
            type="number"
            step="0.1"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
            className="w-full rounded border p-2"
          />
        </label>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <button onClick={calculateSum} className="rounded bg-blue-600 px-3 py-2 text-white">
          Find sum
        </button>
        <button onClick={loadExample} className="rounded bg-green-600 px-3 py-2 text-white">
          Load example
        </button>
      </div>

      {error ? <p className="mb-2 text-red-400">{error}</p> : null}

      {result ? (
        <div className="rounded bg-black/60 p-3 text-sm">
          {result.type === 'converges' ? (
            <>
              <p>
                <strong>Converges</strong> because <strong>|r| = {Math.abs(result.r)} &lt; 1</strong>.
              </p>
              <p>
                <strong>S = a₁ / (1 - r)</strong> = {result.a1} / (1 - {result.r}) = {result.sum}
              </p>
            </>
          ) : (
            <p>
              <strong>Divides</strong> because <strong>|r| = {Math.abs(result.r)} ≥ 1</strong>, so the infinite sum does not exist.
            </p>
          )}
        </div>
      ) : null}
    </div>
  )
}
