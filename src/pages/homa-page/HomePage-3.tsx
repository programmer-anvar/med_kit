import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Select, SelectItem } from '@heroui/react';
import HomePageSolishtirma from './HomePage-3-solishtirma';
import HomePageTable3 from './HomePageTable3';
interface SalesByCategory {
	series: number[];
	options?: ApexCharts.ApexOptions;
}

interface RevenueChart {
	series: {
		name?: string;
		data: number[];
	}[];
	options?: ApexCharts.ApexOptions;
}

const salesByCategory: SalesByCategory = {
	series: [985, 737, 270],
	options: {
		chart: {
			type: 'donut',
			height: 460,
			fontFamily: 'Nunito, sans-serif',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 25,
		},

		legend: {
			position: 'bottom',
			horizontalAlign: 'center',
			fontSize: '14px',
			height: 50,
			offsetY: 20,
		},
		plotOptions: {
			pie: {
				donut: {
					size: '65%',
					background: 'transparent',
					labels: {
						show: true,
						name: {
							show: true,
							fontSize: '29px',
							offsetY: -10,
						},
						value: {
							show: true,
							fontSize: '26px',
							offsetY: 16,
						},
						total: {
							show: true,
							label: 'Total',
							color: '#888ea8',
							fontSize: '29px',
						},
					},
				},
			},
		},
		labels: ['Apparel', 'Sports', 'Others'],
		states: {
			hover: {
				filter: {
					type: 'none',
					value: 0.15,
				},
			},
			active: {
				filter: {
					type: 'none',
					value: 0.15,
				},
			},
		},
	},
};

const revenueChart: RevenueChart = {
	series: [
		{
			name: 'Expenses',
			data: [
				16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
				18000, 19000,
			],
		},
	],
	options: {
		chart: {
			height: 325,
			type: 'area',
			fontFamily: 'Nunito, sans-serif',
			zoom: {
				enabled: false,
			},
			toolbar: {
				show: false,
			},
		},

		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: 2,
			lineCap: 'square',
		},
		markers: {
			discrete: [
				{
					seriesIndex: 0,
					dataPointIndex: 6,
					fillColor: '#1B55E2',
					strokeColor: 'transparent',
					size: 7,
				},
				{
					seriesIndex: 1,
					dataPointIndex: 5,
					fillColor: '#E7515A',
					strokeColor: 'transparent',
					size: 7,
				},
			],
		},
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: true,
			},
			labels: {
				offsetY: 5,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-xaxis-title',
				},
			},
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: (value: number) => {
					return value / 1000 + 'K';
				},
				offsetY: 0,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-yaxis-title',
				},
			},
		},
		grid: {
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			fontSize: '16px',
			itemMargin: {
				horizontal: 10,
				vertical: 5,
			},
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: !1,
				opacityTo: 0.05,
			},
		},
	},
};

const HomePage3: React.FC = () => {
	return (
		<div className="">
			<div className="max-h-[calc(100vh-200px)] overflow-y-scroll mt-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
					<div className="md:col-span-2 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-lg">Revenue</p>
							<div className="flex gap-3">
								<div className="w-full flex flex-col gap-2 ">
									<Select className="w-[300px]" label="kun">
										<SelectItem>Kun</SelectItem>
										<SelectItem>Kun</SelectItem>
										<SelectItem>Kun</SelectItem>
									</Select>
								</div>
							</div>
						</div>
						<div className="flex gap-10">
							<p>
								<span className="text-lg">Kirim summa</span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p>
							<p>
								<span className="text-lg">Chiqim summa</span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p>
						</div>
						<ReactApexChart
							series={revenueChart.series}
							options={revenueChart.options}
							type="area"
							height={360}
						/>
					</div>
					<div className="md:col-span-1 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-lg">Umumiy foyda</p>
							<div className="flex gap-4 text-base">
								<span className="text-[#4361EE] underline cursor-pointer">
									Income
								</span>
								<span className="text-[#00AB55] cursor-pointer">Outcome</span>
							</div>
						</div>
						<ReactApexChart
							series={salesByCategory.series}
							options={salesByCategory.options}
							type="donut"
							height={460}
						/>
					</div>
				</div>
			</div>
			<HomePageSolishtirma />

			<HomePageTable3 />

			<div className="w-full max-w-4xl mx-auto mt-[30px]">
				<div className="flex justify-between border border-[#989494]  text-center rounded-[14px]">
					<div className="w-1/4  border-r border-gray-300 h-[300px] flex flex-col items-center justify-center gap-[25px]">
						<div className="text-black text-[26px]">
							Bemorlardan kelgan foyda
						</div>
						<div className="h-0.5 w-full bg-black"></div>
						<div className="mt-2 text-lg font-semibold text-[26px]">$3,500</div>
					</div>
					<div className="w-1/4  border-r border-gray-300 h-[300px] flex flex-col items-center justify-center gap-[25px]">
						<div className="text-black text-[26px]">
							Bemorlardan kelgan foyda
						</div>
						<div className="h-0.5 w-full bg-black"></div>
						<div className="mt-2 text-lg font-semibold text-[26px]">$3,500</div>
					</div>
					<div className="w-1/4  border-r border-gray-300 h-[300px] flex flex-col items-center justify-center gap-[25px]">
						<div className="text-black text-[26px]">
							Bemorlardan kelgan foyda
						</div>
						<div className="h-0.5 w-full bg-black"></div>
						<div className="mt-2 text-lg font-semibold text-[26px]">$3,500</div>
					</div>
					<div className="w-1/4  border-r border-gray-300 h-[300px] flex flex-col items-center justify-center gap-[25px]">
						<div className="text-black text-[26px]">
							Bemorlardan kelgan foyda
						</div>
						<div className="h-0.5 w-full bg-black"></div>
						<div className="mt-2 text-lg font-semibold text-[26px]">$3,500</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage3;
