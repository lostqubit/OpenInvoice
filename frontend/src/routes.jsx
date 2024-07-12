import App from "./components/App.jsx";
import Dashboard from "./components/Dasboard.jsx";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
];

export default routes;
