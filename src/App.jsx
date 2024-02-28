import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Repos from "./pages/Repos.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: "/repos",
		element: <Repos />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
