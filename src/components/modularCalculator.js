"use client";

import { useMemo, useState } from "react";

function normalizeMod(value, modulus) {
  const m = Number(modulus);
  if (Number.isNaN(m) || m === 0) return NaN;
  const v = Number(value);
  if (Number.isNaN(v)) return NaN;
  const r = v % m;
  return ((r % m) + m) % m;
}

export default function ModularCalculator() {
  const [a, setA] = useState(17);
  const [b, setB] = useState(5);
  const [n, setN] = useState(5);
  const [op, setOp] = useState("remainder");

  const result = useMemo(() => {
    const mod = Number(n);
    if (!mod || Number.isNaN(mod)) return "—";

    if (op === "remainder") {
      const r = normalizeMod(a, mod);
      return `${r} (so ${a} ≡ ${r} (mod ${mod}))`;
    }

    const av = normalizeMod(a, mod);
    const bv = normalizeMod(b, mod);
    const sum = normalizeMod(av + bv, mod);
    const prod = normalizeMod(av * bv, mod);

    if (op === "add") {
      return `${av} + ${bv} ≡ ${sum} (mod ${mod})`;
    }

    if (op === "multiply") {
      return `${av} × ${bv} ≡ ${prod} (mod ${mod})`;
    }

    return "—";
  }, [a, b, n, op]);

  return (
    <div className="w-full max-w-md rounded-lg border border-slate-200 bg-slate-900 p-6 shadow-sm">
      <h3 className="mb-3 text-xl font-semibold">Modular Calculator</h3>

      <label className="block text-sm font-medium">
        Modulus (n)
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block text-sm font-medium">
        Number a
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block text-sm font-medium">
        Number b (optional)
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </label>

      <label className="block text-sm font-medium">
        Operation
        <select
          value={op}
          onChange={(e) => setOp(e.target.value)}
          className="mt-1 w-full rounded-md border px-3 py-2"
        >
          <option value="remainder">Remainder (a mod n)</option>
          <option value="add">Addition (a + b)</option>
          <option value="multiply">Multiplication (a × b)</option>
        </select>
      </label>

      <div className="mt-4 rounded-md bg-slate-700 px-4 py-3 text-sm">
        <div className="font-medium">Result</div>
        <div className="mt-1 font-mono">{result}</div>
      </div>

      <p className="mt-4 text-xs text-slate-300">
        Tip: In modular arithmetic, you can replace numbers with any equivalent
        remainder (congruent value) and the result stays the same.
      </p>
    </div>
  );
}
