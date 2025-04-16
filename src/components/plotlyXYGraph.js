'use client'

import Plot from 'react-plotly.js';

export default function XYGraph() {
  return (
    <div className="grid items-center justify-items-center">
      <Plot
        data={[
          
        ]}
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