import React from 'react';
import ReactDOM from 'react-dom/client';

import '../base/base.css';
import Auth from '../3_Templates/Auth/Auth.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.tsx';
import MainPage from './MainPage/MainPage.tsx';
import EventCreate from './EventPages/EventCreate/EventCreate.tsx';
import EventDashboard from './EventPages/EventDashboard/EventDashboard.tsx';
import Testing from './Testing/Testing.tsx';
import EventEdit from './EventPages/EventEdit/EventEdit.tsx';
import EventDelete from './EventPages/EventDelete/EventDelete.tsx';
import EventPayments from './EventPages/EventPayments/EventPayments.tsx';
import PaymentCreate from './PaymentPages/PaymentCreate/PaymentCreate.tsx';
import UserPage from './UserPages/UserPage/UserPage.tsx';

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
				children: [
					{
						path: '/event/:id/',
						element: <EventPayments />,
					},
				],
			},
			{
				path: '/event/:id/edit',
				element: <EventEdit />,
			},
			{
				path: '/event/:id/delete',
				element: <EventDelete />,
			},
			{
				path: '/event/create',
				element: <EventCreate />,
			},
			{
				path: '/event/:id/payment/create',
				element: <PaymentCreate />
			},
			{
				path: '/user/:id',
				element: <UserPage />
			}
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/testing',
		element: <Testing />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
);
