import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Select, SelectItem } from '@heroui/react';
import TotalIncomeTable from './TotalIncomeTable';

interface RevenueChart {
	series: {
		name?: string;
		data: number[];
	}[];
	options?: ApexCharts.ApexOptions;
}

const revenueChart: RevenueChart = {
	series: [
		{
			name: 'Kirim',
			data: [
				16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
				14000, 17000,
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

const TotalIncome: React.FC = () => {
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
								<span className="text-lg">Umumiy foyda</span>{' '}
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
					<div className="md:col-span-1 bg-white p-5 rounded-md shadow h-[250px]">
						<div className="flex justify-between">
							<h2 className="text-[#0E1726] text-[19px] font-[700]">
								Statistika
							</h2>
							<Select className="w-[130px]" label="kun">
								<SelectItem>Kun</SelectItem>
								<SelectItem>Kun</SelectItem>
								<SelectItem>Kun</SelectItem>
							</Select>
						</div>

						<div className="flex items-center justify-between mt-[32px]">
							<div>
								<p className="text-[#515365] text-[13px] font-[600]">
									Bugungi kun
								</p>
								<h3 className="text-[#F8538D] font-[600] text-[18px] mt-[2px]">
									423,964
								</h3>
								<p className="text-[#00AB55] font-[600] text-[13px]">
									$170.84 1.9%
								</p>
							</div>

							<div>
								<p className="text-[#515365] text-[13px] font-[600]">
									O'tgan kun
								</p>
								<h3 className="text-[#F8538D] font-[600] text-[18px] mt-[2px]">
									7,929
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<TotalIncomeTable />
		</div>
	);
};

export default TotalIncome;
