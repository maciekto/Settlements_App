import React from 'react';
import ReactDOM from 'react-dom/client';

import '../base/base.css';
import Auth from '../3_Templates/Auth/Auth.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.tsx';
import MainPage from './MainPage/MainPage.tsx';
import EventCreate from './EventCreate/EventCreate.tsx';
import EventDashboard from './EventDashboard/EventDashboard.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Auth />,
		children: [
			// Default path after login and outlet in App component
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/event/:id',
				element: <EventDashboard />,
			},
			{
				path: '/events/create',
				element: <EventCreate />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
);
