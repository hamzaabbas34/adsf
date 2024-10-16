import React from "react";
import { Icon } from "@iconify/react";
import person1 from "../../Assets/Images/person1.png";
import BarChart from "./Chart";
import Table from "./Table/Table";
import Chart2 from "./Chart2";
import AreaChart3 from "./Chart3";
import SemiDonutChart from "./PieChart";
import "./admin.css";
import Nav from "../Navbar/Nav";
import Nan2 from "../Navbar/Nan2";

export default function Admin() {
	return (
		<div className=" bg-red-000 w-full overflow-hidden ">
			<Nav person1={person1} pagename="Admin" />
			<Nan2 />

			{/* Search and Add Agent Section */}

			<div className="grid  grid-cols-12  gap-6  font-inter text-white md:px-10 px-4 overflow-hidden">
				<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12 overflow-hidden  ">
					<div className="bg-[#202125] px-4 py-6 rounded-md">
						<div className="text-white my-4">
							<h2 className="text-2xl">Today’s Sales</h2>
							<p className="text-[15px] text-opacity-50  text-white">
								Sales Summary
							</p>
						</div>
						<div className="grid lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1   gap-3">
							<div className=" w-full bg-[#171821] rounded-md ">
								<div className=" px-3 py-3  ">
									<Icon
										icon="hugeicons:analytics-01"
										style={{ color: "#FEB95A" }}
										className=" text-5xl "
									/>

									<h2 className="text-3xl my-2">$5k</h2>
									<p className="text-[14px]">Total Sales</p>
									<p className="text-[12px] text-[#FEB95A]">
										+10% from yesterday
									</p>
								</div>
							</div>
							<div className=" w-full bg-[#171821] rounded-md ">
								<div className=" px-3 py-3 ">
									<Icon
										icon="teenyicons:battery-charge-outline"
										style={{ color: "#A9DFD8" }}
										className="text-5xl -rotate-90"
									/>
									<h2 className="text-3xl my-2">500</h2>
									<p className="text-[14px]">Total Order</p>
									<p className="text-[12px] text-[#A9DFD8]">
										+10% from yesterday
									</p>
								</div>
							</div>
							<div className=" w-full bg-[#171821] rounded-md ">
								<div className=" px-3 py-3 ">
									<Icon
										icon="iconoir:shopping-bag-arrow-down"
										style={{ color: "#F2C8ED" }}
										className="text-5xl"
									/>
									<h2 className="text-3xl my-2">9</h2>
									<p className="text-[14px]">Product Sold</p>
									<p className="text-[12px] text-[#F2C8ED]">
										+2% from yesterday
									</p>
								</div>
							</div>
							<div className=" w-full bg-[#171821] rounded-md ">
								<div className=" px-3 py-3 ">
									<Icon
										icon="ant-design:user-add-outlined"
										style={{ color: "#20AEF3" }}
										className="text-5xl "
									/>
									<h2 className="text-3xl my-2">12</h2>
									<p className="text-[14px]">New Customer</p>
									<p className="text-[12px] text-[#20AEF3]">
										+3% from yesterday
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className=" my-2 w-100  ">
						<Table />
					</div>
				</div>
				<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12 ">
					<BarChart />
				</div>
				<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12 ">
					<Chart2 />
				</div>
				<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12  grid grid-cols-12  gap-6 mt-8">
					<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12 ">
						<AreaChart3 />
					</div>
					<div className="xl:col-span-6 lg:col-span-12 md:col-span-12 col-span-12 ">
						<SemiDonutChart />
					</div>
				</div>
			</div>
		</div>
	);
}
