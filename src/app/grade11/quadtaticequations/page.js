import QuadraticSolver from '@/components/quadraticSolver'
import QuadraticQuestionGenerator from '@/components/quadraticQuestionGenerator'

export default function QuadraticEquations() {
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-900 to-gray-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2 text-indigo-400">Quadratic Equations</h1>
                <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                    Learn about quadratic equations by exploring them interactively. Adjust the coefficients with the sliders to see how they affect the parabola!
                </p>

                {/* Interactive Solver */}
                <QuadraticSolver />

                {/* Educational Content */}
                <div className="mt-12 max-w-4xl mx-auto space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg border border-indigo-500/30">
                        <h2 className="text-2xl font-bold mb-3 text-indigo-400">What are Quadratic Equations?</h2>
                        <p className="text-gray-300">
                            Quadratic equations are polynomial equations of degree 2. They form a curved shape called a parabola when graphed. The parabola can open upward (if a &gt; 0) or downward (if a &lt; 0).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-800 p-6 rounded-lg border border-green-500/30">
                            <h3 className="text-xl font-bold mb-2 text-green-400">X-Intercepts</h3>
                            <p className="text-gray-300 text-sm">
                                Also called roots or zeros, these are the points where the graph intersects the x-axis. They represent the solutions to the equation.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg border border-yellow-500/30">
                            <h3 className="text-xl font-bold mb-2 text-yellow-400">Vertex</h3>
                            <p className="text-gray-300 text-sm">
                                The highest or lowest point of the parabola. It represents the maximum or minimum value of the function.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                            <h3 className="text-xl font-bold mb-2 text-blue-400">Y-Intercept</h3>
                            <p className="text-gray-300 text-sm">
                                The point where the graph crosses the y-axis. It occurs when x = 0, so the y-intercept is simply the constant term c.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/30">
                        <h2 className="text-2xl font-bold mb-4 text-purple-400">Three Forms of Quadratic Equations</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-indigo-300">General Form</h3>
                                <p className="text-gray-300 mb-2">y = ax² + bx + c</p>
                                <p className="text-gray-400 text-sm">This is the most common form. The coefficients a, b, and c determine the shape and position of the parabola.</p>
                                <a href="/grade11/quadtaticequations/general" className="inline-block mt-2 text-indigo-400 hover:text-indigo-200 font-semibold">
                                    Learn more →
                                </a>
                            </div>

                            <div className="border-t border-gray-700 pt-4">
                                <h3 className="text-lg font-semibold mb-2 text-indigo-300">Factored Form</h3>
                                <p className="text-gray-300 mb-2">y = a(x - r₁)(x - r₂)</p>
                                <p className="text-gray-400 text-sm">This form makes it easy to see the x-intercepts (roots) of the equation. r₁ and r₂ are the x-values where the parabola crosses the x-axis.</p>
                                <a href="/grade11/quadtaticequations/factorform" className="inline-block mt-2 text-indigo-400 hover:text-indigo-200 font-semibold">
                                    Learn more →
                                </a>
                            </div>

                            <div className="border-t border-gray-700 pt-4">
                                <h3 className="text-lg font-semibold mb-2 text-indigo-300">Vertex Form</h3>
                                <p className="text-gray-300 mb-2">y = a(x - h)² + k</p>
                                <p className="text-gray-400 text-sm">This form clearly shows the vertex (h, k) of the parabola, making it easy to identify the maximum or minimum point.</p>
                                <a href="/grade11/quadtaticequations/vertexform" className="inline-block mt-2 text-indigo-400 hover:text-indigo-200 font-semibold">
                                    Learn more →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Practice Questions Section */}
                <div className="mt-12">
                    <QuadraticQuestionGenerator />
                </div>
            </div>
        </div>
    );
}