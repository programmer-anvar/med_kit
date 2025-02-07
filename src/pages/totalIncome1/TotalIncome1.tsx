import { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; // Ensure this is imported
import TotalProfit from './TotalProfit';
import { Card } from 'antd';
import ComporativeAdvantage from './ComporativeAdvantage';
import BenifitPation from './BenifitPation';

const TotalIncome1 = () => {
	const [state] = useState({
		series: [
			{
				name: 'Desktops',
				data: [10, 30, 10, 51, 5, 62, 69, 91, 148],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'straight',
			},
			title: {
				text: 'Product Trends by Month',
				align: 'left',
			},
			grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
				],
			},
		},
	});

	return (
		<section className="h-[100%]">
			<div className="flex items-start gap-5 justify-between w-full">
				<div id="chart" className="w-[70%]">
					<Card>
						<ReactApexChart
							options={state.options}
							series={state.series}
							type="line"
							height={350}
						/>
						<div id="html-dist"></div>
					</Card>
				</div>

				<div className="w-[30%]">
					<h2 className="mb-4">Umumiy foyda</h2>
					<TotalProfit />
				</div>
			</div>
			<ComporativeAdvantage />
			<BenifitPation />

			<div></div>
		</section>
	);
};

export default TotalIncome1;
