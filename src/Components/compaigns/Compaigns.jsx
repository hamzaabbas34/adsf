// import React, { useState } from "react";
// import { Icon } from "@iconify/react";

// import person1 from "../../Assets/Images/person1.png";
// import box from "../../Assets/Images/box.png";
// import boxup from "../../Assets/Images/boxup.png";
// import star from "../../Assets/Images/star.png";

// const mydata = [
// 	{
// 		campaignName: "Summer Sale",
// 		status: "Active",
// 		insight: {
// 			impressions: 460,
// 			clicks: 1003,
// 		},
// 	},
// 	{
// 		campaignName: "Winter Clearance",
// 		status: "Paused",
// 		insight: {
// 			impressions: 1200,
// 			clicks: 850,
// 		},
// 	},
// 	{
// 		campaignName: "Spring Launch",
// 		status: "Draft",
// 		insight: {
// 			impressions: 980,
// 			clicks: 645,
// 		},
// 	},
// ];

// export default function Compaigns() {
// 	const [search, setSearch] = useState("");

// 	return (
// 		<div>
// 			<div className="nav w-full flex justify-between items-center px-10 py-8 border-b-[0.5px] text-white border-white border-opacity-50">
// 				<h2 className="font-inter text-2xl text-white">Compaigns</h2>
// 				<div className="flex items-center gap-8">
// 					<Icon
// 						icon="tabler:bell-filled"
// 						width="2rem"
// 						height="2rem"
// 						style={{ color: "white" }}
// 					/>
// 					<div className="flex items-center gap-5">
// 						<div className="imgbox w-[50px] h-[50px] rounded-full bg-red-200 ">
// 							<img
// 								src={person1}
// 								alt=""
// 								className="w-full h-full object-cover object-top"
// 							/>
// 						</div>
// 						<div className="">
// 							<h2 className="font-inter text-[20px]">Tanzir Rahman</h2>
// 							<p className=" text-[20px] text-white text-opacity-50 font-thin">
// 								View Profile
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Search and Add Agent Section */}
// 			<div className="px-10 py-5 flex justify-between items-center  font-inter">
// 				<div>
// 					<h2 className="font-inter text-2xl mb-2 text-white">
// 						Manage Compaigns
// 					</h2>
// 					<p className="text-[18px] text-white text-opacity-50 font-thin">
// 						Organize and track your campaign in one place.
// 					</p>
// 				</div>
// 				<div className="flex gap-4">
// 					<div className="relative">
// 						<div className="absolute top-3 left-3">
// 							<Icon
// 								icon="lucide:search"
// 								width="2rem"
// 								height="2rem"
// 								style={{ color: "black" }}
// 							/>
// 						</div>
// 						<input
// 							type="text"
// 							placeholder="Search Campaign "
// 							value={search}
// 							onChange={(e) => setSearch(e.target.value)}
// 							className="px-16 h-14 outline-none border-none text-black font-inter"
// 						/>
// 					</div>
// 					<button className="h-14 px-6 gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center">
// 						<Icon
// 							icon="f7:plus"
// 							width="1.6rem"
// 							height="1.6rem"
// 							style={{ color: "black" }}
// 						/>
// 						New Campaign
// 					</button>
// 				</div>
// 			</div>

