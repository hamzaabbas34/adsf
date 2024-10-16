import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SemiDonutChart() {
	const dynamicValue = 80; // Dynamic value to show in the chart
	const remainingValue = 100 - dynamicValue; // Calculate the remaining part to make it 100%

	const data = {
		labels: ["Completed", "Remaining"],
		datasets: [
			{
				data: [dynamicValue, remainingValue],
				backgroundColor: [
					"rgba(169, 223, 216, 0.8)", // First color (80%)
					"rgba(43, 43, 54, 0.8)", // Second color (remaining 20%)
				],
				hoverBackgroundColor: [
					"rgba(169, 223, 216, 1)", // Hover effect for the first color
					"rgba(43, 43, 54, 1)", // Hover effect for the second color
				],
				borderWidth: 0, // No border around segments
			},
		],
	};

	const options = {
		rotation: -90, // Start angle for the semi-donut (top of the chart)
		circumference: 180, // Only show half of the donut
		cutout: "70%", // The thickness of the donut ring
		responsive: true,
		plugins: {
			legend: {
				display: false, // Hide the legend
			},
		},
	};

	return (
		<div className="relative w-full h-full md:w-4/5  ">
			<div className="absolute left-1 top-1 ">
				<h2 className="font-inter">Earnings</h2>
				<p className=" text-[10px] text-white text-opacity-50 ">
					Total Expense
				</p>
				<h2 className="text-[#A9DFD8]">$6078.76</h2>
				<p className=" text-[10px] text-white text-opacity-50">
					Profit is 48% More <br /> than last Month
				</p>
			</div>
			<div className="w-full mx-auto  sm:w-3/4 md:m-auto pt-16">
				<Doughnut data={data} options={options} />
			</div>

			{/* Centered dynamic percentage text */}
			<h2 className="absolute text-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold mt-16 ">
				{dynamicValue}%
			</h2>
		</div>
	);
}
