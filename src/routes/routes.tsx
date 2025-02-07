import Layoutss from '@/components/Layout';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import NetProfit from '@/pages/net-profit/NetProfit';
import Revenue from '@/pages/revenue/Revenue';
import TotalCost from '@/pages/total-cost/TotalCost';
import TotalCost2 from '@/pages/total-cost/TotalCost2';
import TotalCost3 from '@/pages/total-cost/TotalCost3';
import TotalIncome from '@/pages/total-income/TotalIncome';
import TotalIncome1 from '@/pages/totalIncome1/TotalIncome1';
import TotalIncome_2 from '@/pages/totalIncome1/TotalIncome_2';
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
		path: '/total_income',
		element: (
			<Layoutss>
				<TotalIncome1 />
			</Layoutss>
		),
	},
	{
		path: '/total_income_2',
		element: (
			<Layoutss>
				<TotalIncome_2 />
			</Layoutss>
		),
	},
	{
		path: '/total_income1',
		element: (
			<Layoutss>
				<TotalIncome />
			</Layoutss>
		),
	},
	{
		path: '/total_cost',
		element: (
			<Layoutss>
				<TotalCost />
			</Layoutss>
		),
	},
	{
		path: '/total_cost2',
		element: (
			<Layoutss>
				<TotalCost2 />
			</Layoutss>
		),
	},
	{
		path: '/total_cost3',
		element: (
			<Layoutss>
				<TotalCost3 />
			</Layoutss>
		),
	},
	{
		path: '/sof_foyda',
		element: (
			<Layoutss>
				<NetProfit />
			</Layoutss>
		),
	},
	{
		path: '/sales',
		element: (
			<Layoutss>
				<NetProfit />
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
