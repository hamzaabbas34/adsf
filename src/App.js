import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deshboard from "./Components/deshboard/Deshboard.jsx";
import Agents from "./Components/agents/Agents.jsx";
import List from "./Components/list/List.jsx";
import Compaigns from "./Components/compaigns/Compaigns.jsx";
import Record from "./Components/Recording/Record.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Goals from "./Components/Goals/Goals.jsx";
import Settings from "./Components/Setting/Settings.jsx";
import Mydetails from "./Components/Setting/Mydetails/Mydetails.jsx";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Deshboard />}>
					<Route index element={<Agents />} /> {/* Changed to 'index' */}
					<Route path="/list" element={<List />} />
					<Route path="/compaigns" element={<Compaigns />} />
					<Route path="/recording" element={<Record />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/goals" element={<Goals />} />
					<Route path="/settings" element={<Settings />}>
						<Route index element={<Mydetails />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
