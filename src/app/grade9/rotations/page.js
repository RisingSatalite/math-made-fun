'use client'

import { useState } from "react";

export default function Home() {
  const [coorindates, setCoorindates] = useState("")
  const [xCoordinate, setXCoordinate] = useState(0)
  const [yCoordinate, setYCoordinate] = useState(0)

  const [newXCoordinate, setNewXCoordinate] = useState(0)
  const [newYCoordinate, setNewYCoordinate] = useState(0)


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Math made fun

      Rotations

      take point and rotate 90 degrees
      <input type="number" value={xCoordinate} onChange={(e) => {setXCoordinate(e.target.value)}}/>
      <input type="number" value={yCoordinate} onChange={setYCoordinate}/>

      {newXCoordinate}, {newYCoordinate}
    </div>
  );
}