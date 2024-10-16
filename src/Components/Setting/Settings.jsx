import React from "react";
import person1 from "../../Assets/Images/person1.png";
import bannerimg from "../../Assets/Images/banners.png";
import userimag from "../../Assets/Images/setuser.png";
import "./Settings.css";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

function Settings() {
	return (
		<>
			<div className="settingmaindiv overflow-hidden">
				{/* Navbar Section */}
                <Nav person1={person1} pagename={"Settings"} /> 
				<div className="bottomdivpage ">
					<div className="bannerdivmain ">
						<div className="bannerdvi">
							<img src={bannerimg} alt="" />
						</div>

						<div className="userimagediv flex-wrap">
							<div className="userimageleft">
								<img src={userimag} alt="" />
								<span className="givept">Settings</span>
							</div>
							<div className="savecancelright">
								<button>Cancel</button>
								<button>Save</button>
							</div>
						</div>
					</div>
				</div>

				<div className="formmaindiv">
					<div className="sidenavigationsmaindiv">
						<NavLink
							to="/settings"
							className={({ isActive }) => (isActive ? "active" : "")}
							end /* This ensures only the exact "/settings" route is active */
						>
							My details
						</NavLink>
						<NavLink
							to="/settings/profile"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Profile
						</NavLink>
						<NavLink
							to="/settings/password"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Password
						</NavLink>
						<NavLink
							to="/settings/team"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Team
						</NavLink>
						<NavLink
							to="/settings/plan"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Plan
						</NavLink>
						<NavLink
							to="/settings/billing"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Billing
						</NavLink>
						<NavLink
							to="/settings/email"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Email
						</NavLink>
						<NavLink
							to="/settings/notifications"
							className={({ isActive }) => (isActive ? "active" : "")}>
							Notifications
						</NavLink>
					</div>

					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Settings;
