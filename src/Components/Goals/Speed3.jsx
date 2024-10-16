import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart2 = () => {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "", // Hide label in legend
				data: [5, 2, 3, 1, 4, 1, 2],
				backgroundColor: "rgba(200, 200, 200, 0.5)", // Default background color
				hoverBackgroundColor: "#3BE3E3", // Color on hover (LimeGreen color)
			},
		],
	};

	// Configuration for the bar chart
	const config = {
		type: "bar",
		data,
		options: {
			scales: {
				x: {
					stacked: true,
					ticks: {
						display: false, // Remove x-axis labels
					},
					barThickness: 5, // Set the thickness of the bars to 5px
					maxBarThickness: 5, // Ensure the maximum thickness of the bars is 5px
					categoryPercentage: 1.0, // Use full width for each category
					barPercentage: 1.0, // Use full width for each dataset in a category
				},
				y: {
					stacked: true,
					beginAtZero: true,
					min: 0, // Minimum value of y-axis
				},
			},
			plugins: {
				legend: {
					display: false, // Hide the entire legend
				},
				tooltip: {
					backgroundColor: "#202125", // Tooltip background color
				},
			},
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 20,
					bottom: 20,
				},
			},
			hover: {
				mode: "dataset", // Highlight entire dataset on hover
				animationDuration: 300, // Set animation duration on hover
			},
			responsive: true, // Ensure the chart is responsive
			maintainAspectRatio: false, // Prevent aspect ratio maintenance
		},
	};

	// Set minBarLength in the options for the y scale
	config.options.scales.y.minBarLength = 15; // Set minimum bar length to 15 pixels

	return (
		<div
			style={{
				backgroundColor: "#202125",
				padding: "10px",
				height: "100%",
				borderRadius: "10px",
				position: "relative",
			}}>
			<div className="w-full sm:w-full h-full">
				<Bar data={data} options={config.options} />
			</div>
		</div>
	);
};

export default BarChart2;
