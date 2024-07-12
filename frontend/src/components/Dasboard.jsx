import "./Dashboard.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import ordersIcon from "../assets/orders.png";
import salesIcon from "../assets/sales.png";
import revenueIcon from "../assets/revenue.png";
import pendingIcon from "../assets/pending.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

export default function Dashboard() {
	return (
		<div className="dashboard">
			<DashboardStats />
			<div>
				<DashboardOrders />
				<DashboardTransactions />
			</div>
		</div>
	);
}

function DashboardStats() {
	return (
		<div>
			<div className="dashboard-card">
				<div>
					<h3>Total Orders</h3>
					<h2>100</h2>
				</div>
				<img src={ordersIcon} />
			</div>
			<div className="dashboard-card">
				<div>
					<h3>Total Sales</h3>
					<h2>&#8377; 250123</h2>
				</div>
				<img src={salesIcon} />
			</div>
			<div className="dashboard-card">
				<div>
					<h3>Total Revenue</h3>
					<h2>&#8377; 130500</h2>
				</div>
				<img src={revenueIcon} />
			</div>
			<div className="dashboard-card">
				<div>
					<h3>Total Pending</h3>
					<h2>40</h2>
				</div>
				<img src={pendingIcon} />
			</div>
		</div>
	);
}

function DashboardOrders() {
	const orders = [
		{
			id: 1,
			date: "2024-07-01",
			customer: "John Doe",
			status: "Completed",
			total: 199.99,
		},
		{
			id: 2,
			date: "2024-07-02",
			customer: "Jane Smith",
			status: "Pending",
			total: 49.99,
		},
		{
			id: 3,
			date: "2024-07-03",
			customer: "Alice Johnson",
			status: "Order Placed",
			total: 89.5,
		},
		{
			id: 4,
			date: "2024-07-04",
			customer: "Bob Brown",
			status: "Completed",
			total: 120.0,
		},
		{
			id: 5,
			date: "2024-07-05",
			customer: "Charlie Green",
			status: "Pending",
			total: 75.25,
		},
		{
			id: 6,
			date: "2024-07-06",
			customer: "Daisy Blue",
			status: "Completed",
			total: 64.75,
		},
		{
			id: 7,
			date: "2024-07-07",
			customer: "Ethan White",
			status: "Completed",
			total: 150.0,
		},
	];

	const totalTemplate = (order) => {
		return <strong>&#8377; {order.total}</strong>;
	};

	const statusTemplate = (order) => {
		return (
			<Tag
				value={order.status}
				icon={
					order.status === "Completed"
						? "pi pi-check"
						: order.status === "Pending"
						? "pi pi-exclamation-triangle"
						: "pi pi-info-circle"
				}
				severity={order.status === "Completed" ? "success" : order.status === "Pending" ? "warning" : "info"}
			></Tag>
		);
	};

	return (
		<div className="dashboard-recentOrders">
			<div>
				<h3>Recent Orders</h3>
				<DataTable value={orders} selectionMode="single" selection={null} tableStyle={{ width: "100%" }}>
					<Column field="id" header="ID"></Column>
					<Column field="date" header="Date"></Column>
					<Column field="customer" header="Customer"></Column>
					<Column field="status" header="Status" body={statusTemplate}></Column>
					<Column field="total" header="Sales" body={totalTemplate}></Column>
				</DataTable>
			</div>
			<p>View all&rarr;</p>
		</div>
	);
}

function DashboardTransactions() {
	const shipments = [
		{
			date: "2024-07-01",
			source: "Warehouse A",
			customer: "John Doe",
			total: 199.99,
		},
		{
			date: "2024-07-02",
			source: "Warehouse B",
			customer: "Jane Smith",
			total: 49.99,
		},
		{
			date: "2024-07-03",
			source: "Warehouse C",
			customer: "Alice Johnson",
			total: 89.5,
		},
		{
			date: "2024-07-04",
			source: "Warehouse A",
			customer: "Bob Brown",
			total: 120.0,
		},
		{
			date: "2024-07-05",
			source: "Warehouse B",
			customer: "Charlie Green",
			total: 75.25,
		},
		{
			date: "2024-07-06",
			source: "Warehouse C",
			customer: "Daisy Blue",
			total: 64.75,
		},
		{
			date: "2024-07-07",
			source: "Warehouse A",
			customer: "Ethan White",
			total: 150.0,
		},
	];

	const totalTemplate = (order) => {
		return <strong>&#8377; {order.total}</strong>;
	};

	return (
		<div className="dashboard-recentTransactions">
			<div>
				<h3>Recent Shipments</h3>
				<DataTable value={shipments} selectionMode="single" selection={null} tableStyle={{ width: "100%" }}>
					<Column field="date" header="Shipped"></Column>
					<Column field="source" header="Source"></Column>
					<Column field="customer" header="Customer"></Column>
					<Column field="total" header="Total" body={totalTemplate}></Column>
				</DataTable>
			</div>
			<p>View all&rarr;</p>
		</div>
	);
}
