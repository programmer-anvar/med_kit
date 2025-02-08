import Layoutss from '@/components/Layout';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
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
]);

export const publicRouter = createBrowserRouter([
	{ path: '*', element: <Login /> },
]);
