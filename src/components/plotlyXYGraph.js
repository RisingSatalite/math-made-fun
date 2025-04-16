'use client'

import Plot from 'react-plotly.js';

export default function XYGraph({data}) {

  console.log(data)
  
  /*Example data format
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
      <Plot
        data={data}
        layout={{
          width: 600,
          height: 600,
          title: 'Simple XY Graph',
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' },
        }}
      />
    </div>
  );
}