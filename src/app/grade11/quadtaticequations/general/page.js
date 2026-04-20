"use client"

import { useMemo, useState } from "react";

function formatTerm(coefficient, power) {
    if (coefficient === 0) return "";
    const abs = Math.abs(coefficient);
    const sign = coefficient > 0 ? "+" : "-";
    let term = "";

    if (power === 2) {
        term = abs === 1 ? "x^2" : `${abs}x^2`;
    } else if (power === 1) {
        term = abs === 1 ? "x" : `${abs}x`;
    } else {
        term = `${abs}`;
    }

    return `${sign} ${term}`;
}

function formatQuadratic(a, b, c) {
    const parts = [];
    if (a !== 0) {
        const aTerm = a === 1 ? "x^2" : a === -1 ? "-x^2" : `${a}x^2`;
        parts.push(aTerm);
    }
    if (b !== 0) {
        parts.push(formatTerm(b, 1));
    }
    if (c !== 0) {
        parts.push(formatTerm(c, 0));
    }
    if (parts.length === 0) return "0";
    let result = parts.join(" ");
    if (result.startsWith("+ ")) result = result.slice(2);
    return result;
}

function getRoots(a, b, c) {
    if (a === 0) return null;
    const d = b * b - 4 * a * c;
    if (d > 0) {
        const sqrt = Math.sqrt(d);
        return [`(${(-b - sqrt) / (2 * a).toFixed(2)})`, `(${(-b + sqrt) / (2 * a).toFixed(2)})`];
    }
    if (d === 0) {
        return [`(${(-b / (2 * a)).toFixed(2)})`];
    }
    return null;
}

function buildGraphPath(a, b, c) {
    const points = [];
    for (let x = -10; x <= 10; x += 0.25) {
        const y = a * x * x + b * x + c;
        points.push([x, y]);
    }
    const yValues = points.map(([, y]) => y);
    const minY = Math.min(...yValues, -10);
    const maxY = Math.max(...yValues, 10);
    const height = maxY - minY;
    const scaleX = 280 / 20;
    const scaleY = 180 / height;
    const centerX = 160;
    const centerY = 110;

    return {
        d: points
            .map(([x, y], index) => {
                const px = centerX + x * scaleX;
                const py = centerY - (y - (minY + height / 2)) * scaleY;
                return `${index === 0 ? "M" : "L"} ${px.toFixed(1)} ${py.toFixed(1)}`;
            })
            .join(" "),
        minY,
        maxY,
    };
}

export default function QuadraticEquationsGeneralInfo() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(-3);
    const [c, setC] = useState(2);

    const discriminant = useMemo(() => b * b - 4 * a * c, [a, b, c]);
    const vertex = useMemo(() => {
        if (a === 0) return null;
        const h = -b / (2 * a);
        const k = a * h * h + b * h + c;
        return { h: Number(h.toFixed(2)), k: Number(k.toFixed(2)) };
    }, [a, b, c]);
    const parabolaProps = useMemo(() => {
        if (a === 0) return "Not a quadratic when a = 0.";
        return a > 0 ? "Opens upward (minimum vertex)." : "Opens downward (maximum vertex).";
    }, [a]);
    const roots = useMemo(() => getRoots(a, b, c), [a, b, c]);
    const graph = useMemo(() => buildGraphPath(a, b, c), [a, b, c]);

    return (
        <div className="grid gap-6 max-w-4xl mx-auto p-4">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl font-semibold">General Form of a Quadratic Equation</h1>
                <p className="text-gray-400">
                    The general form of a quadratic equation is <strong>y = ax^2 + bx + c</strong>. Adjust the coefficients below to see how the parabola changes.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr]">
                <div className="space-y-3 p-4 border rounded-lg shadow-sm bg-balck">
                    <h2 className="text-xl font-semibold">Interactive coefficients</h2>
                    <p className="text-sm text-gray-400">Change values for <strong>a</strong>, <strong>b</strong>, and <strong>c</strong>.</p>

                    <label className="flex flex-col gap-1">
                        <span className="font-medium">a</span>
                        <input
                            type="number"
                            value={a}
                            step="1"
                            min="-10"
                            max="10"
                            onChange={(e) => setA(Number(e.target.value))}
                            className="border rounded p-2"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-medium">b</span>
                        <input
                            type="number"
                            value={b}
                            step="1"
                            min="-20"
                            max="20"
                            onChange={(e) => setB(Number(e.target.value))}
                            className="border rounded p-2"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-medium">c</span>
                        <input
                            type="number"
                            value={c}
                            step="1"
                            min="-20"
                            max="20"
                            onChange={(e) => setC(Number(e.target.value))}
                            className="border rounded p-2"
                        />
                    </label>
                </div>

                <div className="space-y-3 p-4 border rounded-lg shadow-sm bg-black">
                    <h2 className="text-xl font-semibold">Current equation</h2>
                    <p className="text-lg font-semibold">y = {formatQuadratic(a, b, c)}</p>
                    <div className="space-y-2 text-sm text-gray-300">
                        <p><strong>Vertex:</strong> {vertex ? `(${vertex.h}, ${vertex.k})` : "Not defined"}</p>
                        <p><strong>Discriminant:</strong> {discriminant}</p>
                        <p><strong>Direction:</strong> {parabolaProps}</p>
                        <p><strong>Y-intercept:</strong> (0, {c})</p>
                        <p><strong>Roots:</strong> {a === 0 ? "Not quadratic" : roots ? roots.join(" and ") : "No real roots"}</p>
                    </div>
                </div>
            </div>

            <div className="p-4 border rounded-lg shadow-sm bg-black">
                <h2 className="text-xl font-semibold mb-3">Graph of the parabola</h2>
                <div className="overflow-x-auto">
                    <svg viewBox="0 0 320 220" className="w-full h-auto rounded bg-slate-950">
                        <line x1="20" y1="110" x2="300" y2="110" stroke="#999" strokeWidth="1" />
                        <line x1="160" y1="20" x2="160" y2="200" stroke="#999" strokeWidth="1" />
                        <path d={graph.d} fill="none" stroke="#2563eb" strokeWidth="2" />
                        <circle cx="160" cy="110" r="1.5" fill="#333" />
                        <text x="305" y="115" fontSize="10" fill="#666">x</text>
                        <text x="165" y="15" fontSize="10" fill="#666">y</text>
                    </svg>
                </div>
                <p className="mt-3 text-sm text-gray-400">The parabola is drawn for x between -10 and 10. The graph updates immediately when you change the coefficients.</p>
            </div>

            <div className="space-y-2 p-4 border rounded-lg shadow-sm bg-black">
                <h2 className="text-xl font-semibold">What this means</h2>
                <p>In general form, the quadratic equation is written as <strong>y = ax^2 + bx + c</strong>.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li><strong>a</strong> controls the opening direction and width of the parabola.</li>
                    <li><strong>b</strong> shifts the vertex left or right and changes the symmetry line.</li>
                    <li><strong>c</strong> is the y-intercept (where the graph crosses the y-axis).</li>
                </ul>
                <p>The vertex formula is <strong>h = -b / (2a)</strong> and <strong>k = a h^2 + b h + c</strong>.</p>
            </div>
        </div>
    );
}