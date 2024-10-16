import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import "../footer/footer.css";

export default function Deshboard() {
	return (
		<div className="flex w-full   bg-black ">
			{/* Footer with fixed width */}
			<div className="  myft md:w-[300px] w-[80px]  h-screen  sticky top-0   b  ">
				<Footer />
			</div>
			{/* Outlet takes the remaining space */}
			<div className=" md:w-[calc(100%-300px)] w-[calc(100%-80px)] bg-black ">
				<Outlet />
			</div>{" "}
			{/* This will render the Agents component here */}
		</div>
	);
}