// 			<div className="grid grid-cols-2 px-10 mt-10 gap-16">
// 				{/* here loop it */}
// 				<div className="w-full px min-h-[300px] rounded-3xl  relative z-10 overflow-hidden ">
// 					<img src={box} className="w-full h-full absolute -z-[9]" alt="" />
// 					<img src={boxup} className="h-full absolute left-0 -z-[9] " alt="" />
// 					<div className="w-full  md:px-12  px-4  py-6  flex justify-between items-center ">
// 						<div className="flex items-center gap-5">
// 							<div className="w-14  h-auto ">
// 								<img src={star} className="w-full h-full" alt="" />
// 							</div>
// 							<h2 className="text-3xl font-inter text-white font-thin">
// 								Summer Sale
// 							</h2>
// 						</div>
// 						<button className=" border-4 border-black text-white px-4 rounded-2xl py-[6px] flex items-center gap-2">
// 							<Icon icon="hugeicons:pencil-edit-02" />
// 							edits
// 						</button>
// 					</div>
// 					<div className="flex px-12 items-center gap-10 text-white ">
// 						<h2 className="text-2xl font-inter ">Status: </h2>
// 						<p className="text-[#9D9292] text-2xl font-normal">Active</p>
// 					</div>
// 					<div className="flex px-12 items-center gap-10 text-white mt-4 ">
// 						<h2 className="text-2xl font-inter ">Insight:</h2>
// 						<p className="text-[#9D9292] text-[20px] font-normal">
// 							Impressions: <span className="px-3">460 </span>{" "}
// 							<span className=" pe-3">|</span> Clicks:{" "}
// 							<span className="ps-3"> 1003</span>
// 						</p>
// 					</div>
// 					<div className="h-[2px] w-[90%] mx-auto my-5 bg-white "></div>
// 					<div className="px-12 flex justify-around ">
// 						<button className=" px-10 py-3 bg-[#98F9FF] rounded-full font-inter">
// 							View Report
// 						</button>
// 						<button className=" px-10 py-3 border-[1px] text-[#EABFFF] border-[#EABFFF] rounded-full font-inter">
// 							Delete
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React, { useState } from "react";
import { Icon } from "@iconify/react";

import person1 from "../../Assets/Images/person1.png";
import box from "../../Assets/Images/box.png";
import boxup from "../../Assets/Images/boxup.png";
import star from "../../Assets/Images/star.png";
import smallbox from "../../Assets/Images/smallbox.png";
import Nav from "../Navbar/Nav";

const mydata = [
	{
		campaignName: "Summer Sale",
		status: "Active",
		insight: {
			impressions: 460,
			clicks: 1003,
		},
	},
	{
		campaignName: "Winter Clearance",
		status: "Paused",
		insight: {
			impressions: 1200,
			clicks: 850,
		},
	},
	{
		campaignName: "Spring Launch",
		status: "Draft",
		insight: {
			impressions: 980,
			clicks: 645,
		},
	},
];

