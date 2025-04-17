'use client'

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'

//import XYGraph from "@/components/plotlyXYGraph";
const XYGraph = dynamic(() => import('@/components/plotlyXYGraph'), {
  ssr: false
})

export default function Home() {
  const [xCoordinate, setXCoordinate] = useState(0)
  const [yCoordinate, setYCoordinate] = useState(0)

  const [newXCoordinate, setNewXCoordinate] = useState(0)
  const [newYCoordinate, setNewYCoordinate] = useState(0)

  const [pointData, setPointData] = useState([])

  useEffect(() => {
    setNewXCoordinate(0-yCoordinate)
    setNewYCoordinate(xCoordinate)

    setPointData([{
      x: [Number(xCoordinate)],
      y: [Number(yCoordinate)],
      mode: 'markers',
      type: 'scatter',
      name: 'Original point',
      marker: { size: 10, color: "black" }
    },{
      x: [Number(0-yCoordinate)],
      y: [Number(xCoordinate)],
      mode: 'markers',
      type: 'scatter',
      name: 'Rotated 90 degrees',
      marker: { size: 10, color: "blue" }
    }])
  },[xCoordinate, yCoordinate])

  /*Example data
  [
  {
    x: [x],
    y: [y],
    mode: 'markers',
    type: 'scatter',
    name: `(${x},${y})`,
    marker: { size: 10, color: "black" }
  },
  *** Add other in new {} brackets
  ]
  */

  return (
    <div className="grid items-center justify-items-center">
      Rotations

      Take a point and rotate 90 degrees
      <span>X <input type="number" value={xCoordinate} onChange={(e) => {setXCoordinate(e.target.value)}}/></span>
      <span>Y <input type="number" value={yCoordinate} onChange={(e) => {setYCoordinate(e.target.value)}}/></span>

      New coorindates after rotated 90 degrees. Remember it is counter clockwise.
      {newXCoordinate}, {newYCoordinate}
      <XYGraph data={pointData}/>
    </div>
  );
}