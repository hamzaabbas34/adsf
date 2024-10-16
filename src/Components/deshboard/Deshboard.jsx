import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import "../footer/footer.css";

export default function Deshboard() {
	return (
		<div className="flex w-full  ">
			{/* Footer with fixed width */}
			<div className="  myft w-[300px] relative min-h-screen bg-black ">
				<Footer />
			</div>
			{/* Outlet takes the remaining space */}
			<div className="w-full bg-black ">
				<Outlet />
			</div>{" "}
			{/* This will render the Agents component here */}
		</div>
	);
}
