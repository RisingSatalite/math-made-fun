'use client'

import { useMemo, useState } from "react";
import MatrixDisplayer from "@/components/matrixDisplayer";

export default function reflections() {
	// add state for slope and a point to reflect
	const [m, setM] = useState(1);
	const [a, setA] = useState(2);
	const [b, setB] = useState(1);

	// compute numeric reflection matrix for line y = m x
	const numericReflectMatrix = useMemo(() => {
		const mm = Number(m) || 0;
		const denom = 1 + mm * mm;
		const f = 1 / denom;
		const m11 = (1 - mm * mm) * f;
		const m12 = 2 * mm * f;
		const m21 = 2 * mm * f;
		const m22 = (mm * mm - 1) * f;
		const format = (n) => Number.parseFloat(n).toFixed(4);
		return [
			[format(m11), format(m12)],
			[format(m21), format(m22)],
		];
	}, [m]);

	// multiply matrix by vector [a,b]
	const transformed = useMemo(() => {
		const mm = numericReflectMatrix.map((row) =>
			row.map((v) => Number.parseFloat(v))
		);
		const av = Number(a) || 0;
		const bv = Number(b) || 0;
		const x = mm[0][0] * av + mm[0][1] * bv;
		const y = mm[1][0] * av + mm[1][1] * bv;
		const format = (n) => Number.parseFloat(n).toFixed(4);
		return [[format(x)], [format(y)]];
	}, [numericReflectMatrix, a, b]);

	return (
		<div className="grid items-start justify-items-center min-h-screen gap-4 p-6">
			<h1 className="text-2xl font-semibold">Reflections using matrices</h1>

			<p>Reflect points across axes or lines using 2×2 matrices.</p>

			{/* Axis reflections (corrected labels) */}
			<div className="space-y-2">
                
                <div>
                    Reflection across the x-axis (horizontal line): multiplies by
                    <MatrixDisplayer matrix={[[1, 0], [0, -1]]} />
                </div>
                <span>
                    Example: <MatrixDisplayer matrix={[[1, 0], [0, -1]]} /> *
                    <MatrixDisplayer matrix={[["a"], ["b"]]} /> ={" "}
                    <MatrixDisplayer matrix={[["a"], ["-b"]]} />
                </span>

                <br/>

				<div>
					Reflection across the y-axis (vertical line): multiplies by
					<MatrixDisplayer matrix={[[-1, 0], [0, 1]]} />
				</div>
				<span>
					Example: <MatrixDisplayer matrix={[[-1, 0], [0, 1]]} /> *
					<MatrixDisplayer matrix={[["a"], ["b"]]} /> ={" "}
					<MatrixDisplayer matrix={[["-a"], ["b"]]} />
				</span>
			</div>

            <hr className="w-full" />

			{/* Arbitrary line y = m x */}
			<div className="w-full max-w-xl space-y-2">
				<div>
					Reflection across the line y = m·x has the matrix:
					<span className="ml-2">
						(1 / (1 + m<sup>2</sup>)) ·
						<MatrixDisplayer
							matrix={[
								["1 - m^2", "2m"],
								["2m", "m^2 - 1"],
							]}
						/>
					</span>
				</div>

				{/* interactive inputs */}
				<div className="flex gap-4 items-center">
					<label>
						Slope m:
						<input
							type="number"
							step="any"
							value={m}
							onChange={(e) => setM(e.target.value)}
							className="ml-2 border rounded px-2"
						/>
					</label>

					<label>
						Point x (a):
						<input
							type="number"
							step="any"
							value={a}
							onChange={(e) => setA(e.target.value)}
							className="ml-2 border rounded px-2"
						/>
					</label>

					<label>
						Point y (b):
						<input
							type="number"
							step="any"
							value={b}
							onChange={(e) => setB(e.target.value)}
							className="ml-2 border rounded px-2"
						/>
					</label>
				</div>

				{/* show numeric matrix and transformed point */}
				<div className="flex gap-6 items-center">
					<div>
						<p className="text-sm">Numeric reflection matrix for m = {m}</p>
						<MatrixDisplayer matrix={numericReflectMatrix} />
					</div>

					<div>
						<p className="text-sm">Point before:</p>
						<MatrixDisplayer matrix={[[a], [b]]} />
					</div>

					<div>
						<p className="text-sm">Reflected point:</p>
						<MatrixDisplayer matrix={transformed} />
					</div>
				</div>
			</div>
		</div>
	);
}
