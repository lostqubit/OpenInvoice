import { redirect } from "react-router-dom";

export async function addSourceAction({ request }) {
	const form = await request.formData();
	const formJson = {};
	for (const [key, value] of [...form.entries()]) {
		formJson[key] = value;
		if (key === "notional_charge") {
			formJson[key] = parseInt(formJson[key]);
			continue;
		}
		if (key !== "name") {
			formJson[key] = parseInt(100 * parseFloat(formJson[key]));
		}
	}
	console.log(JSON.stringify(formJson));
	try {
		await fetch("http://localhost:8000/api/source/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formJson),
		});
	} catch (err) {
		console.error(`[ACTION ERROR]: ${err}`);
	}
	document.querySelector("#addSource-form").reset();
	return redirect("/inventory");
}
