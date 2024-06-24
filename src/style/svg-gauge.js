import React from 'react';
import GaugeChart from 'react-svg-gauge';

const Gauge = ({ value, label }) => {
  return (
    <GaugeChart
      value={value}
      label={''}
      width={200}
      height={150}
      fontSize={'24px'}
      color="#007bff"
    />
  );
};

export default Gauge;