'use client'

import { useState } from "react";

export default function SurfaceAreaCube() {
    const [length, setLength] = useState(0);
    const [surfaceArea, setSurfaceArea] = useState(0);

    function calculateSurfaceArea() {
        setSurfaceArea((length*length) * 6);
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
        <p>Calculate surface area of cube</p>
        <input onChange={(e) => setLength(Number(e.target.value))} type="number" placeholder="Length of one side (L)" className="border p-2 rounded w-64" />
        <button onClick={calculateSurfaceArea} className="bg-blue-500 text-white p-2 rounded w-64">Calculate Surface Area</button>
            <p className="text-lg">Surface Area: <span className="font-bold">{surfaceArea}</span></p>
            <p className="text-sm text-gray-500">Formula: 6 * L^2</p>
            <p className="text-sm text-gray-500">Where L is the length of one side of the cube.</p>
            <p className="text-sm text-gray-500">Note: The surface area of a cube is calculated by multiplying the area of one face (L^2) by 6, since a cube has 6 identical square faces.</p>
            <p className="text-sm text-gray-500">Example: If L = 3, then Surface Area = 6 * (3^2) = 54 square units.</p>
        </div>
    );
}
