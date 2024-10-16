// Table.js
import React from "react";
import "./table.css";
const Table = () => {
	const data = [
		{ id: 1, item: "Home Decor Range", percentage: 46, color: "#FCB859" },
		{ id: 2, item: "Disney Princess Dress", percentage: 17, color: "#A9DFD8" },
		{ id: 3, item: "Bathroom Essentials", percentage: 19, color: "#28AEF3" },
		{ id: 4, item: "Apple Smartwatch", percentage: 29, color: "#F2C8ED" },
	];

	return (
		<div className=" ">
			<div
				style={{
					padding: "20px",
					backgroundColor: "#202125",
					borderRadius: "8px",
				}}
				className=" givewidht lg:overflow-x-hidden md:overflow-x-scroll w-full">
				<table
					style={{ borderCollapse: "collapse" }}
					className="mywidht lg:w-[100%] md:w-[150%]  w-[200%]">
					<thead>
						<tr>
							<th
								style={{
									paddingInline: "10px",
									paddingBlock : "15px",
									color: "#fff",
								}}>
								#
							</th>
							<th
								style={{
									paddingInline: "10px",
									paddingBlock : "15px",
									textAlign: "left",
									color: "#fff",
								}}>
								Item
							</th>
							<th
								style={{
									paddingInline: "10px",
									paddingBlock : "15px",
									color: "#fff",
								}}>
								Percentage
							</th>
							<th
								style={{
									paddingInline: "10px",
									paddingBlock : "15px",
									color: "#fff",
								}}>
								Sales
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map(({ id, item, percentage, color }) => (
							<tr
								key={id}
								style={{ backgroundColor: "inherit", color: "#ffff" }}>
								<td
									style={{
										paddingInline: "5px",
										paddingBlock: "8px",
										borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
									}}>
									{id}
								</td>
								<td
									style={{
										paddingInline: "5px",
										paddingBlock: "8px",
										borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
									}}>
									{item}
								</td>
								<td
									style={{
										paddingInline: "5px",
										paddingBlock: "8px",
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
												backgroundColor: color, // Use the color from the data
												transition: "width 0.3s ease-in-out",
											}}
										/>
									</div>
								</td>
								<td
									style={{
										paddingInline: "5px",
										paddingBlock: "8px",
										borderBottom: "1px solid rgba(204, 204, 204, 0.1)",
									}}>
									<div
										style={{
											paddingInline: "5px",
											paddingBlock: "8px",
											backgroundColor: `rgba(${parseInt(
												color.slice(1, 3),
												16
											)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
												color.slice(5, 7),
												16
											)}, 0.5)`, // 50% opacity
											border: `0.5px solid ${color}`,
											borderRadius: "5px",
											textAlign: "center",
											width: "60%",
											margin: "0 auto",
											color: "#fff", // Optional: change text color to white for better visibility
										}}>
										{percentage}%
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
