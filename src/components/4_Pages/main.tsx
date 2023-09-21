import React from "react";
import ReactDOM from "react-dom/client";

import "../base/base.css";
import Auth from "./Auth/Auth.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage.tsx";
import UserContext from "../context/UserContext.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Auth />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
);
