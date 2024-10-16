import React from "react";
import { Icon } from "@iconify/react";
import person1 from "../../Assets/Images/person1.png";
import record2 from "../../Assets/Images/recordinimg.png";

import sound1 from "../../Assets/Images/sound1.png"; // Import the audio file
import boxup from "../../Assets/Images/boxup.png";
import Right from "./Right";
import righboximg from "../../Assets/Images/bigcricle.png";

import Liftside from "./Leftside";
import Nav from "../Navbar/Nav";

export default function Record() {
	// const [search, setSearch] = useState("");
	return (
		<div className="">
			{/* Header Section */}
			<Nav person1={person1} pagename="Recordings" />

			<div className="md:px-10 px-4 py-5 flex  flex-wrap justify-between items-center">
				<div className=" my-3">
					<h2 className="font-inter sm:text-2xl text-[20px] mb-3 text-white">
						Manage Recordings
					</h2>
					<p className="sm:text-[20px] text-[15px] text-white text-opacity-50 font-thin">
						Organize and track your Recordings in one place.
					</p>
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
							placeholder="Search Recoding "
							className=" w-full sm:px-16 ps-14  pe-3 h-14 outline-none border-none text-black font-inter"
						/>
					</div>
					<button className="h-14 px-6  mywids   gap-1 bg-[#3BE3E3] text-black font-inter sm:text-[18px] text-[14px] flex justify-center items-center">
						<Icon
							icon="f7:plus"
							width="1.6rem"
							height="1.6rem"
							style={{ color: "black" }}
						/>
						New Recordings
					</button>
				</div>
			</div>

			<div className="grid xl:grid-cols-2 grid-cols-1 mt-10  gap-0 text-white  border-[0.5px] border-white border-opacity-50">
				<div className=" py-10">
					<div className="sm:px-8 px-4 ">
						<Liftside />
					</div>
					<div className="h-[0.5px]  bg-opacity-50 my-10 w-full bg-white"></div>
					<div className="px-8">
						<div className="h-[300px]   relative z-10 rounded-[28px] overflow-hidden ">
							<img
								src={record2}
								className=" w-full h-full left-0 top-0 absolute"
								alt=""
							/>
							<img
								src={boxup}
								className=" w-1/2 h-full left-0 top-0 absolute"
								alt=""
							/>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className=" sm:p-8 p-4 border-[0.5px] border-white border-opacity-50 ">
					<div className=" mt-2 w-full h-auto flex flex-col border-l-[0.5px overflow-hidden rounded-[30px]    sm:px-8 px-2 relative ">
						<img
							src={righboximg}
							alt=""
							className="absolute top-0 left-0  w-full h-full"
						/>
						<img
							src={boxup}
							alt=""
							className="absolute top-0 left-0  w-2/3 h-full"
						/>
						<div className="flex justify-between items-center  pt-10 pb-5 flex-wrap  ">
							<div className="relative rounded-full z-10">
								<img
									src={sound1}
									className="absolute left-0 top-0 w-full h-full -z-[9]"
									alt=""
								/>
								<h2 className="md:text-3xl sm:text-1xl text-[15px] font-light font-inter tracking-[0.1em]  sm:tracking-[0.2em] py-3 px-6">
									Recording List
								</h2>
							</div>
							<button className="ms-auto 	sm:mt-0 mt-4 border-2 border-black rounded-full px-6 py-2 z-20 ">
								Edit
							</button>
						</div>
						{/* Recordings List */}
						<Right />
					</div>
				</div>
			</div>
		</div>
	);
}
