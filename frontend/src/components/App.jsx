import "./App.css";
import ScrollToTop from "../scrollReset";
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
	const [selected, setSelected] = useState(0);
	return (
		<>
			<ScrollToTop />
			<Navbar selected={selected} setSelected={setSelected} />
			<div>
				<Searchbar selected={selected} />
				<Outlet />
			</div>
		</>
	);
}

export default App;
