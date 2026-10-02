'use client'

import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});

export default function QuadraticSolver() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(-2)
  const [c, setC] = useState(-3)

  // Calculate derived values
  const quadratic = useMemo(() => {
    // Vertex: x = -b/2a, y = f(-b/2a)
    const vertexX = a !== 0 ? -b / (2 * a) : 0
    const vertexY = a * vertexX * vertexX + b * vertexX + c

    // Axis of symmetry
    const axisOfSymmetry = vertexX

    // Discriminant
    const discriminant = b * b - 4 * a * c

    // Roots
    let roots = []
    if (a !== 0) {
      if (discriminant > 0) {
        const sqrt = Math.sqrt(discriminant)
        roots = [
          (-b + sqrt) / (2 * a),
          (-b - sqrt) / (2 * a),
        ]
      } else if (discriminant === 0) {
        roots = [-b / (2 * a)]
      }
    }

    // Y-intercept
    const yIntercept = c

    // Generate points for the graph
    const xValues = []
    const yValues = []
    const step = 0.1
    const xMin = vertexX - 10
    const xMax = vertexX + 10

    for (let x = xMin; x <= xMax; x += step) {
      xValues.push(x)
      yValues.push(a * x * x + b * x + c)
    }

    return {
      vertexX,
      vertexY,
      axisOfSymmetry,
      discriminant,
      roots,
      yIntercept,
      xValues,
      yValues,
    }
  }, [a, b, c])

  // Format number to 2 decimal places
  const format = (num) => {
    if (Number.isInteger(num)) return num.toString()
    return parseFloat(num.toFixed(2)).toString()
  }

  // Create plot data
  const plotData = [
    {
      x: quadratic.xValues,
      y: quadratic.yValues,
      type: 'scatter',
      mode: 'lines',
      name: 'Parabola',
      line: { color: '#818cf8', width: 3 },
    },
    // Vertex point
    {
      x: [quadratic.vertexX],
      y: [quadratic.vertexY],
      type: 'scatter',
      mode: 'markers',
      name: 'Vertex',
      marker: { size: 12, color: '#fbbf24' },
    },
    // Y-intercept
    {
      x: [0],
      y: [quadratic.yIntercept],
      type: 'scatter',
      mode: 'markers',
      name: 'Y-intercept',
      marker: { size: 10, color: '#34d399' },
    },
    // X-intercepts (roots)
    ...quadratic.roots.map((root, idx) => ({
      x: [root],
      y: [0],
      type: 'scatter',
      mode: 'markers',
      name: `Root ${idx + 1}`,
      marker: { size: 10, color: '#f87171' },
    })),
    // Axis of symmetry line
    {
      x: [quadratic.axisOfSymmetry, quadratic.axisOfSymmetry],
      y: [Math.min(...quadratic.yValues) - 2, Math.max(...quadratic.yValues) + 2],
      type: 'scatter',
      mode: 'lines',
      name: 'Axis of Symmetry',
      line: { color: '#a78bfa', width: 2, dash: 'dash' },
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">Interactive Quadratic Equation Explorer</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Equation: {format(a)}x² + {format(b)}x + {format(c)}</h3>

            {/* Coefficient A */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Coefficient a (scale): {format(a)}
              </label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={a}
                onChange={(e) => setA(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded cursor-pointer"
              />
              <p className="text-xs text-gray-400 mt-1">
                {a > 0 ? 'Parabola opens upward' : a < 0 ? 'Parabola opens downward' : 'Not a parabola'}
              </p>
            </div>

            {/* Coefficient B */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Coefficient b (shift): {format(b)}
              </label>
              <input
                type="range"
                min="-10"
                max="10"
                step="0.1"
                value={b}
                onChange={(e) => setB(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded cursor-pointer"
              />
            </div>

            {/* Coefficient C */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Coefficient c (y-intercept): {format(c)}
              </label>
              <input
                type="range"
                min="-10"
                max="10"
                step="0.1"
                value={c}
                onChange={(e) => setC(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded cursor-pointer"
              />
            </div>

            <button
              onClick={() => {
                setA(1)
                setB(-2)
                setC(-3)
              }}
              className="w-full mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold transition"
            >
              Reset
            </button>
          </div>

          {/* Key Information */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 text-indigo-300">Key Properties</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Vertex:</span>
                <span className="font-mono font-semibold">
                  ({format(quadratic.vertexX)}, {format(quadratic.vertexY)})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Axis of Symmetry:</span>
                <span className="font-mono font-semibold">x = {format(quadratic.axisOfSymmetry)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Y-intercept:</span>
                <span className="font-mono font-semibold">(0, {format(quadratic.yIntercept)})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Discriminant:</span>
                <span className="font-mono font-semibold">{format(quadratic.discriminant)}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-gray-400">X-intercepts (Roots):</span>
                <div className="mt-2">
                  {quadratic.roots.length === 0 ? (
                    <p className="text-gray-500 text-xs">No real roots (discriminant &lt; 0)</p>
                  ) : (
                    quadratic.roots.map((root, idx) => (
                      <div key={idx} className="font-mono font-semibold text-xs">
                        x{idx + 1} = {format(root)}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-indigo-300">Different Forms</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-400">General Form:</span>
                <div className="font-mono font-semibold mt-1">
                  y = {format(a)}x² + {format(b)}x + {format(c)}
                </div>
              </div>
              {quadratic.roots.length === 2 && (
                <div>
                  <span className="text-gray-400">Factored Form:</span>
                  <div className="font-mono font-semibold mt-1 text-xs">
                    y = {format(a)}(x - {format(quadratic.roots[0])})(x - {format(quadratic.roots[1])})
                  </div>
                </div>
              )}
              <div>
                <span className="text-gray-400">Vertex Form:</span>
                <div className="font-mono font-semibold mt-1 text-xs">
                  y = {format(a)}(x - {format(quadratic.vertexX)})² + {format(quadratic.vertexY)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <Plot
            data={plotData}
            layout={{
              width: 500,
              height: 500,
              title: 'Quadratic Function Visualization',
              xaxis: {
                title: 'X Axis',
                zeroline: true,
                gridcolor: '#4b5563',
              },
              yaxis: {
                title: 'Y Axis',
                zeroline: true,
                gridcolor: '#4b5563',
              },
              plot_bgcolor: '#1f2937',
              paper_bgcolor: '#111827',
              font: { color: '#e5e7eb' },
              showlegend: true,
              legend: {
                x: 0.02,
                y: 0.98,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                bordercolor: '#6366f1',
                borderwidth: 1,
              },
            }}
            config={{ responsive: true }}
          />
        </div>
      </div>

      {/* Educational Info */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 text-indigo-300">📚 Understanding the Visualization</h4>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>
            <strong className="text-indigo-400">Purple Line:</strong> The parabola representing the quadratic equation
          </li>
          <li>
            <strong className="text-yellow-400">Yellow Point:</strong> The vertex (maximum or minimum point)
          </li>
          <li>
            <strong className="text-green-400">Green Point:</strong> The y-intercept where the graph crosses the y-axis
          </li>
          <li>
            <strong className="text-red-400">Red Points:</strong> The x-intercepts (roots) where the graph crosses the x-axis
          </li>
          <li>
            <strong className="text-purple-400">Purple Dashed Line:</strong> The axis of symmetry - the line that divides the parabola into two equal halves
          </li>
        </ul>
      </div>
    </div>
  )
}
