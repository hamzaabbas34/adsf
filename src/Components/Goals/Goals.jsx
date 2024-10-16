import React from "react";
import { Icon } from "@iconify/react";
import person1 from "../../Assets/Images/person1.png";
import fish from "../../Assets/Images/gillafish.png";
import Nav from "../Navbar/Nav.jsx";
import Speed from "./Speed.jsx";
import Speed1 from "./Speed1.jsx";

import "./goals.css";
import BarChart2 from "./Speed3.jsx";
import AreaChart2 from "./Speed4.jsx";
import Table from "./Table.jsx";
function Goals() {
	return (
		<div className=" overflow-hidden">
			{/* Navbar Section */}
			<Nav person1={person1} pagename={"Goals"} />
			<div className="md:px-10 px-4 py-5 flex  flex-wrap justify-between items-center">
				<div>
					<h2 className="font-inter sm:text-2xl text-[20px] mb-3 text-white">
						Admin Dashboard
					</h2>
				</div>
				<div className="flex gap-4 flex-wrap">
					<div className="relative">
						<div className="absolute top-3 left-3">
							<Icon
								icon="lucide:search"
								width="2rem"
								height="2rem"
								style={{ color: "black" }}
							/>
						</div>
						<input
							type="text"
							placeholder="Search "
							className=" w-full px-16  h-14 outline-none border-none text-black font-inter"
						/>
					</div>
					<button className=" mywid h-14 px-6   gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center">
						<Icon
							icon="f7:plus"
							width="1.6rem"
							height="1.6rem"
							style={{ color: "black" }}
						/>
						New Admin
					</button>
				</div>
			</div>
			<div className="grid px-4 grid-cols-12 gap-4 font-inter text-white md:px-10 overflow-x-auto w-full  overflow-hidden ">
				<div className="2xl:col-span-6  xl:col-span-7 col-span-12   ">
					<div className="w-full relative h-[450px] ">
						<div className="myindex w-full h-full  rounded-md  flex sm:p-10 p-2 flex-col justify-between z-10 relative">
							<div className="flex flex-col gap-2">
								<h6 className="text-white text-opacity-50 text-[14px]">
									Welcome back,
								</h6>
								<h2 className="sm:text-3xl font-bold">Mark Johnson</h2>
								<p className="text-white text-opacity-50 text-[14px]">
									Glad to see you again! <br />
									Ask me anything.
								</p>
							</div>
							<p className="text-white text-opacity-50 text-[14px]">
								Tap to record →
							</p>
						</div>
						<img
							src={fish}
							className="w-full h-full absolute left-0 top-0 z-[1] rounded-md "
							alt=""
						/>
					</div>
				</div>

				<div className="2xl:col-span-3 xl:col-span-5 md:col-span-12 col-span-12  bg-[#272728] rounded-md overflow-hidden  h-[450px] ">
					<Speed />
				</div>
				<div className="2xl:col-span-3 xl:col-span-5 md:col-span-12 col-span-12  bg-[#272728] rounded-md overflow-hidden  h-[450px]">
					<Speed1 />
				</div>
				<div className="2xl:col-span-7 xl:col-span-7 col-span-12  bg-[#272728] rounded-md overflow-hidden  h-[450px]">
					<AreaChart2 />
				</div>
				<div className="2xl:col-span-5 xl:col-span-5 col-span-12  bg-[#272728] rounded-md overflow-hidden  2xl:h-[450px] lg:h-auto h-[830px]">
					<div className="h-1/2 f w-full">
						<BarChart2 />
					</div>
					<div className=" px-4 py-2 my-2">
						<h2 className=" text-[16px]">Active</h2>
						<p className="text-[12px] py-2">
							<span className="text-[#07C36F]">(+5) more</span> in 2021
						</p>
						<div className="my-4 grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-1  grid-cols-1  md:gap-0 gap-2  px-4 ">
							<div className="flex flex-col gap-2 w-full px-2">
								<div className="flex justify-between">
									<div className="w-7 h-7 rounded-sm bg-[#494E54] flex justify-center items-center ">
										<Icon icon="entypo:wallet" style={{ color: "white" }} />
									</div>
									<p className="text-[15px]">users</p>
								</div>
								<h2>32,984</h2>
								<div className="w-full bg-white bg-opacity-40 h-[4px]">
									{" "}
									{/* Full-width background */}
									<p className="h-full bg-[#2D2E5F] w-[32%]"></p>{" "}
									{/* Change the width as needed */}
								</div>
							</div>
							<div className="flex flex-col gap-2 w-full px-2">
								<div className="flex justify-between">
									<div className="w-7 h-7 rounded-sm bg-[#494E54] flex justify-center items-center ">
										<Icon icon="mynaui:rocket" style={{ color: "white" }} />
									</div>
									<p className="text-[15px]">Clicks</p>
								</div>
								<h2>24m</h2>
								<div className="w-full bg-white bg-opacity-40 h-[4px]">
									{" "}
									{/* Full-width background */}
									<p className="h-full bg-[#2D2E5F] w-[32%]"></p>{" "}
									{/* Change the width as needed */}
								</div>
							</div>
							<div className="flex flex-col gap-2 w-full px-2">
								<div className="flex justify-between">
									<div className="w-7 h-7 rounded-sm bg-[#494E54] flex justify-center items-center ">
										<Icon icon="entypo:wallet" style={{ color: "white" }} />
									</div>
									<p className="text-[15px]">Sales</p>
								</div>
								<h2>24,00$</h2>
								<div className="w-full bg-white bg-opacity-40 h-[4px]">
									{" "}
									{/* Full-width background */}
									<p className="h-full bg-[#2D2E5F] w-[32%]"></p>{" "}
									{/* Change the width as needed */}
								</div>
							</div>
							<div className="flex flex-col gap-2 w-full px-2">
								<div className="flex justify-between">
									<div className="w-7 h-7 rounded-sm bg-[#494E54] flex justify-center items-center ">
										<Icon icon="oi:wrench" style={{ color: "white" }} />
									</div>
									<p className="text-[15px]">items</p>
								</div>
								<h2>320$</h2>
								<div className="w-full bg-white bg-opacity-40 h-[4px]">
									{" "}
									{/* Full-width background */}
									<p className="h-full bg-[#2D2E5F] w-[32%]"></p>{" "}
									{/* Change the width as needed */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="2xl:col-span-7 xl:col-span-7 col-span-12   bg-[#272728] rounded-md overflow-hidden  h-auto">
					<Table />
				</div>
				<div className="2xl:col-span-5 col-span-12  bg-[#272728] rounded-md overflow-hidden px-4 py-4  h-auto">
					<h2 className="text-3xl font-bold font-inter text-white">
						Orders overview
					</h2>
					<div className="circle text-[14px]">
						<div className="icon"></div>
						+30% this month
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<Icon
								icon="solar:bell-bold"
								width={"50px"}
								height={"50px"}
								style={{ color: "#0075FF" }}
							/>
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[18px] text-[16px] font-bold font-inter pb-2 leading-none">
								$2400, Design changes
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<Icon
								icon="flowbite:html-solid"
								width={"50px"}
								height={"50px"}
								style={{ color: "#e31a1a" }}
							/>
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[18px] text-[16px]  font-bold font-inter pb-2 leading-none">
								New order #4219423
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<Icon
								icon="icon-park-solid:shopping"
								width={"50px"}
								height={"50px"}
								style={{ color: "#4399e1" }}
							/>
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[19px] text-[16px] font-bold font-inter pb-2 leading-none">
								Server Payments for April
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<Icon
								icon="ion:card"
								width={"50px"}
								height={"50px"}
								style={{ color: "#f6ad54" }}
							/>
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[19px] text-[16px] font-bold font-inter pb-2 leading-none">
								New card added for order #3210145
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<Icon icon="skill-icons:xd" width={"50px"} height={"50px"} />
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[19px] text-[16px] font-bold font-inter pb-2 leading-none">
								Unlock packages for Development
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
					<div className=" mt-5 flex gap-4 ">
						<div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]  my-auto flex justify-center items-start">
							<div className=" w-[40px] h-[40px] sm:text-[50px] text-[40px]  sm:w-fit sm:h-fit bg-black rounded-lg">
								<Icon icon="cib:adobe-xd" style={{ color: "white" }} />
							</div>
						</div>
						<div className="">
							<h2 className="md:text-[22px]  sm:text-[19px] text-[16px] font-bold font-inter pb-2 leading-none">
								New order #9851258
							</h2>
							<p className="text-[12px] text-white text-opacity-50">
								22 DEC 7:20 PM
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Goals;