export default function Compaigns() {
	const [search, setSearch] = useState("");
	const [campaigns, setCampaigns] = useState(mydata);
	const [showModal, setShowModal] = useState(false);
	const [newCampaign, setNewCampaign] = useState({
		campaignName: "",
		status: "",
		insight: {
			impressions: 0,
			clicks: 0,
		},
	});

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleCreateCampaign = () => {
		setCampaigns((prev) => [...prev, newCampaign]);
		setShowModal(false);
		setNewCampaign({
			campaignName: "",
			status: "",
			insight: { impressions: 0, clicks: 0 },
		});
	};

	const filteredCampaigns = campaigns.filter((campaign) =>
		campaign.campaignName.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className=" w-full overflow-hidden">
			<Nav person1={person1} pagename="Compaigns" />

			<div className="md:px-10 px-2 py-5  gap-5 flex justify-between items-center  font-inter flex-wrap">
				<div>
					<h2 className="font-inter sm:text-2xl text-[18px] mb-2 text-white">
						Manage Compaigns
					</h2>
					<p className="sm:text-[18px] text-[14px] text-white text-opacity-50 font-thin">
						Organize and track your campaign in one place.
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
							placeholder="Search Campaign"
							value={search}
							onChange={handleSearch}
							className="sm:px-16 ps-16 h-14 w-full outline-none border-none text-black font-inter"
						/>
					</div>
					<button
						className=" mywidss h-14 px-6 gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center"
						onClick={() => setShowModal(true)}>
						<Icon
							icon="f7:plus"
							width="1.6rem"
							height="1.6rem"
							style={{ color: "black" }}
						/>
						New Campaign
					</button>
				</div>
			</div>

			{/* Campaign Cards */}
			<div className="grid xl:grid-cols-2 grid-cols-1 gap-5  px-4  md:px-10 mt-10 2xl:gap-16 xl:gap-10 border-b-[0.5px] border-white border-opacity-50 pb-10">
				{filteredCampaigns.map((campaign, index) => (
					<div
						key={index}
						className=" w-[100%] sm:w-full min-h-[300px] rounded-[30px] relative z-10 overflow-hidden">
						<img src={box} className="w-full h-full absolute -z-[9]" alt="" />
						<img
							src={boxup}
							className="h-full absolute left-0 -z-[9] "
							alt=""
						/>
						<div className="w-full md:px-12  px-4  py-6 flex justify-between items-center flex-wrap">
							<div className="flex items-center sm:gap-5 gap-2 ">
								<div className="md:w-14 w-6 h-auto">
									<img src={star} className="w-full h-full" alt="" />
								</div>
								<h2 className="md:text-3xl text-1xl  font-inter text-white font-thin">
									{campaign.campaignName}
								</h2>
							</div>
							<button className="ms-auto  my-2  border-4 border-black text-[14px] text-white sm:px-4 px-2 rounded-2xl py-[6px] flex items-center sm:gap-2 gap-1">
								<Icon icon="hugeicons:pencil-edit-02" />
								Edit
							</button>
						</div>
						<div className="flex md:px-12  px-4  items-center sm:gap-10 gap-2 text-white ">
							<h2 className="md:text-2xl  sm:text-[18px] text-[16px] font-inter">
								Status:
							</h2>
							<p className="text-[#9D9292] md:text-2xl sm:text-[18px] text-[16px]  font-normal">
								{campaign.status}
							</p>
						</div>
						<div className="flex md:px-12  px-4  items-center sm:gap-10 gap-2 text-white mt-4 ">
							<h2 className="md:text-2xl sm:text-[18px] text-[16px]  font-inter">
								Insight:
							</h2>
							<p className="text-[#9D9292] md:text-[20px] sm:text-[18px] flex flex-wrap text-[12px] font-normal">
								<div className="">
									Impressions:{" "}
									<span className="px-3">{campaign.insight.impressions}</span>
								</div>
								<div className="">
									<span className="pe-3">|</span> Clicks:{" "}
									<span className="ps-3">{campaign.insight.clicks}</span>
								</div>
							</p>
						</div>
						<div className="h-[2px] w-[90%] mx-auto my-5 bg-white"></div>
						<div className="md:px-12  px-4  flex justify-around flex-wrap pb-6">
							<button className=" text-[13px]  sm:text-[16px] px-10 py-3 bg-[#98F9FF] rounded-full font-inter mbts">
								View Report
							</button>
							<button className=" text-[13px]  sm:text-[16px] mbts px-10 py-3 border-[1px] text-[#EABFFF] border-[#EABFFF] rounded-full font-inter">
								Delete
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="font-inter md:px-12  px-4  py-10">
				<h2 className=" text-2xl text-white ">Campaigns Progress Bars</h2>
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-12  px-4  gap-5  lg:gap-6 xl:gap-16 mb-10 ">
				{filteredCampaigns.map((campaign, index) => (
					<div className="h-[60px] relative  w-full  z-10 rounded-full overflow-hidden">
						<img
							src={smallbox}
							className="w-full h-full absolute -z-[9]"
							alt=""
						/>
						<img
							src={boxup}
							className="h-full w-1/2 absolute left-0 -z-[9]"
							alt=""
						/>
						<div className="h-full flex justify-start items-center my-auto gap-4 px-4 font-inter">
							<div className="h-[70%] py-1">
								<img src={star} className="w-full h-full" alt="" />
							</div>
							<h2 className="text-[20px] font-extralight my-auto text-white">
								{campaign.campaignName}
							</h2>
						</div>
					</div>
				))}
			</div>
			<div className="">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:px-12  px-4  xl:gap-16 lg:gap-6 mb-10 text-white">
					<div className="flex items-center relative  gap-5 w-full py-3 px-6 border-[0.5px] rounded-md border-l-[#98F9FF] border-t-[#98F9FF] border-b-[#EABFFF] border-r-[#EABFFF] bg-gradient-to-r from-[#000000] to-[#666666]">
						<div className="h-[2px] w-full absolute left-0 bottom-0  bg-white ">
							<div className=" h-full  w-[30%] bg-[#3BE3E3]"></div>
						</div>
						<h3 className="text-2xl font-inter text-[#3BE3E3]">30%</h3>
						<div>
							<h3 className="text-[18px] my-1">Update in progress..</h3>
							<p className="text-[14px]">+5% since last week</p>
						</div>
					</div>
					<div className="flex items-center relative  sm:gap-5 gap-2 w-full py-3 px-6 border-[0.5px] rounded-md border-l-[#98F9FF] border-t-[#98F9FF] border-b-[#EABFFF] border-r-[#EABFFF] bg-gradient-to-r from-[#000000] to-[#666666]">
						<div className="h-[2px] w-full absolute left-0 bottom-0  bg-white  ">
							<div className=" h-full  w-[100%] bg-[#3BE3E3]"></div>
						</div>
						<h3 className="text-2xl font-inter text-[#3BE3E3]">100%</h3>
						<div>
							<h3 className="text-[18px] my-1">Completed</h3>
							<p className="text-[14px]">+78% since last week</p>
						</div>
					</div>
					<div className="flex items-center relative  gap-5 w-full py-3 px-6 border-[0.5px] rounded-md border-l-[#98F9FF] border-t-[#98F9FF] border-b-[#EABFFF] border-r-[#EABFFF] bg-gradient-to-r from-[#000000] to-[#666666]">
						<div className="h-[2px] w-full absolute left-0 bottom-0  bg-white  ">
							<div className=" h-full  w-[15%] bg-[#3BE3E3]"></div>
						</div>
						<h3 className="text-2xl font-inter text-[#3BE3E3]">15%</h3>
						<div>
							<h3 className="text-[18px] my-1">paused</h3>
							<p className="text-[14px]">+3% since last week</p>
						</div>
					</div>
				</div>
			</div>
			{/* New Campaign Modal */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
					<div className="bg-white p-6 rounded-lg">
						<h2 className="text-xl mb-4">Create New Campaign</h2>
						<input
							type="text"
							placeholder="Campaign Name"
							value={newCampaign.campaignName}
							onChange={(e) =>
								setNewCampaign({ ...newCampaign, campaignName: e.target.value })
							}
							className="border p-2 mb-4 w-full"
						/>
						<input
							type="text"
							placeholder="Status"
							value={newCampaign.status}
							onChange={(e) =>
								setNewCampaign({ ...newCampaign, status: e.target.value })
							}
							className="border p-2 mb-4 w-full"
						/>
						<div className="flex gap-4 mb-4">
							<input
								type="number"
								placeholder="Impressions"
								value={newCampaign.insight.impressions}
								onChange={(e) =>
									setNewCampaign({
										...newCampaign,
										insight: {
											...newCampaign.insight,
											impressions: +e.target.value,
										},
									})
								}
								className="border p-2 w-full"
							/>
							<input
								type="number"
								placeholder="Clicks"
								value={newCampaign.insight.clicks}
								onChange={(e) =>
									setNewCampaign({
										...newCampaign,
										insight: {
											...newCampaign.insight,
											clicks: +e.target.value,
										},
									})
								}
								className="border p-2 w-full"
							/>
						</div>
						<div className="flex justify-end ">
							<button
								onClick={() => setShowModal(false)}
								className="mr-2 bg-red-500 text-white px-4 py-2 rounded">
								Cancel
							</button>
							<button
								onClick={handleCreateCampaign}
								className="bg-blue-500 text-white px-4 py-2 rounded">
								Create
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
