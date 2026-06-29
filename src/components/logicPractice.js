'use client'

import { useMemo, useState } from 'react'

const prompts = [
  { id: 1, statement: 'A ∧ B', answer: 'Both A and B must be true.' },
  { id: 2, statement: 'A ∨ B', answer: 'At least one of A or B is true.' },
  { id: 3, statement: '¬A', answer: 'It means the opposite of A.' },
  { id: 4, statement: 'A → B', answer: 'If A is true, then B must also be true.' },
]

export default function LogicPractice() {
  const [selected, setSelected] = useState(prompts[0].id)
  const [feedback, setFeedback] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  const currentPrompt = useMemo(() => prompts.find((p) => p.id === selected) ?? prompts[0], [selected])

  const handleCheck = () => {
    setShowAnswer(true)
    setFeedback('Great job! Try another one or reveal the answer if you want a hint.')
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-5 shadow-lg">
      <h3 className="mb-2 text-xl font-semibold">Try a quick logic challenge</h3>
      <p className="mb-4 text-sm text-slate-300">
        Pick a statement, then reveal the meaning or check your understanding.
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => {
              setSelected(prompt.id)
              setShowAnswer(false)
              setFeedback('')
            }}
            className={`rounded-full px-3 py-1 text-sm ${selected === prompt.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}
          >
            {prompt.statement}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-800/70 p-4">
        <p className="mb-2 text-lg font-medium">{currentPrompt.statement}</p>
        <p className="text-sm text-slate-400">What does this mean in words?</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {/*
        <button onClick={handleCheck} className="rounded bg-green-600 px-3 py-2 text-white">
        Check understanding
        </button>
        */}
        <button
          onClick={() => {
            setShowAnswer(true)
            setFeedback('')
          }}
          className="rounded bg-slate-700 px-3 py-2 text-white"
        >
          Reveal answer
        </button>
      </div>

      {feedback ? <p className="mt-3 text-sm text-emerald-400">{feedback}</p> : null}
      {showAnswer ? <p className="mt-3 rounded bg-slate-800 p-3 text-sm text-slate-200">{currentPrompt.answer}</p> : null}
    </div>
  )
}
