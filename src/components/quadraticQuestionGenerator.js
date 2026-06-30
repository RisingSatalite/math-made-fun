'use client'

import React, { useState, useMemo } from 'react'

export default function QuadraticQuestionGenerator() {
  const [difficulty, setDifficulty] = useState('medium')
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswers, setUserAnswers] = useState({})
  const [feedback, setFeedback] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [answered, setAnswered] = useState(false)

  // Generate coefficients based on difficulty
  const generateCoefficients = () => {
    const ranges = {
      easy: { a: [1, 3], b: [-4, 4], c: [-5, 5] },
      medium: { a: [-3, 3], b: [-8, 8], c: [-10, 10] },
      hard: { a: [-5, 5], b: [-15, 15], c: [-20, 20] },
    }

    const range = ranges[difficulty]
    const getRandom = (min, max) => {
      if (min >= 0) return Math.floor(Math.random() * (max - min + 1)) + min
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let a
    do {
      a = getRandom(range.a[0], range.a[1])
    } while (a === 0)

    const b = getRandom(range.b[0], range.b[1])
    const c = getRandom(range.c[0], range.c[1])

    return { a, b, c }
  }

  // Calculate quadratic properties
  const calculateProperties = (a, b, c) => {
    const discriminant = b * b - 4 * a * c
    const vertexX = -b / (2 * a)
    const vertexY = a * vertexX * vertexX + b * vertexX + c

    let roots = []
    if (discriminant > 0) {
      const sqrt = Math.sqrt(discriminant)
      roots = [(-b + sqrt) / (2 * a), (-b - sqrt) / (2 * a)].sort((a, b) => a - b)
    } else if (discriminant === 0) {
      roots = [-b / (2 * a)]
    }

    return {
      discriminant,
      vertexX,
      vertexY,
      roots,
      yIntercept: c,
      opens: a > 0 ? 'upward' : 'downward',
    }
  }

  // Generate a new question
  const generateQuestion = () => {
    const coeffs = generateCoefficients()
    const properties = calculateProperties(coeffs.a, coeffs.b, coeffs.c)

    const questionTypes = [
      {
        type: 'vertex',
        question: `Find the vertex of y = ${coeffs.a}x² + ${coeffs.b}x + ${coeffs.c}`,
        answer: [properties.vertexX, properties.vertexY],
        hint: 'The vertex is the highest or lowest point of the parabola.',
      },
      {
        type: 'roots',
        question: `Find the x-intercepts (roots) of y = ${coeffs.a}x² + ${coeffs.b}x + ${coeffs.c}`,
        answer: properties.roots,
        hint: properties.roots.length === 0 ? 'This equation has no real roots.' : 'Solve by factoring, completing the square, or using the quadratic formula.',
      },
      {
        type: 'discriminant',
        question: `Find the discriminant of y = ${coeffs.a}x² + ${coeffs.b}x + ${coeffs.c}`,
        answer: properties.discriminant,
        hint: 'Use the formula: b² - 4ac',
      },
      {
        type: 'yintercept',
        question: `Find the y-intercept of y = ${coeffs.a}x² + ${coeffs.b}x + ${coeffs.c}`,
        answer: properties.yIntercept,
        hint: 'The y-intercept is the value of y when x = 0.',
      },
      {
        type: 'opens',
        question: `Does the parabola y = ${coeffs.a}x² + ${coeffs.b}x + ${coeffs.c} open upward or downward?`,
        answer: properties.opens,
        hint: 'Look at the sign of the coefficient a.',
      },
    ]

    const randomQuestion = questionTypes[Math.floor(Math.random() * questionTypes.length)]

    setCurrentQuestion({
      ...coeffs,
      ...randomQuestion,
      properties,
    })

    setUserAnswers({})
    setFeedback('')
    setShowFeedback(false)
    setAnswered(false)
  }

  // Check answer
  const checkAnswer = () => {
    if (!currentQuestion) return

    let isCorrect = false
    const tolerance = 0.01

    const normalize = (num) => parseFloat(num.toFixed(2))

    try {
      if (currentQuestion.type === 'vertex') {
        const [x, y] = userAnswers.vertex.split(',').map((v) => parseFloat(v.trim()))
        isCorrect =
          Math.abs(x - currentQuestion.properties.vertexX) < tolerance &&
          Math.abs(y - currentQuestion.properties.vertexY) < tolerance
        if (!isCorrect) {
          setFeedback(
            `Incorrect. The correct vertex is (${normalize(currentQuestion.properties.vertexX)}, ${normalize(currentQuestion.properties.vertexY)})`
          )
        }
      } else if (currentQuestion.type === 'roots') {
        if (currentQuestion.properties.roots.length === 0) {
          isCorrect = userAnswers.roots?.toLowerCase() === 'none' || userAnswers.roots?.toLowerCase() === 'no real roots'
          if (!isCorrect) {
            setFeedback('Incorrect. This equation has no real roots.')
          }
        } else {
          const rootsInput = userAnswers.roots.split(',').map((r) => parseFloat(r.trim()))
          const correctRoots = currentQuestion.properties.roots
          isCorrect =
            rootsInput.length === correctRoots.length &&
            rootsInput.every((root, idx) => Math.abs(root - correctRoots[idx]) < tolerance)
          if (!isCorrect) {
            setFeedback(
              `Incorrect. The correct roots are: ${correctRoots.map((r) => normalize(r)).join(', ')}`
            )
          }
        }
      } else if (currentQuestion.type === 'discriminant') {
        const discriminantInput = parseFloat(userAnswers.discriminant)
        isCorrect = Math.abs(discriminantInput - currentQuestion.properties.discriminant) < tolerance
        if (!isCorrect) {
          setFeedback(`Incorrect. The correct discriminant is ${currentQuestion.properties.discriminant}`)
        }
      } else if (currentQuestion.type === 'yintercept') {
        const yInput = parseFloat(userAnswers.yintercept)
        isCorrect = Math.abs(yInput - currentQuestion.properties.yIntercept) < tolerance
        if (!isCorrect) {
          setFeedback(`Incorrect. The correct y-intercept is ${currentQuestion.properties.yIntercept}`)
        }
      } else if (currentQuestion.type === 'opens') {
        isCorrect = userAnswers.opens?.toLowerCase() === currentQuestion.properties.opens.toLowerCase()
        if (!isCorrect) {
          setFeedback(`Incorrect. The parabola opens ${currentQuestion.properties.opens}.`)
        }
      }

      setShowFeedback(true)
      setAnswered(true)

      if (isCorrect) {
        setScore(score + 1)
        setFeedback('🎉 Correct!')
      }

      setTotalQuestions(totalQuestions + 1)
    } catch (error) {
      setFeedback('Invalid input. Please check your answer format.')
      setShowFeedback(true)
    }
  }

  const handleInputChange = (field, value) => {
    setUserAnswers({ ...userAnswers, [field]: value })
  }

  const handleReset = () => {
    setScore(0)
    setTotalQuestions(0)
    setCurrentQuestion(null)
    setUserAnswers({})
    setFeedback('')
    setShowFeedback(false)
    setAnswered(false)
  }

  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">Practice Questions</h2>
        <p className="text-gray-300 mb-6">Test your knowledge of quadratic equations!</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-lg font-semibold mb-3 text-gray-300">Select Difficulty:</label>
            <div className="flex gap-4">
              {['easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-6 py-2 rounded font-semibold transition capitalize ${
                    difficulty === level
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generateQuestion}
          className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition"
        >
          Start Quiz
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-400">Practice Questions</h2>
        <div className="text-lg font-semibold text-yellow-400">
          Score: {score}/{totalQuestions}
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-4 text-indigo-300">{currentQuestion.question}</h3>

        <div className="mb-6 p-4 bg-gray-600 rounded">
          <p className="text-sm text-gray-300 italic">
            <strong>Hint:</strong> {currentQuestion.hint}
          </p>
        </div>

        {/* Answer Input Based on Question Type */}
        <div className="space-y-4">
          {currentQuestion.type === 'vertex' && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Enter vertex as (x, y):
              </label>
              <input
                type="text"
                placeholder="e.g., 2, 5"
                value={userAnswers.vertex || ''}
                onChange={(e) => handleInputChange('vertex', e.target.value)}
                disabled={answered}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
              />
            </div>
          )}

          {currentQuestion.type === 'roots' && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Enter roots separated by comma (or "none" if no real roots):
              </label>
              <input
                type="text"
                placeholder="e.g., -1, 3"
                value={userAnswers.roots || ''}
                onChange={(e) => handleInputChange('roots', e.target.value)}
                disabled={answered}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
              />
            </div>
          )}

          {currentQuestion.type === 'discriminant' && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Enter the discriminant:
              </label>
              <input
                type="number"
                placeholder="e.g., 25"
                value={userAnswers.discriminant || ''}
                onChange={(e) => handleInputChange('discriminant', e.target.value)}
                disabled={answered}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
              />
            </div>
          )}

          {currentQuestion.type === 'yintercept' && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Enter the y-intercept:
              </label>
              <input
                type="number"
                placeholder="e.g., 5"
                value={userAnswers.yintercept || ''}
                onChange={(e) => handleInputChange('yintercept', e.target.value)}
                disabled={answered}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded border border-gray-500 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
              />
            </div>
          )}

          {currentQuestion.type === 'opens' && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Does the parabola open upward or downward?
              </label>
              <div className="flex gap-4">
                {['upward', 'downward'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('opens', option)}
                    disabled={answered}
                    className={`flex-1 px-4 py-2 rounded font-semibold transition capitalize ${
                      userAnswers.opens === option
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    } disabled:opacity-50`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div
            className={`mt-6 p-4 rounded font-semibold ${
              feedback.includes('Correct')
                ? 'bg-green-900/50 text-green-300 border border-green-600'
                : 'bg-red-900/50 text-red-300 border border-red-600'
            }`}
          >
            {feedback}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {!answered ? (
            <button
              onClick={checkAnswer}
              className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded transition"
            >
              Check Answer
            </button>
          ) : (
            <>
              <button
                onClick={generateQuestion}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition"
              >
                Next Question
              </button>
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded transition"
              >
                End Quiz
              </button>
            </>
          )}
        </div>
      </div>

      {/* Quiz Statistics */}
      {totalQuestions > 0 && (
        <div className="bg-gray-700 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-indigo-300">Quiz Statistics</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Total Questions</p>
              <p className="text-2xl font-bold text-indigo-400">{totalQuestions}</p>
            </div>
            <div>
              <p className="text-gray-400">Accuracy</p>
              <p className="text-2xl font-bold text-indigo-400">
                {Math.round((score / totalQuestions) * 100)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
