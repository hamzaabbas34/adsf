import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
	Legend
);

const AreaChart2 = () => {
	const chartRef = useRef(null);

	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Sales", // Label for the area chart
				data: [18, 12, 6, 9, 12, 3, 9],
				backgroundColor: "rgba(59, 227, 227, 0.5)", // Temporary color for the area
				borderColor: "inherit", // Darker blue for the line
				borderWidth: 0,
				fill: true, // This makes it an area chart
				tension: 0.4, // Smoothing effect for the curve
			},
			{
				label: "Returns", // Label for the returns area
				data: [5, 2, 3, 1, 4, 1, 2],
				backgroundColor: "rgba(43, 43, 54, 0.5)", // Temporary color for the area
				borderColor: "#2B2B36", // Darker color for the line
				borderWidth: 0,
				fill: true, // This makes it an area chart
				tension: 0, // Smoothing effect for the curve
			},
		],
	};

	// Configuration for the area chart
	const options = {
		scales: {
			x: {
				title: {
					display: false,
					text: "Days of the Week",
					color: "#fff",
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: false,
					text: "Counts",
					color: "#fff",
				},
			},
		},
		plugins: {
			legend: {
				display: false,
				position: "top",
				labels: {
					color: "#fff", // Legend text color
				},
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
	};

	// Function to create a linear gradient
	const createGradient = (ctx, chartArea) => {
		if (!chartArea) return;
		const { top, bottom } = chartArea;

		const gradient = ctx.createLinearGradient(0, top, 0, bottom);
		gradient.addColorStop(0, "rgba(126, 125, 125, 0.5)"); // Color 7E7D7D
		gradient.addColorStop(1, "rgba(65, 65, 65, 0.5)"); // Color 414141

		return gradient;
	};

	// Use effect to set the gradient on the chart
	useEffect(() => {
		if (chartRef.current) {
			const chartInstance = chartRef.current;

			const ctx = chartInstance.ctx;
			const chartArea = chartInstance.chartArea;

			// Set the gradient as the backgroundColor for the datasets
			data.datasets[0].backgroundColor = createGradient(ctx, chartArea);
			data.datasets[1].backgroundColor = createGradient(ctx, chartArea);
		}
	}, [data]);

	return (
		<div
			style={{
				backgroundColor: "#202125",
				padding: "10px",
				height: "100%",
				borderRadius: "10px",
				position: "relative",
			}}>
			<h2 style={{ color: "#fff" }}>Weekly Sales and Returns Area Chart</h2>
			<p className="text-[12px] py-2">
				<span className="text-[#07C36F]">(+5) more</span> in 2021
			</p>
			<div className="w-full sm:w-full h-full py-10">
				{/* Set a specific height here */}
				<Line ref={chartRef} data={data} options={options} />
			</div>
		</div>
	);
};

export default AreaChart2;
