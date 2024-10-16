// // BarChart.js
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// } from "chart.js";

// // Register the required components
// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend
// );

// const BarChart = () => {
// 	const data = {
// 		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
// 		datasets: [
// 			{
// 				label: "", // This will hide the label in the legend
// 				data: [18, 12, 6, 9, 12, 3, 9],
// 				backgroundColor: "#3BE3E3", // Red color for sales

// 			},
// 			{
// 				label: "", // This will hide the label in the legend
// 				data: [5, 2, 3, 1, 4, 1, 2],
// 				backgroundColor: "#2B2B36", // White color for returns

// 			},
// 		],
// 	};

// 	// Configuration for the bar chart
// 	const config = {
// 		type: "bar",
// 		data,
// 		options: {
// 			scales: {
// 				x: {
// 					stacked: true,
// 				},
// 				y: {
// 					stacked: true,
// 					beginAtZero: true,
// 				},
// 			},
// 			plugins: {
// 				legend: {
// 					display: false, // This will hide the entire legend if needed
// 				},
// 				// Add a background color
// 				tooltip: {
// 					backgroundColor: "#202125", // Tooltip background color
// 				},
// 			},
// 			layout: {
// 				padding: {
// 					left: 20,
// 					right: 20,
// 					top: 20,
// 					bottom: 20,
// 				},
// 			},
// 		},
// 	};

// 	return (
// 		<div style={{ backgroundColor: "#202125", padding: "20px" }}>
// 			<h2 style={{ color: "#fff" }}>Weekly Sales and Returns Bar Chart</h2>
// 			<Bar data={data} options={config.options} />
// 		</div>
// 	);
// };

// export default BarChart;

// BarChart.js
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

const BarChart = () => {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "", // This will hide the label in the legend
				data: [18, 12, 6, 9, 12, 3, 9],
				backgroundColor: "#3BE3E3", // Blue color for sales
			},
			{
				label: "", // This will hide the label in the legend
				data: [5, 2, 3, 1, 4, 1, 2],
				backgroundColor: "#2B2B36", // Dark color for returns
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
				},
				y: {
					stacked: true,
					beginAtZero: true,
				},
			},
			plugins: {
				legend: {
					display: false, // This will hide the entire legend if needed
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
			responsive: true, // Ensure the chart is responsive
			maintainAspectRatio: false, // Prevent aspect ratio maintenance to use full height
		},
	};

	return (
		<div
			style={{
				backgroundColor: "#202125",
				padding: "10px",
				height: "99% ",
				borderRadius: "10px",
				position: "relative",
			}}>
			<h2  className='text-2xl p-8' style={{ color: "#fff" }}>Level</h2>
			<div className=" w-full sm:w-full md:h-[500px] h-[300px] ">
				{" "}
				{/* Set a specific height here */}
				<Bar data={data} options={config.options} />
			</div>
		</div>
	);
};

export default BarChart;
