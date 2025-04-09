'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [xCoordinate, setXCoordinate] = useState(0)
  const [yCoordinate, setYCoordinate] = useState(0)

  const [newXCoordinate, setNewXCoordinate] = useState(0)
  const [newYCoordinate, setNewYCoordinate] = useState(0)

  useEffect(() => {
    setNewXCoordinate(0-yCoordinate)
    setNewYCoordinate(xCoordinate)

  },[xCoordinate, yCoordinate])


  return (
    <div className="grid items-center justify-items-center">
      Rotations

      Take a point and rotate 90 degrees
      <span>X <input type="number" value={xCoordinate} onChange={(e) => {setXCoordinate(e.target.value)}}/></span>
      <span>Y <input type="number" value={yCoordinate} onChange={(e) => {setYCoordinate(e.target.value)}}/></span>

      {newXCoordinate}, {newYCoordinate}
    </div>
  );
}