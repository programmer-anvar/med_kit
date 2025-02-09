import Layoutss from '@/components/Layout';
import HomePage1 from '@/pages/homa-page/HomePage-1';
import HomePage2 from '@/pages/homa-page/HomePage-2';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import TotalIncome from '@/pages/total-income/TotalIncome';
import { createBrowserRouter } from 'react-router-dom';

export const protectedRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layoutss>
				<Home />
			</Layoutss>
		),
	},
	{
		path: '/homePAge-1',
		element: (
			<Layoutss>
				<HomePage1 />
			</Layoutss>
		),
	},
	{
		path: '/homePAge-2',
		element: (
			<Layoutss>
				<HomePage2 />
			</Layoutss>
		),
	},
	{
		path: '/TotalIncome',
		element: (
			<Layoutss>
				<TotalIncome />
			</Layoutss>
		),
	},
]);

export const publicRouter = createBrowserRouter([
	{ path: '*', element: <Login /> },
]);
