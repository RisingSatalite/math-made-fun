"use client"
import { useState } from "react";

function parseFactor(f) {
    // expects forms like '2x+3', '-x-4', 'x+1'
    const m = f.match(/^([+-]?\d*)x([+-]?\d+)$/);
    if (!m) return null;
    let aStr = m[1];
    let bStr = m[2];
    let a;
    if (aStr === "" || aStr === "+") a = 1;
    else if (aStr === "-") a = -1;
    else a = parseInt(aStr, 10);
    const b = parseInt(bStr.replace(/\s+/g, ""), 10);
    return { a, b };
}

function formatStandard(A, B, C) {
    const fmt = (n) => {
        if (n === 0) return "0";
        return n.toString();
    };
    const parts = [];
    parts.push(`${fmt(A)}x^2`);
    if (B >= 0) parts.push(`+ ${fmt(B)}x`);
    else parts.push(`- ${fmt(Math.abs(B))}x`);
    if (C >= 0) parts.push(`+ ${fmt(C)}`);
    else parts.push(`- ${fmt(Math.abs(C))}`);
    return parts.join(" ");
}

export default function QuadraticEquations() {
    const [input, setInput] = useState("(x-2)(x+3)");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    function convertFactoredToStandard(str) {
        setError("");
        // remove whitespace
        const s = str.replace(/\s+/g, "");
        // try to extract the two factors, allowing forms like (ax+b)(cx+d) or ax+b)(cx+d and with/without parentheses
        let f1 = null;
        let f2 = null;
        if (s.startsWith("(") && s.endsWith(")") && s.includes(")(")) {
            const inner = s.slice(1, -1);
            const parts = inner.split(")(");
            if (parts.length === 2) {
                f1 = parts[0];
                f2 = parts[1];
            }
        }
        // fallback: try split by ')(' or ')*(' or '*'
        if (!f1) {
            const byStar = s.split('*');
            if (byStar.length === 2) {
                f1 = byStar[0].replace(/[()]/g, '');
                f2 = byStar[1].replace(/[()]/g, '');
            }
        }
        if (!f1) {
            // try simple split where two parenthesized groups exist
            const m = s.match(/\([^)]*\)/g);
            if (m && m.length === 2) {
                f1 = m[0].replace(/[()]/g, '');
                f2 = m[1].replace(/[()]/g, '');
            }
        }
        if (!f1) {
            setError('Could not parse factors. Use forms like (x-2)(2x+3) or (2x+1)*(x-3).');
            return null;
        }

        const p1 = parseFactor(f1);
        const p2 = parseFactor(f2);
        if (!p1 || !p2) {
            setError('Failed to parse factor terms. Ensure factors are of the form ax+b (e.g. x-2, 2x+3).');
            return null;
        }

        const A = p1.a * p2.a;
        const B = p1.a * p2.b + p1.b * p2.a;
        const C = p1.b * p2.b;

        return { A, B, C };
    }

    function handleConvert(e) {
        e?.preventDefault();
        const out = convertFactoredToStandard(input);
        if (out) {
            setResult({ ...out, formatted: formatStandard(out.A, out.B, out.C) });
        } else {
            setResult(null);
        }
    }

    return (
        <div className="grid items-center justify-items-center gap-4">
            <h1>Quadratic equations</h1>
            <h2>Factored Form</h2>

            <p>The factored form of a quadratic equation is</p>
            <p>y = A ( x - r ) ( x - s )</p>

            <p>If A is positive the graph opens upwards; if negative it opens downwards.</p>
            <p>X intercepts occur at x = r and x = s.</p>
            <p>Y intercept is when x = 0; substitute x = 0 and evaluate y.</p>
            <p>Vertex is the point where the graph reaches its maximum or minimum value.</p>
            <p>The coordinates of the vertex are (h, k) where h = (r + s) / 2 and k = f(h).</p>

            <div className="w-full max-w-xl p-4 border rounded">
                <h3>Convert Factored → Standard</h3>
                <p>Enter a product of two linear factors, e.g. <strong>(x-2)(x+3)</strong> or <strong>(2x+1)*(x-3)</strong>.</p>
                <form onSubmit={handleConvert} className="flex flex-col gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="border p-2"
                        aria-label="factored-form-input"
                    />
                    <div className="flex gap-2">
                        <button onClick={handleConvert} className="px-3 py-1 bg-blue-500 text-white rounded">Convert</button>
                        <button type="button" onClick={() => { setInput('(x-2)(x+3)'); setResult(null); setError(''); }} className="px-3 py-1 border rounded">Reset</button>
                    </div>
                </form>

                {error && <p className="text-red-600">{error}</p>}

                {result && (
                    <div className="mt-3">
                        <p><strong>Standard form:</strong> y = {result.formatted}</p>
                        <p><strong>Coefficients:</strong> A = {result.A}, B = {result.B}, C = {result.C}</p>
                    </div>
                )}
            </div>
        </div>
    );
}