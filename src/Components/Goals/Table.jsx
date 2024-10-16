// import React from "react";
// import "./table.css";

// const Table = () => {
// 	const data = [
// 		{
// 			id: 1,
// 			companyName: "Chakra Soft UI Version",
// 			members: [
// 				"https://randomuser.me/api/portraits/men/1.jpg",
// 				"https://randomuser.me/api/portraits/men/2.jpg",
// 				"https://randomuser.me/api/portraits/men/3.jpg",
// 				"https://randomuser.me/api/portraits/men/4.jpg",
// 				"https://randomuser.me/api/portraits/men/5.jpg",
// 			],
// 			budget: "$20,000",
// 			complete: "75%",
// 			percentage: 75,
// 			color: "#FCB859", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/11.jpg", // Replace with actual company image URL
// 		},
// 		{
// 			id: 2,
// 			companyName: "Add Progress Track",
// 			members: [
// 				"https://randomuser.me/api/portraits/women/1.jpg",
// 				"https://randomuser.me/api/portraits/women/2.jpg",
// 				"https://randomuser.me/api/portraits/women/3.jpg",
// 				"https://randomuser.me/api/portraits/women/4.jpg",
// 				"https://randomuser.me/api/portraits/women/5.jpg",
// 			],
// 			budget: "$15,000",
// 			complete: "50%",
// 			percentage: 50,
// 			color: "#A9DFD8", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/10.jpgg", // Replace with actual company image URL
// 		},
// 		{
// 			id: 3,
// 			companyName: "Fix Platform Errors",
// 			members: [
// 				"https://randomuser.me/api/portraits/men/6.jpg",
// 				"https://randomuser.me/api/portraits/men/7.jpg",
// 				"https://randomuser.me/api/portraits/men/8.jpg",
// 				"https://randomuser.me/api/portraits/men/9.jpg",
// 				"https://randomuser.me/api/portraits/men/10.jpg",
// 				"https://randomuser.me/api/portraits/men/11.jpg", // Added a sixth member
// 			],
// 			budget: "$30,000",
// 			complete: "100%",
// 			percentage: 100,
// 			color: "#28AEF3", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/11.jpg", // Replace with actual company image URL
// 		},
// 		{
// 			id: 4,
// 			companyName: "Launch our Mobile App",
// 			members: [
// 				"https://randomuser.me/api/portraits/women/6.jpg",
// 				"https://randomuser.me/api/portraits/women/7.jpg",
// 				"https://randomuser.me/api/portraits/women/8.jpg",
// 				"https://randomuser.me/api/portraits/women/9.jpg",
// 				"https://randomuser.me/api/portraits/women/10.jpg",
// 			],
// 			budget: "$12,500",
// 			complete: "40%",
// 			percentage: 40,
// 			color: "#F2C8ED", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/9.jpg", // Replace with actual company image URL
// 		},
// 		{
// 			id: 5,
// 			companyName: "New Pricing Page",
// 			members: [
// 				"https://randomuser.me/api/portraits/women/6.jpg",
// 				"https://randomuser.me/api/portraits/women/7.jpg",
// 				"https://randomuser.me/api/portraits/women/8.jpg",
// 				"https://randomuser.me/api/portraits/women/9.jpg",
// 				"https://randomuser.me/api/portraits/women/10.jpg",
// 			],
// 			budget: "$12,500",
// 			complete: "40%",
// 			percentage: 40,
// 			color: "#F2C8ED", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/9.jpg", // Replace with actual company image URL
// 		},
// 		{
// 			id: 6,
// 			companyName: "Redesign New Online Shop",
// 			members: [
// 				"https://randomuser.me/api/portraits/women/6.jpg",
// 				"https://randomuser.me/api/portraits/women/7.jpg",
// 				"https://randomuser.me/api/portraits/women/8.jpg",
// 				"https://randomuser.me/api/portraits/women/9.jpg",
// 				"https://randomuser.me/api/portraits/women/10.jpg",
// 			],
// 			budget: "$12,500",
// 			complete: "40%",
// 			percentage: 40,
// 			color: "#F2C8ED", // Example color for the progress bar
// 			companyImage: "https://randomuser.me/api/portraits/men/9.jpg", // Replace with actual company image URL
// 		},
// 	];

