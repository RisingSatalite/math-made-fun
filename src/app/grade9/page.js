'use client'

import { useState } from "react";

export default function Home() {
  const [coorindates, setCoorindates] = useState("")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Math made fun

      Grade 9 math include several units
      <li>
        <div>
          <ul>Square Roots and Surface Area</ul>
          <a href={`/grade9/geometry`}>{`Geometry notes`}</a>
        </div>
        <ul>Power and Exponents</ul>
        <ul>Rational Number</ul>
        <ul>Polynomials</ul>
        <ul>Linear Equations</ul>
        <div>
          <ul>Measurement</ul>
          <span>Covers conversion between units, metric and imperial units</span>
          <span>Some area conversion is also typically included</span>
        </div>
        <ul>Simularity and Transformation</ul>
        <ul>Circle Geometry</ul>
        <div>
          <ul>Probability and Statisitics</ul>
          <span>Mean, Mode, Median</span>
        </div>
      </li>
    </div>
  );
}
