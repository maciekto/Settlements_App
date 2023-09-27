import React from 'react';
import ReactDOM from 'react-dom/client';

import '../base/base.css';
import Auth from '../3_Templates/Auth/Auth.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.tsx';
import Events from './Events/Events.tsx';
import EventCreate from './EventCreate/EventCreate.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Auth />,
		children: [
			// Default path after login and outlet in App component
			{
				path: '/',
				element: <Events />,
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
