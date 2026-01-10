'use client'

import React, { useState, useRef, useEffect } from "react";
import MatrixDisplayer from "@/components/matrixDisplayer";

export default function Rotations() {
	const [angleDeg, setAngleDeg] = useState(45);
	const [vec, setVec] = useState({ x: 1, y: 0 });
	const [animating, setAnimating] = useState(false);

	const rafRef = useRef(null);
	const angleRef = useRef(angleDeg);

	useEffect(() => {
		angleRef.current = angleDeg;
	}, [angleDeg]);

	useEffect(() => {
		if (!animating) {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
				rafRef.current = null;
			}
			return;
		}
		let last = performance.now();
		const loop = (t) => {
			const dt = (t - last) / 1000;
			last = t;
			// rotate 45 deg per second as default speed
			setAngleDeg((a) => (a + 45 * dt) % 360);
			rafRef.current = requestAnimationFrame(loop);
		};
		rafRef.current = requestAnimationFrame(loop);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
		};
	}, [animating]);

	const toRad = (d) => (d * Math.PI) / 180;
	const rad = toRad(angleDeg);
	const c = Math.cos(rad);
	const s = Math.sin(rad);

	const matrixNumeric = [
		[Number(c.toFixed(6)), Number((-s).toFixed(6))],
		[Number(s.toFixed(6)), Number(c.toFixed(6))],
	];

	const rotate = (m, v) => {
		return {
			x: m[0][0] * v.x + m[0][1] * v.y,
			y: m[1][0] * v.x + m[1][1] * v.y,
		};
	};

	const rotated = rotate(matrixNumeric, vec);

	const format = (n) => {
		if (Number.isInteger(n)) return n.toString();
		return Number(n).toFixed(3);
	};

	const size = 300;
	const center = size / 2;
	const scale = 60;

	return (
		<div className="grid items-center justify-items-center min-h-screen gap-4 p-4">
			<p>Rotation a matrix around a point can be useful for computer 3d graph, physic, designing and engineering parts.</p>
			<p>To rotate, we can use the below formula</p>
			<MatrixDisplayer matrix={[["cosθ","-sinθ"],["sinθ","cosθ"]]}/>
			<p>If you want to rotate it clockwise, you make your θ negative, because positive θ rotate counter clockwise by default</p>

			<div className="text-center">
				<h2 className="text-xl font-semibold">Rotations</h2>
				<p className="text-sm">Rotate a vector using the rotation matrix</p>
			</div>

			<div className="flex gap-4 flex-col sm:flex-row items-center">
				<div className="space-y-2">
					<label>
						Angle (deg)
						<input
							type="range"
							min={-360}
							max={360}
							value={angleDeg}
							onChange={(e) => setAngleDeg(Number(e.target.value))}
						/>
					</label>
					<label>
						Angle:
						<input
							type="number"
							value={angleDeg}
							onChange={(e) => setAngleDeg(Number(e.target.value))}
							className="ml-2 w-20"
						/>
						° 
					</label>

					<div>
						<label>
							Vector x:
							<input
								type="number"
								step="0.1"
								value={vec.x}
								onChange={(e) => setVec((v) => ({ ...v, x: Number(e.target.value) }))}
								className="ml-2 w-20"
							/>
						</label>
						<label className="ml-4">
							Vector y:
							<input
								type="number"
								step="0.1"
								value={vec.y}
								onChange={(e) => setVec((v) => ({ ...v, y: Number(e.target.value) }))}
								className="ml-2 w-20"
							/>
						</label>
					</div>

					<div className="flex gap-2">
						<button onClick={() => setAnimating((a) => !a)} className="px-3 py-1 border">
							{animating ? "Stop" : "Animate"}
						</button>
						<button
							onClick={() => {
								setAngleDeg(0);
								setVec({ x: 1, y: 0 });
							}}
							className="px-3 py-1 border"
						>
							Reset
						</button>
					</div>
				</div>

				<div className="space-y-2">
					<p>Symbolic rotation matrix:</p>
					<MatrixDisplayer matrix={[["cosθ", "-sinθ"], ["sinθ", "cosθ"]]} />

					<p>Numeric rotation matrix (θ = {format(angleDeg)}°):</p>
					<MatrixDisplayer
						matrix={[
							[format(matrixNumeric[0][0]), format(matrixNumeric[0][1])],
							[format(matrixNumeric[1][0]), format(matrixNumeric[1][1])],
						]}
					/>
					<p>
						Original vector: [{format(vec.x)}, {format(vec.y)}] → Rotated: [{format(rotated.x)},{format(rotated.y)}]
					</p>
				</div>
			</div>

			{/* SVG visualization */}
			<div>
				<svg width={size} height={size} className="border">
					{/* axes */}
					<line x1={0} y1={center} x2={size} y2={center} stroke="#ddd" />
					<line x1={center} y1={0} x2={center} y2={size} stroke="#ddd" />

					{/* original vector (blue) */}
					<line
						x1={center}
						y1={center}
						x2={center + vec.x * scale}
						y2={center - vec.y * scale}
						stroke="#2563eb"
						strokeWidth={3}
						markerEnd="url(#arrow)"
					/>
					{/* rotated vector (red) */}
					<line
						x1={center}
						y1={center}
						x2={center + rotated.x * scale}
						y2={center - rotated.y * scale}
						stroke="#dc2626"
						strokeWidth={3}
						markerEnd="url(#arrow)"
					/>

					{/* markers and labels */}
					<defs>
						<marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
							<path d="M0,0 L10,5 L0,10 z" fill="#000" />
						</marker>
					</defs>

					<text x={10} y={20} fontSize={12} fill="#2563eb">
						Original
					</text>
					<text x={10} y={36} fontSize={12} fill="#dc2626">
						Rotated
					</text>
				</svg>
			</div>
		</div>
	);
}