// 	return (
// 		<div>
// 			<div
// 				style={{
// 					padding: "20px",
// 					backgroundColor: "#202125",
// 					borderRadius: "8px",
// 				}}
// 				className="givewidht lg:overflow-x-hidden md:overflow-x-scroll w-full">
// 				<div className="">
// 					<h2 className="text-2xl font-bold mt-2 mb-2 ">Projects Goals</h2>
// 					<p> <span className="w-5 h-5 rounded-full bg-[#FCB859]"> </span>30 done this month</p>
// 				</div>
// 				<table
// 					style={{ borderCollapse: "collapse" }}
// 					className="mywidht lg:w-[100%] md:w-[150%] w-[200%] font-inter">
// 					<thead>
// 						<tr>
// 							<th style={{ fontSize : "14px"  ,fontWeight:  "300 ", opacity :"50%" , paddingBlock:"20px" , paddingInline: "5px", color: "#fff", textAlign: "start" }}>
// 								Company Name
// 							</th>
// 							<th style={{ fontSize : "14px"  ,fontWeight:  "300 ", opacity :"50%" , paddingBlock:"20px" , paddingInline: "5px", color: "#fff", textAlign: "start" }}>
// 								Members
// 							</th>
// 							<th style={{ fontSize : "14px"  ,fontWeight:  "300 ", opacity :"50%" , paddingBlock:"20px" , paddingInline: "5px", color: "#fff", textAlign: "start" }}>
// 								Budget
// 							</th>
// 							<th style={{ fontSize : "14px"  ,fontWeight:  "300 ", opacity :"50%" , paddingBlock:"20px" , paddingInline: "5px", color: "#fff", textAlign: "start" }}>
// 								Completion
// 							</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{data.map(
// 							({
// 								id,
// 								companyName,
// 								members, // Corrected to 'members'
// 								budget,
// 								percentage,
// 								color,
// 								companyImage,
// 							}) => (
// 								<tr
// 									key={id}
// 									style={{ backgroundColor: "inherit", color: "#ffff" }}>
// 									<td
// 										style={{
// 											padding: "5px",
//                                             paddingBlock: "15px",
// 											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
// 										}}>
// 										<div className="flex gap-3">
// 											<img
// 												src={companyImage}
// 												className="w-8 h-8 rounded-full "
// 												alt={companyName}
// 											/>
// 											<div>{companyName}</div>
// 										</div>
// 									</td>
// 									<td
// 										style={{
// 											padding: "5px",
//                                             paddingBlock: "15px",
// 											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
// 										}}>
// 										<div className="flex gap-1">
// 											{members.map((member, index) => (
// 												<img
// 													key={index}
// 													src={member}
// 													className="w-8 h-8 rounded-full ms-[-20px]"
// 													alt={`Member ${index + 1}`} // Added alt text for accessibility
// 												/>
// 											))}
// 										</div>
// 									</td>
// 									<td
// 										style={{
// 											padding: "5px",
//                                             paddingBlock: "15px",
// 											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
// 										}}>
// 										{budget}
// 									</td>
// 									<td
// 										style={{
// 											padding: "5px",
//                                             paddingBlock: "15px",
// 											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
// 										}}>
// 										<div
// 											style={{
// 												height: "6px",
// 												width: "100%",
// 												backgroundColor: "#e0e0e0",
// 												borderRadius: "10px",
// 												overflow: "hidden",
// 											}}>
// 											<div
// 												style={{
// 													height: "100%",
// 													width: `${percentage}%`,
// 													backgroundColor: color,
// 													transition: "width 0.3s ease-in-out",
// 												}}
// 											/>
// 										</div>
// 									</td>
// 								</tr>
// 							)
// 						)}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default Table;

import React from "react";
import { Icon } from "@iconify/react";

// Import other styles if needed
import "./table.css";

