import Layoutss from '@/components/Layout';
import Login from '@/pages/login/Login';
import Revenue from '@/pages/revenue/Revenue';
import TotalIncome from '@/pages/totalIncome/TotalIncome';
import { createBrowserRouter } from 'react-router-dom';

export const protectedRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layoutss>
				<TotalIncome />
			</Layoutss>
		),
	},

	{
		path: '/revenue',
		element: (
			<Layoutss>
				<Revenue />
			</Layoutss>
		),
	},
]);

export const publicRouter = createBrowserRouter([
	{ path: '*', element: <Login /> },
]);
