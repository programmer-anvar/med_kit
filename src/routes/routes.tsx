import Layoutss from '@/components/Layout';
import Employees from '@/pages/employees/Employees';
import Finance from '@/pages/finance/Finance';
import HomePage1 from '@/pages/homa-page/HomePage-1';
import HomePage2 from '@/pages/homa-page/HomePage-2';
import HomePage3 from '@/pages/homa-page/HomePage-3';
import Login from '@/pages/login/Login';
import Patients from '@/pages/patients/Patients';
import Sales from '@/pages/sales/Sales';
import TotalCost from '@/pages/total-cost/TotalCost';
import TotalIncome from '@/pages/total-income/TotalIncome';
import { createBrowserRouter } from 'react-router-dom';

export const protectedRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layoutss>
				<Sales />
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
		path: '/homePAge-3',
		element: (
			<Layoutss>
				<HomePage3 />
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
	{
		path: '/totalCost',
		element: (
			<Layoutss>
				<TotalCost />
			</Layoutss>
		),
	},
	{
		path: '/sales',
		element: (
			<Layoutss>
				<Sales />
			</Layoutss>
		),
	},
	{
		path: '/bemorlar',
		element: (
			<Layoutss>
				<Patients />
			</Layoutss>
		),
	},
	{
		path: '/hodimlar',
		element: (
			<Layoutss>
				<Employees />
			</Layoutss>
		),
	},
	{
		path: '/boshqaruv_paneli',
		element: (
			<Layoutss>
				<Finance />
			</Layoutss>
		),
	},
]);

export const publicRouter = createBrowserRouter([
	{ path: '*', element: <Login /> },
]);
