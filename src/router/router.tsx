import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const Login = lazy(() => import('@/pages/Login/Login'));
const Home = lazy(() => import('@/pages/Home/Home'));

import { SuspenseFallback } from '@/components/common/SuspenseFallback/SuspenseFallback';
import { Preloader } from '@/components/layout/Preloader/Preloader';

const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<SuspenseFallback />}>
				<Preloader />
			</Suspense>
		),
	},
	{
		path: '/browse',
		element: (
			<Suspense fallback={<SuspenseFallback />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: '/home',
		element: (
			<Suspense fallback={<SuspenseFallback />}>
				<Home />
			</Suspense>
		),
	},
]);

export const Router = () => {
	return <RouterProvider router={routes} />;
};
