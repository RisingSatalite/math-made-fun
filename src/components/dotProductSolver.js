'use client'
import { useEffect, useState } from "react";
import Get_Vector from "./get_vector";
import VectorDisplayerHorizontal from "./vectorDisplayHorizontal";

export default function Dot_product_solver() {
  const [vector1, setVector1] = useState([1,2,3]);
  const [vector2, setVector2] = useState([]);
  const [dotProduct, setDotProduct] = useState([]);

  const handleChildData = (data) => {
    console.log(vector1)
    console.log(data)
    setVector1(data);
  };

  const handleChildData2 = (data) => {
    setVector2(data);
  };

  useEffect(() => {
    if(vector1.length != vector2.length){
        setDotProduct("The 2 vector have different lenght, and therefor no dot product")
    }else if(vector1.length <= 0){
        setDotProduct("Vectors are empty")
    }else{
        var answer = 0
        for (let i = 0; i < vector1.length; i++) {
            answer += (vector1[i] * vector2[i]);
        }
        setDotProduct(answer);
    }

  },[vector1, vector2]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Solver Projections
        <Get_Vector sendDataToParent={handleChildData}/>
        <Get_Vector sendDataToParent={handleChildData2}/>
        <p>Dot product{dotProduct}</p>
    </div>
  );
}