"use client"

import { useMemo, useState } from "react";

const operators = [
  { key: "AND", label: "AND (∧)" },
  { key: "OR", label: "OR (∨)" },
  { key: "NOT", label: "NOT (¬)" },
  { key: "XOR", label: "XOR" },
  { key: "IMPLIES", label: "Implies (→)" },
  { key: "EQUIV", label: "Equivalent (↔)" },
];

function evaluateOperator(op, a, b) {
  if (op === "AND") return a && b;
  if (op === "OR") return a || b;
  if (op === "NOT") return !a;
  if (op === "XOR") return a !== b;
  if (op === "IMPLIES") return !a || b;
  if (op === "EQUIV") return a === b;
  return false;
}

function buildRows(operator) {
  const values = [false, true];
  if (operator === "NOT") {
    return values.map((a) => ({ a, result: evaluateOperator(operator, a, false) }));
  }
  return values.flatMap((a) => values.map((b) => ({ a, b, result: evaluateOperator(operator, a, b) })));
}

export default function TruthTablesPage() {
  const [selectedOperator, setSelectedOperator] = useState("AND");
  const rows = useMemo(() => buildRows(selectedOperator), [selectedOperator]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Math Logic: Truth Tables</h1>
        <p className="text-gray-600">
          Truth tables show how logical expressions evaluate for every possible truth value of their inputs.
          Choose an operator below to explore its truth table and meaning.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="p-5 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Choose an operator</h2>
          <div className="grid gap-3">
            {operators.map((operator) => (
              <button
                key={operator.key}
                type="button"
                onClick={() => setSelectedOperator(operator.key)}
                className={`text-left rounded-lg border px-4 py-3 transition-colors ${
                  selectedOperator === operator.key
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <span className="font-semibold">{operator.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="p-5 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">What it means</h2>
          {selectedOperator === "AND" && (
            <p>AND is true only when both inputs are true.</p>
          )}
          {selectedOperator === "OR" && (
            <p>OR is true when at least one input is true.</p>
          )}
          {selectedOperator === "NOT" && (
            <p>NOT inverts the value: true becomes false and false becomes true.</p>
          )}
          {selectedOperator === "XOR" && (
            <p>XOR is true only when exactly one input is true.</p>
          )}
          {selectedOperator === "IMPLIES" && (
            <p>Implies is false only when the first input is true and the second is false.</p>
          )}
          {selectedOperator === "EQUIV" && (
            <p>Equivalent is true when both inputs have the same truth value.</p>
          )}
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p><strong>True</strong> means the statement is correct.</p>
            <p><strong>False</strong> means the statement is not correct.</p>
          </div>
        </section>
      </div>

      <section className="p-5 bg-white border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Truth table for {operators.find((op) => op.key === selectedOperator)?.label}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr className="bg-slate-100">
                <th className="border px-4 py-3">A</th>
                {selectedOperator !== "NOT" && <th className="border px-4 py-3">B</th>}
                <th className="border px-4 py-3">Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 1 ? "bg-slate-50" : ""}>
                  <td className="border px-4 py-3">{row.a ? "True" : "False"}</td>
                  {selectedOperator !== "NOT" && <td className="border px-4 py-3">{row.b ? "True" : "False"}</td>}
                  <td className="border px-4 py-3 font-semibold">{row.result ? "True" : "False"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-5 bg-white border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Common logic examples</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>A ∧ B</strong>: both A and B must be true.</li>
          <li><strong>A ∨ B</strong>: at least one of A or B is true.</li>
          <li><strong>¬A</strong>: the opposite of A.</li>
          <li><strong>A ⊕ B</strong>: A or B is true, but not both.</li>
          <li><strong>A → B</strong>: if A is true, then B must be true.</li>
          <li><strong>A ↔ B</strong>: A and B are either both true or both false.</li>
        </ul>
      </section>
    </div>
  );
}
