'use client'

import React, { useState } from 'react'

export default function ArithmeticSequenceSum() {
  const [firstTerm, setFirstTerm] = useState(2)
  const [commonDifference, setCommonDifference] = useState(3)
  const [numberOfTerms, setNumberOfTerms] = useState(5)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculateSum = () => {
    const a1 = Number(firstTerm)
    const d = Number(commonDifference)
    const n = Number(numberOfTerms)

    if (!Number.isFinite(a1) || !Number.isFinite(d) || !Number.isFinite(n)) {
      setError('Please enter valid numbers.')
      setResult(null)
      return
    }

    if (!Number.isInteger(n) || n <= 0) {
      setError('The number of terms must be a positive whole number.')
      setResult(null)
      return
    }

    const lastTerm = a1 + (n - 1) * d
    const sum = (n / 2) * (a1 + lastTerm)

    setResult({ a1, d, n, lastTerm, sum })
    setError('')
  }

  const loadExample = () => {
    setFirstTerm(4)
    setCommonDifference(2)
    setNumberOfTerms(6)
    setResult({ a1: 4, d: 2, n: 6, lastTerm: 14, sum: 54 })
    setError('')
  }

  return (
    <div className="max-w-2xl rounded-md bg-black/80 p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">Sum of an arithmetic sequence</h3>
      <p className="mb-3 text-sm text-gray-300">
        To find the sum of all terms, use the formula <strong>S<sub>n</sub> = n/2 (a<sub>1</sub> + a<sub>n</sub>)</strong>.
        You can also write it as <strong>S<sub>n</sub> = n/2 (2a<sub>1</sub> + (n - 1)d)</strong>.
      </p>

      <div className="mb-3 grid gap-3 md:grid-cols-3">
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
          <span className="mb-1 block">Common difference (d)</span>
          <input
            type="number"
            value={commonDifference}
            onChange={(e) => setCommonDifference(e.target.value)}
            className="w-full rounded border p-2"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block">Number of terms (n)</span>
          <input
            type="number"
            value={numberOfTerms}
            onChange={(e) => setNumberOfTerms(e.target.value)}
            className="w-full rounded border p-2"
          />
        </label>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <button onClick={calculateSum} className="rounded bg-blue-600 px-3 py-2 text-white">
          Calculate sum
        </button>
        <button onClick={loadExample} className="rounded bg-green-600 px-3 py-2 text-white">
          Load example
        </button>
      </div>

      {error ? <p className="mb-2 text-red-400">{error}</p> : null}

      {result ? (
        <div className="rounded bg-black/60 p-3 text-sm">
          <p>
            <strong>Last term:</strong> a<sub>n</sub> = {result.a1} + ({result.n} - 1) × {result.d} = {result.lastTerm}
          </p>
          <p>
            <strong>Sum:</strong> S<sub>{result.n}</sub> = {result.n}/2 × ({result.a1} + {result.lastTerm}) = {result.sum}
          </p>
          <p className="mt-2 text-gray-400">
            This works because an arithmetic sequence grows by the same amount each time, so pairing the first and last terms gives the same total for each pair.
          </p>
        </div>
      ) : null}
    </div>
  )
}
