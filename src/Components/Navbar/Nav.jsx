// import React from "react";
// import { Icon } from "@iconify/react";

// export default function Nav({person1}) {
// 	return (
// 		<div className=" nav w-full flex justify-between items-center md:px-10 px-4 py-8 border-b-[0.5px] text-white border-white border-opacity-50">
// 			<h2 className="font-inter text-2xl text-white">Admin</h2>
// 			<div className="flex items-center gap-8">
// 				<Icon
// 					icon="tabler:bell-filled"
// 					width="2rem"
// 					height="2rem"
// 					style={{ color: "white" }}
// 				/>
// 				<div className="flex items-center gap-5">
// 					<div className="imgbox w-[50px] h-[50px] rounded-full bg-red-200 ">
// 						<img
// 							src={person1}
// 							alt=""
// 							className="w-full h-full object-cover object-top"
// 						/>
// 					</div>
// 					<div className="">
// 						<h2 className="font-inter text-[20px]">Tanzir Rahman</h2>
// 						<p className="text-[20px] text-white text-opacity-50 font-thin">
// 							View Profile
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Nav({ person1, pagename }) {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			{/* Navbar */}
			<div className="nav w-full flex justify-between items-center md:px-10 px-4 py-8 border-b-[0.5px] text-white border-white border-opacity-50">
				<h2 className="font-inter sm:text-2xl text-[20px] text-white">{pagename}</h2>
				<div className="flex items-center sm:gap-8 gap-2">
					<Icon
						icon="tabler:bell-filled"
						width="1.8rem"
						height="1.8rem"
						style={{ color: "white" }}
					/>
					{/* Sidebar Toggle Button */}
					<button
						onClick={toggleSidebar}
						className="md:hidden block text-white focus:outline-none">
						<Icon icon="tabler:menu" width="1.8rem" height="1.8rem" />
					</button>
					<div className="hidden md:flex items-center gap-5">
						<div className="imgbox w-[50px] h-[50px] rounded-full bg-red-200 ">
							<img
								src={person1}
								alt="Profile"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="">
							<h2 className="font-inter text-[20px]">Tanzir Rahman</h2>
							<p className="text-[20px] text-white text-opacity-50 font-thin">
								View Profile
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Right Sidebar */}
			<div
				className={`fixed  top-0 right-0 h-full w-[300px] bg-gray-800 text-white md:p-0  p-4 transform transition-transform duration-300 ease-in-out ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} md:translate-x-0 md:static md:w-auto`}>
				{/* Sidebar content: Image and Profile Info */}
				<div className="flex md:hidden flex-col items-center gap-5">
					<div className="imgbox w-[100px] h-[100px] rounded-full bg-red-200 ">
						<img
							src={person1}
							alt="Profile"
							className="w-full h-full object-cover object-top"
						/>
					</div>
					<div className="text-center">
						<h2 className="font-inter text-[20px]">Tanzir Rahman</h2>
						<p className="text-[20px] text-white text-opacity-50 font-thin">
							View Profile
						</p>
					</div>
				</div>

				{/* Close button for smaller screens */}
				<button
					onClick={toggleSidebar}
					className="md:hidden absolute top-4 right-4 text-white focus:outline-none">
					<Icon icon="tabler:x" width="2rem" height="2rem" />
				</button>
			</div>
		</>
	);
}
