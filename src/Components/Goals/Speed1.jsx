import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Icon } from "@iconify/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FullPieChart() {
	const dynamicValue = 93; // Dynamic value to show in the chart

	const data = {
		datasets: [
			{
				data: [dynamicValue, 100 - dynamicValue],
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
			<div className="absolute left-1 top-[-25px] px-4 flex flex-col   gap-2 w-full">
				<div className="flex items-center justify-between">
					<h2 className="font-inter md:text-[18px] ">Referral Tracking</h2>
					<button className="text-[30px] text-white text-opacity-50  ">
						<Icon
							icon="solar:menu-dots-square-linear"
							style={{ color: "white" }}
						/>
					</button>
				</div>
				<div
					className=" w-full flex gap-2  mt-2  
				 ">
					<div
						className="w-1/2  p-2  rounded-md "
						style={{
							background:
								"linear-gradient(to bottom, #202125 0%, #414141 100%)", // Static gradient line
							boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
						}}>
						<h2 className="font-inter md:text-[15px]  "> Invited</h2>
						<p className="text-[12px] text-white text-opacity-50 leading-1 ">
							Total Score
						</p>
					</div>
					<div
						className="w-1/2 p-2  rounded-md "
						style={{
							background:
								"linear-gradient(to bottom, #202125 0%, #414141 100%)", // Static gradient line
							boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Optional shadow for depth
						}}>
						<h2 className="font-inter md:text-[15px]  "> Invited</h2>
						<p className="text-[12px] text-white text-opacity-50 leading-1 ">
							Total Score
						</p>
					</div>
				</div>
			</div>
			<div className=" xl:w-4/5 mywi  lg:w-[33%] md:w-[50%] sm:w-[300px]   m-auto flex justify-center items-center h-full   px-2 lg:px-0 pt-5 mt-10">
				<Doughnut data={data} options={options} />
			</div>

			{/* Centered dynamic percentage text */}
			<div className="absolute text-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold  text-center  ">
				<p className="text-[12px] text-white text-opacity-50 leading-1 ">
					Safety
				</p>
				<h2 className="text-white leading-1">{dynamicValue}</h2>
				<p className="text-[12px] text-white text-opacity-50 leading-1 ">
					Total Score
				</p>
			</div>
		</div>
	);
}
