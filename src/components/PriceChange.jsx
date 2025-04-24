// src/components/PriceChange.jsx
import React from 'react';

const PriceChange = ({ value }) => {
  const isPositive = value > 0;
  const isZero = value === 0;
  const textClass = isPositive ? 'text-success' : isZero ? 'text-secondary' : 'text-danger';
  const icon = isPositive ? '▲' : isZero ? '-' : '▼';

  return (
    <span className={textClass}>
      {icon} {Math.abs(value).toFixed(2)}%
    </span>
  );
};

export default PriceChange;