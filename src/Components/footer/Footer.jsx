import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../Assets/Images/logo.png";
import { Icon } from "@iconify/react";
import './footer.css'

export default function Footer() {
	return (
		<div className="  footer md:w-[300px]  min-h-[100vh] left-0 bck text-white border-r-[0.5px] border-white border-opacity-50">
			<div className="flex justify-start items-center py-8 px-2 gap-2 logdiv">
				<img src={logoImage} alt="" className="w-[60px] h-[60px]" />
				<h2 className="  md:block hidden ">SNAPLEADS</h2>
			</div>
			<div className="font-inter px-4 mt-5 mypa">
				<ul className="flex flex-col gap-5 myuls">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="mynaui:users"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Agents
									</p>
								</>
							)}
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/list"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="pajamas:list-bulleted"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>

									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										List
									</p>
								</>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/compaigns"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="tabler:speakerphone"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Campaigns
									</p>
								</>
							)}
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/recording"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="carbon:recording"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Recordings
									</p>
								</>
							)}
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/admin"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="lsicon:user-outline"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Admin
									</p>
								</>
							)}
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/goals"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="hugeicons:target-03"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Goals
									</p>
								</>
							)}
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/settings"
							className={({ isActive }) =>
								`flex items-center gap-4 px-4 py-2 rounded-md ${
									isActive ? "bg-[#3BE3E3] text-black" : ""
								}`
							}>
							{({ isActive }) => (
								<>
									<Icon
										icon="icon-park-outline:setting"
										width="1.8rem"
										height="1.8rem"
										style={{ color: isActive ? "black" : "white" }}
									/>
									<p
										className={`text-[16px]   md:block hidden ${
											isActive ? "text-black" : "text-white"
										}`}>
										Settings
									</p>
								</>
							)}
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
