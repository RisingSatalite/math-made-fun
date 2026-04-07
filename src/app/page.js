export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-150 to-indigo-100 p-8 sm:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 mb-4">
            Math Made Fun 🎓
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            This is a website I made to assistance with learning Math
          </p>
          <p  className="text-xl text-gray-700 mb-2">
            Make an interactive learning platform to make mathematics exciting and accessible
          </p>
          <p className="text-lg text-gray-600">
            Explore concepts, solve problems, and master mathematical thinking
          </p>
        </div>

        {/* Grade Levels Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">By Grade Level</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Grade 9</h3>
              <p className="text-gray-600 mb-4">Master fundamentals of geometry and rotations</p>
              <div className="space-y-2">
                <a href="/grade9" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Geometry Basics
                </a>
                <a href="/grade9/rotations" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Rotations
                </a>
                <a href="/grade9/surfacearea" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Surface Area
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Grade 10</h3>
              <p className="text-gray-600 mb-4">Advance your skills with polynomials and measurement</p>
              <div className="space-y-2">
                <a href="/grade10" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Factoring Polynomials
                </a>
                <a href="/grade10/measurement" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Measurement
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Grade 11</h3>
              <p className="text-gray-600 mb-4">Solve quadratic equations in multiple forms</p>
              <div className="space-y-2">
                <a href="/grade11/quadtaticequations" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Quadratic Equations
                </a>
                <a href="/grade11/quadtaticequations/factorform" className="block text-indigo-600 hover:text-indigo-800 font-semibold">
                  → Factor Form
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Topics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Advanced Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📐 Geometry Transformations</h3>
              <p className="text-gray-600 mb-4">Learn projections, reflections, rotations, and more</p>
              <a href="/advance/geometryTransformations" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📊 Matrices & Linear Algebra</h3>
              <p className="text-gray-600 mb-4">Determinants, rank, multiplication, and more</p>
              <a href="/advance/matrixes" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">➗ Vector Algebra</h3>
              <p className="text-gray-600 mb-4">Magnitude, dot product, projections, and decomposition</p>
              <a href="/advance/vector" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📈 Statistics</h3>
              <p className="text-gray-600 mb-4">Averages, hypothesis testing, sampling, and more</p>
              <a href="/advance/statictics" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔢 Number Theory</h3>
              <p className="text-gray-600 mb-4">Explore modular arithmetic and number properties</p>
              <a href="/advance/numberTheory" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🎯 Set Theory</h3>
              <p className="text-gray-600 mb-4">Understand sets and their properties</p>
              <a href="/advance/setTheory" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Explore →
              </a>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Useful Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🧮 Equation Calculator</h3>
              <p className="text-gray-600 mb-4">Solve and explore various mathematical equations</p>
              <a href="/calculate" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Open Calculator →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📚 Glossary</h3>
              <p className="text-gray-600 mb-4">Look up mathematical terms and constants</p>
              <a href="/glossary" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                View Glossary →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📖 Resources</h3>
              <p className="text-gray-600 mb-4">Learning materials and interactive visualizations</p>
              <a href="/resources" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Browse Resources →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🗺️ Full Sitemap</h3>
              <p className="text-gray-600 mb-4">View a complete map of all available content</p>
              <a href="/sitemap-veiw" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                View Sitemap →
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Ready to Learn?</h2>
          <p className="text-gray-600 mb-6">
            Start exploring mathematics in a fun and interactive way. Choose a grade level, advanced topic, or use our tools.
          </p>
          <a href="/sitemap-veiw" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Explore All Content
          </a>
        </section>
      </div>
    </div>
  );
}
