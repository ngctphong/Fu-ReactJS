import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = ({ dataPoints }) => {
	const dataPointsValue = dataPoints.map(dataPoint => dataPoint.value);
	const totalMaximum = Math.max(...dataPointsValue);

	return (
		<div className='chart'>
			{dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
