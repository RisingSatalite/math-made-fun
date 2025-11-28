'use client'
import { useEffect, useState } from "react";
import Get_Vector from "./get_vector";
import VectorDisplayerHorizontal from "./vectorDisplayHorizontal";

export default function Projection_solver() {
  const [vector1, setVector1] = useState([1,2,3]);
  const [vector2, setVector2] = useState([]);
  const [projection, setProjection] = useState([]);

  const handleChildData = (data) => {
    console.log(vector1)
    console.log(data)
    setVector1(data);
  };

  const handleChildData2 = (data) => {
    setVector2(data);
  };

  useEffect(()=>{
    if(vector1.length != vector2.length){
        setProjection("The 2 vector have different lenght, and therefor no dot product")
        return
    }else if(vector1.length <= 0){
        setProjection("Vectors are empty")
        return
    }


    let mag = 0
    for (let i = 0; i < vector2.length; i++) {
      mag += (vector2[i] * vector2[i]);
    }

    var dotProduct = 0
    for (let i = 0; i < vector1.length; i++) {
      dotProduct += (vector1[i] * vector2[i]);
    }

    var projection = []
    for (let i = 0; i < vector2.length; i++) {
      projection.push(dotProduct * vector2[i] / mag);
    }

    setProjection(projection)


  },[vector1, vector2])

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16">
        Solver Projections
        <Get_Vector sendDataToParent={handleChildData}/>
        <Get_Vector sendDataToParent={handleChildData2}/>
        <p>Proj<sub>B</sub>A, A = {vector1}, B = {vector2}</p>
        <VectorDisplayerHorizontal vector={[...projection]}/>
    </div>
  );
}