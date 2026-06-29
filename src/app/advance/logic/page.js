import Link from 'next/link'
import LogicPractice from '@/components/logicPractice'

export default function Logic() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Logic</h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Logic helps us describe when statements are true or false. Here you can learn the main symbols, see how negation works, and try a small interactive challenge.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Main symbols</h2>
            <div className="space-y-3 text-slate-300">
              <p><strong>∧</strong> means AND. It is true only when both inputs are true.</p>
              <p><strong>∨</strong> means OR. It is true when at least one input is true.</p>
              <p><strong>¬</strong> means NOT. It flips the truth value: true becomes false and false becomes true.</p>
            </div>
          </div>

          <LogicPractice />
        </section>

        <section className="rounded-xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg">
          <h2 className="mb-3 text-2xl font-semibold">Negation of a statement</h2>
          <p className="mb-4 text-slate-300">To negate a statement, you reverse the logic so the opposite is true.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-800 text-slate-100">
                  <th className="border border-slate-700 px-4 py-2">Statement</th>
                  <th className="border border-slate-700 px-4 py-2">Negation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">A</td>
                  <td className="border border-slate-700 px-4 py-2">¬A</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">A ∧ B</td>
                  <td className="border border-slate-700 px-4 py-2">¬A ∨ ¬B</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">A ∨ B</td>
                  <td className="border border-slate-700 px-4 py-2">¬A ∧ ¬B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg">
          <h2 className="mb-3 text-2xl font-semibold">Explore further</h2>
          <p className="mb-3 text-slate-300">Try the truth-table explorer for a more visual view of how each operator behaves.</p>
          <Link href="/advance/logic/truthTables" className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500">
            Open truth tables
          </Link>
        </section>
      </div>
    </div>
  )
}
