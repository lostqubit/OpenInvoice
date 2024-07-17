export async function sourcesLoader() {
	const response = await fetch("http://localhost:8000/api/source/");
	const data = await response.json();
	data.forEach((item, index, arr) => {
		arr[index]["commission"] = parseFloat(arr[index]["commission"] / 100);
		arr[index]["handling_fee"] = parseFloat(arr[index]["handling_fee"] / 100);
	});
	return { data };
}
