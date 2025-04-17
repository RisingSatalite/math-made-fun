'use client'

import { useState } from "react";

export default function Home() {
  const [coorindates, setCoorindates] = useState("")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Math made fun

      Grade 9 math include several units
      <li>
        <ul>Algebra</ul>
        <ul>Linear relationships</ul>
        <ul>Polynomials</ul>
        <ul>Geometry</ul>
        <a href={`/grade9/geometry`}>{`Geometry notes`}</a>
        <ul>Measurement</ul>
        <span>Covers conversion between units, metric and imperial units</span>
        <span>Some area conversion is also typically included</span>
        <ul>Statisitics</ul>
        <span>Mean, Mode, Median</span>
      </li>

    </div>
  );
}
