export default function Grade10() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Grade 10 Math</h1>
      <ul>
        <li><Link href="/grade10/linearEquations" className="text-blue-600 underline">Linear Equations — interactive</Link></li>
        <li>Algebra</li>
        <li>Geometry</li>
        <li>Trigonometry</li>
        <li>Data management</li>
        <li>Number Sense</li>
        <li>Measurements</li>
      </ul>
    </div>
  );
}
