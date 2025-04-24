// src/components/MiniChart.jsx
import React from 'react';

const MiniChart = ({ symbol, change7d }) => {
  // This would normally load a proper chart from a charting library
  // For now, we'll use a simple static SVG based on the trend
  const isPositive = change7d > 0;
  
  return (
    <div className="mini-chart">
      <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <path
          d={isPositive 
            ? "M0,35 C10,32 20,25 30,28 C40,31 50,15 60,10 C70,5 80,15 90,10 C100,5 110,2 120,0" 
            : "M0,5 C10,10 20,15 30,10 C40,5 50,20 60,25 C70,30 80,15 90,20 C100,25 110,32 120,35"}
          stroke={isPositive ? "#28a745" : "#dc3545"}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default MiniChart;