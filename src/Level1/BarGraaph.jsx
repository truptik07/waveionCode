import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
   
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bar Graph',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

   
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Graph</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
