'use client'

import { useEffect, useState } from "react";
import XYGraph from "@/components/plotlyXYGraph";

export default function Home() {
  const [xCoordinate, setXCoordinate] = useState(0)
  const [yCoordinate, setYCoordinate] = useState(0)

  const [name, setName] = useState("")

  const [pointData, setPointData] = useState([])

  const addPoint = () => {
    setPointData([...pointData,{
      x: [Number(xCoordinate)],
      y: [Number(yCoordinate)],
      mode: 'markers',
      type: 'scatter',
      name: name,
      marker: { size: 10, color: "black" }
    }])
  }

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
      Enter 2 point to add the graph below
      <span>X: <input type="number" value={xCoordinate} onChange={(e) => {setXCoordinate(e.target.value)}}/></span>
      <span>Y: <input type="number" value={yCoordinate} onChange={(e) => {setYCoordinate(e.target.value)}}/></span>

      <span>Name: <input onChange={(e) => {setYCoordinate(e.target.value)}}/></span>

      <button onClick={addPoint()}>Add point</button>

      <XYGraph data={pointData}/>
    </div>
  );
}