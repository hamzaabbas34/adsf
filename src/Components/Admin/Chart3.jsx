import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler
);

// Chart options
const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		tooltip: {
			enabled: true, // Enable tooltips
		},
		legend: {
			display: false, // Remove the legend
		},
		title: {
			display: false, // Remove the title
		},
	},
	scales: {
		x: {
			display: false, // Hide x-axis labels and grid lines
			grid: {
				display: false, // Hide x-axis grid lines
			},
		},
		y: {
			display: false, // Hide y-axis labels and grid lines
			grid: {
				display: false, // Hide y-axis grid lines
			},
			min: 1.4,
			max: 1.5,
		},
	},
};

// First chart data
const data1 = {
	labels: [
		"",
		"Jan 22",
		"",
		"",
		"Apr 22",
		"",
		"",
		"Jul 22",
		"",
		"Sep 22",
		"",
		"",
		"Dec 22",
		"",
	],
	datasets: [
		{
			fill: true,
			data: [
				1.26, 1.42, 1.42, 1.44, 1.46, 1.42, 1.41, 1.47, 1.42, 1.43, 1.41, 1.45,
				1.43, 1.46,
			],
			borderWidth: 0,
			backgroundColor: (context) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);

				// Define color stops
				gradient.addColorStop(0.5, "rgba(242, 200, 237, 0.8)"); // #F2C8ED with 80% opacity
				gradient.addColorStop(1, "rgba(29, 30, 38, 0.8)"); // #1D1E26 with 80% opacity

				return gradient;
			},

			pointRadius: 3,
		},
	],
};

// Second chart data
const data2 = {
	labels: [
		"",
		"Jan 22",
		"",
		"",
		"Apr 22",
		"",
		"",
		"Jul 22",
		"",
		"Sep 22",
		"",
		"",
		"Dec 22",
		"",
	],
	datasets: [
		{
			fill: true,
			data: [
				1.48, 1.45, 1.43, 1.47, 1.44, 1.46, 1.43, 1.48, 1.44, 1.45, 1.42, 1.44,
				1.41, 1.43,
			],
			borderWidth: 0,
			backgroundColor: (context) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);
				gradient.addColorStop(0, "rgba(169, 223, 216, 0.8)"); // Start color #A9DFD8 with 80% opacity
				gradient.addColorStop(1, "rgba(169, 223, 216, 0.0)");
				return gradient;
			},
			pointRadius: 3,
		},
	],
};

export default function AreaChart3() {
	return (
		<div className="sm:w-full  h-full relative my-4  w-full   ">
			{/* First Chart with absolute positioning */}
			<div className="absolute top-[-30px] left-0 w-full h-[200px] ">
				<Line options={options} data={data1} responsive />
			</div>

			{/* Second Chart */}
			<div className=" relative w-full sm:h-[250px] h-auto mt-10">
				<Line options={options} data={data2} responsive />
			</div>
		</div>
	);
}
