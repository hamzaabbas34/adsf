import React from "react";
import { Icon } from "@iconify/react";

export default function Nan2() {
	return (
		<div className="md:px-10 px-4 py-5 flex  flex-wrap justify-between items-center">
			<div>
				<h2 className="font-inter text-2xl mb-3 text-white">Admin Dashboard</h2>
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
				<button className="h-14 px-6   gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center">
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
	);
}
