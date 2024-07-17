import "./Inventory.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";

export default function Inventory() {
	const [sources, setSources] = useState([]);
	const { data } = useLoaderData();
	useEffect(() => {
		console.log(data);
		setSources(data);
	}, [data]);
	return (
		<div className="inventory">
			<h2>Source List</h2>
			<AddNewSource />
			<SourceTable data={sources} />
		</div>
	);
}

function AddNewSource() {
	const [collapsed, setCollapsed] = useState(true);
	const fetcher = useFetcher();
	return (
		<Fieldset
			className="add-source"
			legend="Add new source"
			toggleable
			collapsed={collapsed}
			onToggle={() => setCollapsed((prev) => !prev)}
		>
			<fetcher.Form id="addSource-form" method="post">
				<div>
					<label htmlFor="name">Company</label>
					<input id="name" name="name" type="text" maxLength="100" required />
				</div>
				<div>
					<label htmlFor="commission">Commission %</label>
					<input id="commission" name="commission" type="number" step="0.01" min="0" max="100" required />
				</div>
				<div>
					<label htmlFor="handling_fee">Handling Fee %</label>
					<input id="handling_fee" name="handling_fee" type="number" step="0.01" min="0" max="100" required />
				</div>
				<div>
					<label htmlFor="notional_charge">Notional Charge</label>
					<input id="notional_charge" name="notional_charge" type="number" required />
				</div>
				<div>
					<button className="save-btn" type="submit" form="addSource-form">
						Save
					</button>
					<button className="cancel-btn" type="reset" onClick={() => setCollapsed(true)}>
						Cancel
					</button>
				</div>
			</fetcher.Form>
		</Fieldset>
	);
}

function SourceTable({ data }) {
	return (
		<div>
			<DataTable
				value={data}
				selectionMode="single"
				selection={null}
				removableSort
				paginator
				rows={8}
				rowsPerPageOptions={[8, 15, 25, 50]}
			>
				<Column sortable field="name" header="Company"></Column>
				<Column
					field="commission"
					header="Commission Rate"
					body={(product) => <span>{product.commission} %</span>}
				></Column>
				<Column
					field="handling_fee"
					header="Handling Fee"
					body={(product) => <span>{product.handling_fee} %</span>}
				></Column>
				<Column field="notional_charge" header="Notional Charge"></Column>
			</DataTable>
		</div>
	);
}
