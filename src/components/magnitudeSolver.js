'use client'
import { useEffect, useState } from "react";
import Get_Vector from "./get_vector";

export default function Magnitude_solver() {
  const [vector1, setVector1] = useState([1,2,3]);
  const [magnitude, setMagnitude] = useState([]);

  const handleChildData = (data) => {
    console.log(vector1)
    console.log(data)
    setVector1(data);
  };

  useEffect(() => {
    let answer = 0
    for (let i = 0; i < vector1.length; i++) {
            answer += (vector1[i] * vector1[i]);
        }
    setMagnitude(answer);

  },[vector1]);

  return (
    <div className="grid items-center justify-items-center">
        Magnitude solver
        <Get_Vector sendDataToParent={handleChildData}/>
        <p>Magnitude: sqrt({magnitude}) or {Math.sqrt(magnitude)}</p>
    </div>
  );
}