import App from "./components/App.jsx";
import Dashboard from "./components/Dasboard.jsx";
import Inventory from "./components/Inventory.jsx";
import { sourcesLoader } from "./loaders.jsx";
import { addSourceAction } from "./actions.jsx";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "/inventory",
				element: <Inventory />,
				loader: sourcesLoader,
				action: addSourceAction,
			},
		],
	},
];

export default routes;
