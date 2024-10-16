import React, { useState } from "react";
import { Icon } from "@iconify/react";
import person1 from "../../Assets/Images/person1.png";
import Nav from "../Navbar/Nav.jsx";
export default function List() {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [agents, setAgents] = useState([
		// Initial agents
		{
			name: "Unassigned",
			subscribers: 2013,
			totalContacts: 46,
		},
		{
			name: "Agent 2",
			subscribers: 1000,
			totalContacts: 30,
		},
		// Other agents...
	]);
	const [showModal, setShowModal] = useState(false); // Modal state
	const [newAgent, setNewAgent] = useState({
		name: "",
		subscribers: 0,
		totalContacts: 0,
	}); // New agent state
	const rowsPerPage = 8;

	// Filtered agents based on search
	const filteredAgents = agents.filter((agent) =>
		agent.name.toLowerCase().includes(search.toLowerCase())
	);

	// Pagination logic
	const indexOfLastRow = currentPage * rowsPerPage;
	const indexOfFirstRow = indexOfLastRow - rowsPerPage;
	const currentAgents = filteredAgents.slice(indexOfFirstRow, indexOfLastRow);
	const totalPages = Math.ceil(filteredAgents.length / rowsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage(currentPage + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	// Handle new agent creation
	const handleAddAgent = () => {
		if (newAgent.name.trim() === "") return;
		setAgents([...agents, newAgent]);
		setNewAgent({ name: "", subscribers: 0, totalContacts: 0 }); // Reset form
		setShowModal(false); // Close modal
	};

	return (
		<div>
			{/* Navbar Section */}
			<Nav person1={person1} pagename="Lists" />
			{/* Search and Add Agent Section */}
			<div className="px-10 py-5 gap-10 flex justify-between items-center flex-wrap">
				<div>
					<h2 className="font-inter text-2xl mb-3 text-white">
						Manage Contacts
					</h2>
					<p className="text-[20px] text-white text-opacity-50 font-thin">
						Manage your contacts in one place
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
							placeholder="Search Agents"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="px-16 h-14 outline-none border-none text-black font-inter  w-full "
						/>
					</div>
					<button
						className="h-14  mywids px-6 gap-1 bg-[#3BE3E3] text-black font-inter text-[18px] flex justify-center items-center"
						onClick={() => setShowModal(true)} // Show modal when clicked
					>
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
			<h2 className="font-inter text-2xl px-5 text-white">Applications List</h2>
			{/* Applications List Section */}
			<div className="px-5 ">
				{/* Table Section */}
				{/* <div className=" w-full border-[0.5px] border-white border-opacity-50 rounded-lg mt-5">
					<table
						className="min-w-full text-white w-[150%] overflow-x-scroll"
						style={{ borderCollapse: "collapse" }}>
						<thead>
							<tr className="border-b-[0.5px] border-white border-opacity-50">
								<th className="text-left px-4 py-6">Last Name</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Total Contacts
								</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Total Subscribers
								</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{currentAgents.map((agent, index) => (
								<tr
									key={index}
									className={`border-white border-opacity-50 ${
										index === currentAgents.length - 1 ? "" : "border-b-[0.5px]"
									}`}>
									<td className="px-4 py-3">{agent.name}</td>
									<td className="px-4 py-3">
										<div className="w-full bg-gray-200 h-2 rounded-lg">
											<div
												className="bg-blue-600 h-full rounded-lg"
												style={{
													width: `${(agent.totalContacts / 500) * 100}%`,
												}}
											/>
										</div>
										<p className="text-white mt-2 text-start">
											{agent.totalContacts} Contacts
										</p>
									</td>
									<td className="px-4 py-3">{agent.subscribers}</td>
									<td className="px-4 py-3">
										<button>View Profile</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div> */}
				<div className="w-full border-[0.5px] border-white border-opacity-50 rounded-lg mt-5 overflow-x-auto">
					<table
						className="lg:w-full md:w-[150%] w-[200%] text-white table-auto"
						style={{ borderCollapse: "collapse" }}>
						<thead>
							<tr className="border-b-[0.5px] border-white border-opacity-50">
								<th className="text-left px-4 py-6">Last Name</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Total Contacts
								</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Total Subscribers
								</th>
								<th className="text-left px-4 py-6 border-l-[0.5px] border-white border-opacity-50">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{currentAgents.map((agent, index) => (
								<tr
									key={index}
									className={`border-white border-opacity-50 ${
										index === currentAgents.length - 1 ? "" : "border-b-[0.5px]"
									}`}>
									<td className="px-4 py-3">{agent.name}</td>
									<td className="px-4 py-3">
										<div className="w-full bg-gray-200 h-2 rounded-lg">
											<div
												className="bg-blue-600 h-full rounded-lg"
												style={{
													width: `${(agent.totalContacts / 500) * 100}%`,
												}}
											/>
										</div>
										<p className="text-white mt-2 text-start">
											{agent.totalContacts} Contacts
										</p>
									</td>
									<td className="px-4 py-3">{agent.subscribers}</td>
									<td className="px-4 py-3">
										<button>View Profile</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className="flex justify-between rounded-lg items-center mt-5 border-2 border-white border-opacity-50 py-3 px-3">
					<button
						onClick={handlePreviousPage}
						disabled={currentPage === 1}
						className={`flex items-center gap-4 px-4 py-2  text-white rounded ${
							currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						<Icon icon="icon-park-outline:arrow-left" /> Previous
					</button>

					{/* Active Page with red background */}
					<span
						className={`text-black px-4 py-2 rounded ${
							currentPage ? "bg-[#28aff3]" : ""
						}`}>
						{currentPage}
					</span>

					<button
						onClick={handleNextPage}
						disabled={currentPage === totalPages}
						className={` flex  justify-center items-center gap-4 px-4 py-2  text-white rounded ${
							currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						Next
						<div className="mt-[1px]">
							<Icon icon="icon-park-outline:arrow-right" />
						</div>
					</button>
				</div>
			</div>

			{/* Modal for New Agent */}
			{showModal && (
				<div className="fixed inset-0 z-20  flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-md">
						<h2 className="text-xl font-bold mb-4">Create New Agent</h2>
						<div className="mb-4">
							<label className="block font-semibold mb-1">Name:</label>
							<input
								type="text"
								value={newAgent.name}
								onChange={(e) =>
									setNewAgent({ ...newAgent, name: e.target.value })
								}
								className="w-full p-2 border rounded"
								placeholder="Enter agent name"
							/>
						</div>
						<div className="mb-4">
							<label className="block font-semibold mb-1">Subscribers:</label>
							<input
								type="number"
								value={newAgent.subscribers}
								onChange={(e) =>
									setNewAgent({ ...newAgent, subscribers: e.target.value })
								}
								className="w-full p-2 border rounded"
								placeholder="Enter subscribers count"
							/>
						</div>
						<div className="mb-4">
							<label className="block font-semibold mb-1">
								Total Contacts:
							</label>
							<input
								type="number"
								value={newAgent.totalContacts}
								onChange={(e) =>
									setNewAgent({ ...newAgent, totalContacts: e.target.value })
								}
								className="w-full p-2 border rounded"
								placeholder="Enter total contacts"
							/>
						</div>
						<div className="flex justify-end space-x-4">
							<button
								onClick={() => setShowModal(false)}
								className="px-4 py-2 bg-gray-500 text-white rounded">
								Cancel
							</button>
							<button
								onClick={handleAddAgent}
								className="px-4 py-2 bg-blue-500 text-white rounded">
								Add Agent
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
