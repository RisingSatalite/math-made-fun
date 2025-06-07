'use client'

import { useState } from "react";
import SurfaceAreaCube from "@/components/surfaceAreaCube";
import SurfaceAreaRectangularPrism from "@/components/surfaceAreaRectangularPrism";

export default function Home() {

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>Calculate surface area of shapes</p>
      <SurfaceAreaCube/>
      <SurfaceAreaRectangularPrism/>
      <p>L * W = A</p>
      <p>2 * (L * W + L * H + W * H) = SA of a cube</p>
      <p>2 * (L * W + L * H + W * H) = SA of a cuboid</p>
      <p>2 * π * r * (r + h) = SA of a cylinder</p>
      <p>π * r^2 + π * r * l = SA of a cone</p>
      <p>4 * π * r^2 = SA of a sphere</p>
      <p>4 * π * r^2 = SA of a hemisphere</p>
      <p>When using more complex shape, more advance or custom formulas, will be needed, so always be ready to take parts and combine</p>
    </div>
  );
}
