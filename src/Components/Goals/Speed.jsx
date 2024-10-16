import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icon } from "@iconify/react";
import "./speed.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function FullPieChart() {
	const dynamicValue = 80; // Dynamic value to show in the chart
	const remainingValue = 100 - dynamicValue; // Calculate the remaining part to make it 100%

	const data = {
		labels: ["Completed", "Remaining"],
		datasets: [
			{
				data: [dynamicValue, remainingValue],
				backgroundColor: [
					// Apply gradient directly to segments if needed
					"rgba(200, 200, 200, 0.5)",
					// First color (80%)
					"rgba(0, 0, 0, 0.3)", // Second color (remaining 20%)
				],

				hoverBackgroundColor: [
					"#3BE3E3", // Hover effect for the first color
					"rgba(0, 0, 0, 0.3)", // Hover effect for the second color
				],
				borderWidth: 0, // No border around segments
			},
		],
	};

	const options = {
		cutout: "88%", // Adjust cutout as needed for thickness
		responsive: true,
		plugins: {
			legend: {
				display: false, // Hide the legend
			},
		},
		elements: {
			arc: {
				borderWidth: 0, // No border around segments
				borderRadius: (ctx) => {
					const value = ctx.chart.data.datasets[0].data[ctx.index];
					return value === dynamicValue ? 20 : 0; // Set border radius only for dynamic value
				},
			},
		},
	};

	return (
		<div className="relative w-full h-full">
			<div className="absolute left-1 top-1 p-4 ">
				<h2 className="font-inter">Satisfaction Rate</h2>
				<p className="text-[10px] text-white text-opacity-50 ">
					From all projects
				</p>
			</div>
			<div className="w-full sm:w-3/4 md:w-[50%] xl:w-full lg:w-[50%] myh    m-auto flex justify-center items-center h-full 2xl:px-10 xl:px-20  px-5 pt-5">
				<Doughnut data={data} options={options} />
			</div>

			{/* Centered dynamic percentage text */}
			<div className=" w-[90%]  absolute text-3xl left-1/2 bottom-16 sm:bottom-6 lg:bottom-10 transform -translate-x-1/2 -translate-y-0 font-bold m-xa  ">
				<div className="flex flex-col gap-4">
					<div className="flex justify-center items-center">
						<Icon icon="proicons:emoji-laughter" style={{ color: "white" }} />
					</div>
					<div className="xl:w-2/3 md:w-2/5 w-full mx-auto  ">
						<div
							className="flex justify-between items-start  py-3 px-4 rounded-md"
							style={{
								background:
									"linear-gradient(to bottom, #202125 0%, #414141 100%)", // Static gradient line
								boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
							}}>
							<p className="text-[12px] text-white text-opacity-50">0%</p>
							<h2 className="text-white">{dynamicValue}%</h2>
							<p className="text-[12px] text-white text-opacity-50">100%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
