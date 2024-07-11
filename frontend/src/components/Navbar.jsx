import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar({ selected, setSelected }) {
	return (
		<nav>
			<h2>
				<Link to="/">
					<span>Open</span>
					<span>Invoice</span>
				</Link>
			</h2>
			<div className="main-menu">
				<h3>MAIN MENU</h3>
				<ul>
					<li className={selected === 0 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(0)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"
								/>
							</svg>
							<span>Dashboard</span>
						</Link>
					</li>
					<li className={selected === 1 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(1)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M17 9H7V7H17V9M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13H15M9 22L10.87 20.76C12.14 22.14 13.97 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V3H3V22L6 20L9 22M9 19.6L6 17.6L5 18.26V5H19V9.67C18.09 9.24 17.07 9 16 9C14.09 9 12.36 9.76 11.1 11H7V13H9.67C9.24 13.91 9 14.93 9 16C9 17.12 9.26 18.17 9.73 19.11L9 19.6M16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z"
								/>
							</svg>
							<span>Orders</span>
						</Link>
					</li>
					<li className={selected === 2 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(2)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3M5 10.5L6.5 9L8 10.5L11.5 7L13 8.5L8 13.5L5 10.5Z"
								/>
							</svg>
							<span>Shipments</span>
						</Link>
					</li>
					<li className={selected === 3 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(3)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2M13 10H10V17H12.1C12.2 16.2 12.6 15.4 13 14.7V10M16 10V12.3C16.6 12.1 17.3 12 18 12C18.3 12 18.7 12 19 12.1V10H16M12.1 19H2V22H13.5C12.8 21.2 12.3 20.1 12.1 19M21 6L11.5 1L2 6V8H21V6M7 17V10H4V17H7Z"
								/>
							</svg>
							<span>Transactions</span>
						</Link>
					</li>
					<li className={selected === 4 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(4)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16Z"
								/>
							</svg>
							<span>Reports</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="admin">
				<h3>ADMIN</h3>
				<ul>
					<li className={selected === 5 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(5)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
								/>
							</svg>
							<span>Customers</span>
						</Link>
					</li>
					<li className={selected === 6 ? "active" : "inactive"}>
						<Link to="/" onClick={() => setSelected(6)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									fill="#202224"
									d="M4 4V6H20V4M4 7L3 12V14H4V20H13C12.95 19.66 12.92 19.31 12.92 18.95C12.92 17.73 13.3 16.53 14 15.53V14H15.54C16.54 13.33 17.71 12.96 18.91 12.96C19.62 12.96 20.33 13.09 21 13.34V12L20 7M6 14H12V18H6M18 15V18H15V20H18V23H20V20H23V18H20V15"
								/>
							</svg>
							<span>Inventory</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
