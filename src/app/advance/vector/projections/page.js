export default function Projections() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>To check for variance, of which vector is most important to a main vecotr made of multiple vectors</p>
      <p>To project Vector B onto Vector A, use the below formula</p>
      <p>proj<sub>A</sub>B = ((B * A)/A mag) * A</p>
      <p>Use the dot point of B and A, divid by A magnitude, and then multiply that by Vector A to get the Vector</p>
    </div>
  );
}
