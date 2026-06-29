import ArithmeticSequenceSum from '@/components/arithmeticSequenceSum'
import ArithmeticTermFinder from '@/components/arithmeticTermFinder'
import GeometricTermFinder from '@/components/geometricTermFinder'
import GeometricInitialValueSolver from '@/components/geometricInitialValueSolver'
import InfiniteSequenceSolver from '@/components/infiniteSequenceSolver'

export default function Sequence() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-4 text-3xl font-bold">Sequence and series</h1>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Geometric series</h2>
        <p>A common ratio is the number you multiply by each time to get the next term.</p>
        <p>Example: 4, 2, 1, 0.5 has a common ratio of 1/2.</p>
        <p>Example: 1, -2, 4, -8 has a common ratio of -2.</p>

        <div className="mt-4 rounded-lg bg-gray-900/50 p-4">
          <h3 className="mb-2 font-semibold">Infinite geometric sequence</h3>
          <p>
            If a geometric sequence goes on forever, the sum can be found only when <strong>|r| &lt; 1</strong>.
          </p>
          <p>
            The sum is <strong>S = a₁ / (1 - r)</strong>.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Example: 4, 2, 1, 0.5, ... has a ratio of 1/2, so its infinite sum is 4 / (1 - 1/2) = 8.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Arithmetic sequence</h2>
        <p>An arithmetic sequence increases or decreases by the same amount each step.</p>
        <p>Example: 2, 5, 8, 11, ... has a common difference of 3.</p>

        <div className="mt-4 rounded-lg bg-gray-900/50 p-4">
          <h3 className="mb-2 font-semibold">How to find the general term</h3>
          <p>
            a<sup>n</sup> = a<sup>1</sup> + (n - 1)d
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>a<sub>1</sub> = first term</li>
            <li>d = common difference</li>
            <li>n = term number</li>
          </ul>
        </div>

        <div className="mt-4 rounded-lg bg-gray-900/50 p-4">
          <h3 className="mb-2 font-semibold">How to get the sum of all terms</h3>
          <p>
            Use the formula <strong>S<sub>n</sub> = n/2 (a<sub>1</sub> + a<sub>n</sub>)</strong>.
          </p>
          <p>
            First find the last term with <strong>a<sub>n</sub> = a<sub>1</sub> + (n - 1)d</strong>, then substitute it into the sum formula.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Example: for 2, 5, 8, 11, 14, the sum of the first 5 terms is 5/2 × (2 + 14) = 40.
          </p>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ArithmeticTermFinder />
        <GeometricTermFinder />
      </div>

      <div className="mt-8">
        <GeometricInitialValueSolver />
      </div>

      <div className="mt-8">
        <ArithmeticSequenceSum />
      </div>
        <InfiniteSequenceSolver />
      </div>
    </div>
  )
}