const Table = () => {
	const data = [
		{
			id: 1,
			companyName: "Chakra Soft UI Version",
			members: [
				"https://randomuser.me/api/portraits/men/1.jpg",
				"https://randomuser.me/api/portraits/men/2.jpg",
				"https://randomuser.me/api/portraits/men/3.jpg",
				"https://randomuser.me/api/portraits/men/4.jpg",
				"https://randomuser.me/api/portraits/men/5.jpg",
			],
			budget: "$20,000",
			complete: "75%",
			percentage: 75,
			color: "#FCB859",
			icon: "logos:slack-icon", // Assigning the icon here
		},
		{
			id: 2,
			companyName: "Add Progress Track",
			members: [
				"https://randomuser.me/api/portraits/women/1.jpg",
				"https://randomuser.me/api/portraits/women/2.jpg",
				"https://randomuser.me/api/portraits/women/3.jpg",
				"https://randomuser.me/api/portraits/women/4.jpg",
				"https://randomuser.me/api/portraits/women/5.jpg",
			],
			budget: "$15,000",
			complete: "50%",
			percentage: 50,
			color: "#A9DFD8",
			icon: "devicon:xd", // Icon for this company
		},
		{
			id: 3,
			companyName: "Fix Platform Errors",
			members: [
				"https://randomuser.me/api/portraits/men/6.jpg",
				"https://randomuser.me/api/portraits/men/7.jpg",
				"https://randomuser.me/api/portraits/men/8.jpg",
				"https://randomuser.me/api/portraits/men/9.jpg",
				"https://randomuser.me/api/portraits/men/10.jpg",
			],
			budget: "$30,000",
			complete: "100%",
			percentage: 100,
			color: "#28AEF3",
			icon: "devicon:xd", // Icon for this company
		},
		{
			id: 4,
			companyName: "Launch our Mobile App",
			members: [
				"https://randomuser.me/api/portraits/women/6.jpg",
				"https://randomuser.me/api/portraits/women/7.jpg",
				"https://randomuser.me/api/portraits/women/8.jpg",
				"https://randomuser.me/api/portraits/women/9.jpg",
				"https://randomuser.me/api/portraits/women/10.jpg",
			],
			budget: "$12,500",
			complete: "40%",
			percentage: 40,
			color: "#F2C8ED",
			icon: "logos:spotify-icon", // Icon for this company
		},
		{
			id: 5,
			companyName: "New Pricing Page",
			members: [
				"https://randomuser.me/api/portraits/women/6.jpg",
				"https://randomuser.me/api/portraits/women/7.jpg",
				"https://randomuser.me/api/portraits/women/8.jpg",
				"https://randomuser.me/api/portraits/women/9.jpg",
				"https://randomuser.me/api/portraits/women/10.jpg",
			],
			budget: "$12,500",
			complete: "40%",
			percentage: 40,
			color: "#F2C8ED",
			icon: "devicon:xd", // Icon for this company
		},
		{
			id: 6,
			companyName: "Redesign New Online Shop",
			members: [
				"https://randomuser.me/api/portraits/women/6.jpg",
				"https://randomuser.me/api/portraits/women/7.jpg",
				"https://randomuser.me/api/portraits/women/8.jpg",
				"https://randomuser.me/api/portraits/women/9.jpg",
				"https://randomuser.me/api/portraits/women/10.jpg",
			],
			budget: "$12,500",
			complete: "40%",
			percentage: 40,
			color: "#F2C8ED",
			icon: "devicon:xd", // Icon for this company
		},
	];

	return (
		<div>
			<div
				style={{
					padding: "20px",
					backgroundColor: "#202125",
					borderRadius: "8px",
				}}
				className="givewidht lg:overflow-x-hidden md:overflow-x-scroll w-full  ">
				<div className="">
					<h2 className="text-2xl font-bold mt-2 mb-2  ">Projects Goals</h2>
					<p>
						{" "}
						<span className="w-5 h-5 rounded-full bg-[#FCB859]"> </span>30 done
						this month
					</p>
				</div>
				<table
					style={{ borderCollapse: "collapse" }}
					className="mywidht lg:w-[100%] md:w-[150%] w-[200%] font-inter">
					<thead>
						<tr>
							<th
								style={{
									fontSize: "14px",
									fontWeight: "300",
									opacity: "50%",
									paddingBlock: "30px",
									paddingInline: "5px",
									color: "#fff",
									textAlign: "start",
								}}>
								Company Name
							</th>
							<th
								style={{
									fontSize: "14px",
									fontWeight: "300",
									opacity: "50%",
									paddingBlock: "30px",
									paddingInline: "5px",
									color: "#fff",
									textAlign: "start",
								}}>
								Members
							</th>
							<th
								style={{
									fontSize: "14px",
									fontWeight: "300",
									opacity: "50%",
									paddingBlock: "30px",
									paddingInline: "5px",
									color: "#fff",
									textAlign: "start",
								}}>
								Budget
							</th>
							<th
								style={{
									fontSize: "14px",
									fontWeight: "300",
									opacity: "50%",
									paddingBlock: "30px",
									paddingInline: "5px",
									color: "#fff",
									textAlign: "start",
								}}>
								Completion
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map(
							({
								id,
								companyName,
								members,
								budget,
								percentage,
								color,
								icon,
							}) => (
								<tr
									key={id}
									style={{ backgroundColor: "inherit", color: "#ffff" }}>
									<td
										style={{
											padding: "5px",
											paddingBlock: "15px",
											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
										}}>
										<div className="flex gap-3">
											<Icon icon={icon} className="w-8 h-8" />{" "}
											{/* Use the icon here */}
											<div>{companyName}</div>
										</div>
									</td>
									<td
										style={{
											padding: "5px",
											paddingBlock: "15px",
											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
										}}>
										<div className="flex gap-1">
											{members.map((member, index) => (
												<img
													key={index}
													src={member}
													className="w-8 h-8 rounded-full ms-[-20px]"
													alt={`Member ${index + 1}`}
												/>
											))}
										</div>
									</td>
									<td
										style={{
											padding: "5px",
											paddingBlock: "15px",
											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
										}}>
										{budget}
									</td>
									<td
										style={{
											padding: "5px",
											paddingBlock: "15px",
											borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
										}}>
										<div
											style={{
												height: "6px",
												width: "100%",
												backgroundColor: "#e0e0e0",
												borderRadius: "10px",
												overflow: "hidden",
											}}>
											<div
												style={{
													height: "100%",
													width: `${percentage}%`,
													backgroundColor: color,
													transition: "width 0.3s ease-in-out",
												}}
											/>
										</div>
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
