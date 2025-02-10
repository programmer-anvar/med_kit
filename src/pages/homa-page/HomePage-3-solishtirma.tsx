import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// Define types for the series and options in the state
type ChartSeries = {
	name: string;
	data: number[];
};

type ChartOptions = {
	chart: {
		type: string;
		height: number;
	};
	plotOptions: {
		bar: {
			horizontal: boolean;
			columnWidth: string;
			borderRadius: number;
			borderRadiusApplication: string;
		};
	};
	dataLabels: {
		enabled: boolean;
	};
	stroke: {
		show: boolean;
		width: number;
		colors: string[];
	};
	xaxis: {
		categories: string[];
	};
	yaxis: {
		title: {
			text: string;
		};
	};
	fill: {
		opacity: number;
	};
	tooltip: {
		y: {
			formatter: (val: number) => string;
		};
	};
};

// Define the type for the state used in the component
type ChartState = {
	series: ChartSeries[];
	options: ChartOptions;
};

const HomePageSolishtirma = () => {
	const [state] = useState<ChartState>({
		series: [
			{
				name: 'Net Profit',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Revenue',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: 'Free Cash Flow',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					borderRadius: 5,
					borderRadiusApplication: 'end',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: [
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
				],
			},
			yaxis: {
				title: {
					text: '$ (thousands)',
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return '$ ' + val + ' thousands';
					},
				},
			},
		},
	});

	return (
		<div className="mt-[30px]">
			<div id="chart">
				<h2 className="text-[28px]">Solishtirma</h2>
				<ReactApexChart
					options={state.options}
					series={state.series}
					type="bar"
					height={350}
				/>
			</div>
			<div id="html-dist"></div>
		</div>
	);
};

export default HomePageSolishtirma;
