'use client'

import React, { useState } from 'react'

export default function LinearEquationGenerator({ difficulty = 1 }) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const ranges = difficulty === 1 ? [-5, 5] : difficulty === 2 ? [-10, 10] : [-20, 20]

  const generateQuestion = () => {
    let a, b, c, d
    do {
      a = rand(ranges[0], ranges[1])
      b = rand(ranges[0], ranges[1])
      c = rand(ranges[0], ranges[1])
      d = rand(ranges[0], ranges[1])
    } while (a === c)

    const fmtCoef = (n) => {
      if (n === 1) return 'x'
      if (n === -1) return '-x'
      return `${n}x`
    }
    const fmtConst = (n) => (n >= 0 ? `+${n}` : `${n}`)
    const left = `${fmtCoef(a)}${fmtConst(b)}`
    const right = `${fmtCoef(c)}${fmtConst(d)}`
    const eq = `${left} = ${right}`
    const numerator = d - b
    const denominator = a - c
    const solution = denominator === 0 ? null : numerator / denominator
    return { eq, a, b, c, d, numerator, denominator, solution }
  }

  const [q, setQ] = useState(() => generateQuestion())
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [showSolution, setShowSolution] = useState(false)

  function formatNice(val, numerator, denominator) {
    if (denominator && Number.isInteger(numerator) && Number.isInteger(denominator)) {
      const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b))
      const g = gcd(numerator, denominator)
      const num = numerator / g
      const den = denominator / g
      if (den === 1) return `${num}`
      return `${num}/${den}`
    }
    return Number.isFinite(val) ? `${parseFloat(val.toFixed(4))}` : String(val)
  }

  const newQuestion = () => {
    setQ(generateQuestion())
    setInput('')
    setFeedback(null)
    setShowSolution(false)
  }

  const parseAnswer = (s) => {
    if (String(s).trim() === '') return NaN
    const frac = String(s).trim().match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/)
    if (frac) {
      const num = parseFloat(frac[1])
      const den = parseFloat(frac[2])
      if (den === 0) return NaN
      return num / den
    }
    const v = parseFloat(s)
    return isNaN(v) ? NaN : v
  }

  const check = () => {
    const user = parseAnswer(input)
    if (Number.isNaN(user)) {
      setFeedback({ ok: false, message: 'Enter a number or fraction (e.g. 3/2).' })
      return
    }
    if (q.solution === null) {
      setFeedback({ ok: false, message: 'No unique solution for this equation.' })
      return
    }
    const tol = 1e-6
    if (Math.abs(user - q.solution) <= tol) {
      setFeedback({ ok: true, message: 'Correct!' })
    } else {
      setFeedback({ ok: false, message: `Incorrect. Correct x = ${formatNice(q.solution, q.numerator, q.denominator)}` })
    }
  }

  return (
    <div className="max-w-xl p-4 bg-black/80 rounded-md shadow-md">
      <div className="mb-2"><strong>Solve for x:</strong></div>
      <div className="text-2xl font-mono mb-3">{q.eq}</div>
      <div className="flex gap-2 mb-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your answer, e.g. 2 or 3/2"
          className="p-2 border rounded flex-1"
        />
        <button onClick={check} className="px-3 py-2 bg-blue-600 text-white rounded">Check</button>
        <button onClick={newQuestion} className="px-3 py-2 bg-green-600 text-white rounded">New</button>
      </div>
      {feedback && (
        <div className={`${feedback.ok ? 'text-green-400' : 'text-red-400'} mb-2`}>{feedback.message}</div>
      )}
      <div className="flex gap-2">
        <button onClick={() => setShowSolution((s) => !s)} className="px-2 py-1 bg-gray-700 rounded text-sm">
          {showSolution ? 'Hide' : 'Show'} solution
        </button>
        <button
          onClick={() => {
            setInput(formatNice(q.solution, q.numerator, q.denominator))
            setFeedback(null)
          }}
          className="px-2 py-1 bg-gray-800 rounded text-sm"
        >
          Fill answer
        </button>
      </div>
      {showSolution && (
        <div className="mt-3 text-sm bg-black/60 p-3 rounded">
          <div>Step 1: Bring x terms together: ({q.a} - {q.c})x = {q.d} - {q.b}</div>
          <div>Step 2: Compute: {q.a - q.c}x = {q.numerator}</div>
          <div>Step 3: Divide: x = {q.numerator} / {q.a - q.c} = {formatNice(q.solution, q.numerator, q.denominator)}</div>
        </div>
      )}
      <p className="mt-3 text-sm text-gray-600">Tip: you can enter fractions like <em>3/2</em>.</p>
    </div>
  )
}
