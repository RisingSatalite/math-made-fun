'use client'

import React, { useState } from 'react'

export default function LinearEquationSolver({ defaultEquation = '2x+3=7' }) {
  const [equation, setEquation] = useState(defaultEquation)
  const [solution, setSolution] = useState(null)
  const [steps, setSteps] = useState([])
  const [error, setError] = useState('')

  const parseSide = (side) => {
    const s = side.replace(/\s+/g, '')
    if (s === '') return { coef: 0, constant: 0 }
    const terms = s.match(/[+-]?[^+-]+/g) || []
    let coef = 0
    let constant = 0
    terms.forEach((t) => {
      if (t.includes('x')) {
        let num = t.replace('x', '')
        if (num === '' || num === '+') num = '1'
        if (num === '-') num = '-1'
        coef += parseFloat(num)
      } else {
        constant += parseFloat(t)
      }
    })
    return { coef, constant }
  }

  const solveEquation = (eq) => {
    setError('')
    setSolution(null)
    setSteps([])
    try {
      if (!eq.includes('=')) throw new Error('Please include an = sign, e.g. 2x+3=7')
      const parts = eq.split('=')
      if (parts.length !== 2) throw new Error('Equation must contain exactly one = sign')
      const left = parseSide(parts[0])
      const right = parseSide(parts[1])
      const a = left.coef - right.coef
      const b = right.constant - left.constant
      const stepsArr = []
      stepsArr.push(`Left: ${left.coef}x + ${left.constant}`)
      stepsArr.push(`Right: ${right.coef}x + ${right.constant}`)
      if (Math.abs(a) < 1e-12) {
        if (Math.abs(b) < 1e-12) {
          setSolution('Infinite solutions (identity).')
          stepsArr.push('All real numbers satisfy this equation.')
        } else {
          setSolution('No solution (contradiction).')
          stepsArr.push('No value of x can satisfy this equation.')
        }
        setSteps(stepsArr)
        return
      }
      const x = b / a
      stepsArr.push(`Bring x terms to left: (${left.coef} - ${right.coef})x = ${b}`)
      stepsArr.push(`Compute coefficient: ${a}x = ${b}`)
      stepsArr.push(`Divide both sides: x = ${b} / ${a} = ${x}`)
      setSolution(x)
      setSteps(stepsArr)
    } catch (err) {
      setError(err.message || 'Invalid equation')
    }
  }

  const generateRandom = (difficulty = 1) => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const range = difficulty === 1 ? [-5, 5] : difficulty === 2 ? [-10, 10] : [-20, 20]
    let a, b, c, d
    do {
      a = rand(range[0], range[1])
      b = rand(range[0], range[1])
      c = rand(range[0], range[1])
      d = rand(range[0], range[1])
    } while (a === c)
    const fmt = (n, varName = false) => {
      if (varName) {
        if (n === 1) return 'x'
        if (n === -1) return '-x'
        return `${n}x`
      }
      return n >= 0 ? `+${n}` : `${n}`
    }
    const left = `${fmt(a, true)}${b >= 0 ? `+${b}` : `${b}`}`
    const right = `${fmt(c, true)}${d >= 0 ? `+${d}` : `${d}`}`
    return `${left} = ${right}`
  }

  const handleGenerate = () => {
    const eq = generateRandom(1)
    setEquation(eq)
    solveEquation(eq)
  }

  return (
    <div className="max-w-2xl p-4 bg-black/80 rounded-md shadow-md">
      <label className="block font-semibold mb-2">Enter a linear equation (e.g. 2x+3=7)</label>
      <input
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        className="w-full p-2 border rounded mb-3"
        aria-label="equation-input"
      />
      <div className="flex gap-2 mb-3">
        <button onClick={() => solveEquation(equation)} className="px-3 py-2 bg-blue-600 text-white rounded">Solve</button>
        <button onClick={handleGenerate} className="px-3 py-2 bg-green-600 text-white rounded">Generate</button>
        <button onClick={() => { setEquation(''); setSolution(null); setSteps([]); setError('') }} className="px-3 py-2 bg-gray-700 rounded">Clear</button>
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {solution !== null && <div className="mb-2"><strong>Solution:</strong> {String(solution)}</div>}
      {steps.length > 0 && (
        <details className="mt-2">
          <summary className="cursor-pointer font-semibold">Show steps</summary>
          <ol className="list-decimal ml-5 mt-2">
            {steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </details>
      )}
      <p className="mt-3 text-sm text-gray-600">Tip: use integers and 'x' for the variable. Supports equations like <em>3x-2 = x+4</em>.</p>
    </div>
  )
}
