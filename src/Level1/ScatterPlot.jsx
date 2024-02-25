import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterPlot = () => {
   
  const data = {
    datasets: [
      {
        label: 'Scatter Plot',
        backgroundColor: 'rgba(75,192,192,0.4)',
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 },
        ],
      },
    ],
  };

   
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return (
    <div>
      <h2>Scatter Plot</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ScatterPlot;
