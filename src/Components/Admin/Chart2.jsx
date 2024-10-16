import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

// Chart options
const options = {
	responsive: true,
	maintainAspectRatio: false, // Allows the chart to take the height of its container
	plugins: {
		title: {
			display: true, // Enable the title
			text: "Sales Data Over 2022", // Title text
			color: "#fff", // Title color
			font: {
				size: 16, // Title font size
				weight: "bold", // Title font weight
			},
			padding: {
				top: 10,
				bottom: 30,
			},
			align: "start",
		},
		tooltip: {
			enabled: true, // Enable tooltips
		},
		legend: {
			display: false, // Hide the legend
		},
	},
	scales: {
		x: {
			display: true, // Show the x-axis
			grid: {
				display: false, // Hide x-axis grid lines
			},
		},
		y: {
			display: true, // Show the y-axis
			grid: {
				color: "inherit", // Grid line color for the y-axis
			},
			min: 1.4,
			max: 1.5,
		},
	},
};

// Chart data
const labels = [
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
];

export const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: "Dataset 2",
			data: [
				1.48, 1.47, 1.435, 1.445, 1.423, 1.445, 1.45, 1.46, 1.435, 1.47, 1.48,
				1.44, 1.432, 1.45,
			],
			borderWidth: 0, // Remove the line by setting borderWidth to 0
			backgroundColor: (context) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 300); // Create a vertical gradient

				// Define color stops
				gradient.addColorStop(0, "rgba(169, 223, 216, 0.8)"); // Start color #A9DFD8 with 80% opacity
				gradient.addColorStop(1, "rgba(169, 223, 216, 0.0)"); // End color #A9DFD8 with 10% opacity

				return gradient; // Return the gradient for use as background color
			},

			pointRadius: 3, // Set point radius
		},
	],
};

export default function AreaChart() {
	return (
		<div className="w-full h-full">
			<div className="h-[300px] relative">
				<Line options={options} data={data} />
			</div>
		</div>
	);
}
