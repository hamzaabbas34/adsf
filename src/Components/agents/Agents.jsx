import React, { useState } from "react";
import { Icon } from "@iconify/react";
import person1 from "../../Assets/Images/person1.png";
import data from "../../data/data.js";
import Nav from "../Navbar/Nav.jsx";

export default function Agents() {
	const [search, setSearch] = useState("");
	const [agents, setAgents] = useState(data.voiceManagers);
	const [showModal, setShowModal] = useState(false);
	const [newAgent, setNewAgent] = useState({
		name: "",
		image: "",
	});

	// Filter agents based on search input
	const filteredAgents = agents.filter((agent) =>
		agent.name.toLowerCase().includes(search.toLowerCase())
	);

	// Handle input changes for new agent
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewAgent((prev) => ({ ...prev, [name]: value }));
	};

	// Handle file input changes
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
			setNewAgent((prev) => ({ ...prev, image: imageUrl })); // Update the state with the image URL
		}
	};

	// Handle adding new agent
	const addNewAgent = () => {
		setAgents([...agents, newAgent]);
		setNewAgent({ name: "", image: "" }); // Clear form
		setShowModal(false); // Close modal
	};

	return (
		<div className="text-white w-full">
			{/* Navbar Section */}
			<Nav pagename="Agents" person1={person1} />

			{/* Search and Add Agent Section */}
			<div className="md:px-10 px-4 py-5 flex justify-between items-center flex-wrap">
				<div>
					<h2 className="font-inter text-2xl mb-3">Manage Agents</h2>
					<p className="text-[20px] text-white text-opacity-50 font-thin">
						Manage your agents in one place.
					</p>
				</div>
				<div className="flex gap-4 flex-wrap sm:my-0 my-4 ">
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
							placeholder="Search Agents"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="md:px-16 ps-16 h-14 outline-none border-none text-black font-inter"
						/>
					</div>
					<button
						className="h-14 mywid  px-6 gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center"
						onClick={() => setShowModal(true)}>
						<Icon
							icon="f7:plus"
							width="1.6rem"
							height="1.6rem"
							style={{ color: "black" }}
						/>
						New Agent
					</button>
				</div>
			</div>

			{/* Agents List Section */}
			<div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-4 md:px-6 px-4">
				{filteredAgents.map((agent, index) => (
					<div
						key={index}
						className="mx-auto text-center bg-[#202125] w-full pt-8 pb-3">
						<div className="w-28 h-28 rounded-full bg-red-100 mx-auto">
							<img
								src={agent.image}
								alt={agent.name}
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
						<h2 className="font-inter text-2xl mt-2">{agent.name}</h2>
						<p className="text-[15px] mt-[-2px] mb-2 text-white text-opacity-50 font-thin">
							View Profile
						</p>
						<button className="text-[#07C36F] py-2 border-[3px] rounded-sm border-[#07C36F] w-[90%]">
							Edit Details
						</button>
					</div>
				))}
			</div>

			{/* Add New Agent Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-6 rounded-md w-1/3 text-black">
						<h2 className="text-xl font-bold mb-4">Add New Agent</h2>
						<div className="mb-4">
							<label className="block mb-2">Name</label>
							<input
								type="text"
								name="name"
								value={newAgent.name}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded-md"
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2">Upload Image</label>
							<input
								type="file"
								name="image"
								onChange={handleFileChange}
								className="w-full p-2 border border-gray-300 rounded-md"
							/>
						</div>
						{/* Display selected image preview */}
						{newAgent.image && (
							<img
								src={newAgent.image}
								alt="Preview"
								className="w-full h-32 object-cover rounded-md mb-4"
							/>
						)}
						<div className="flex justify-end gap-4">
							<button
								className="bg-gray-500 text-white px-4 py-2 rounded-md"
								onClick={() => setShowModal(false)}>
								Cancel
							</button>
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded-md"
								onClick={addNewAgent}>
								Add Agent
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
