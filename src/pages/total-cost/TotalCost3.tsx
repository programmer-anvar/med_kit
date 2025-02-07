import ReactApexChart from 'react-apexcharts';
import { Select, SelectItem } from '@heroui/react';
import { SelectorIcon } from '@/assets/login/SvgIcons';
import { FaUserDoctor } from 'react-icons/fa6';
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { BiInjection } from 'react-icons/bi';
import { SiMaterialformkdocs } from 'react-icons/si';

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
			name: 'Income',
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

export const animals = [
	{ key: 'cat', label: 'Cat' },
	{ key: 'dog', label: 'Dog' },
	{ key: 'elephant', label: 'Elephant' },
	{ key: 'lion', label: 'Lion' },
	{ key: 'tiger', label: 'Tiger' },
	{ key: 'giraffe', label: 'Giraffe' },
	{ key: 'dolphin', label: 'Dolphin' },
	{ key: 'penguin', label: 'Penguin' },
	{ key: 'zebra', label: 'Zebra' },
	{ key: 'shark', label: 'Shark' },
	{ key: 'whale', label: 'Whale' },
	{ key: 'otter', label: 'Otter' },
	{ key: 'crocodile', label: 'Crocodile' },
];

const TotalCost3: React.FC = () => {
	return (
		<div className="">
			<div className="h-full  mt-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
					<div className="md:col-span-2 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-lg">Revenue</p>
							<Select
								disableSelectorIconRotation
								className="max-w-xs"
								labelPlacement="outside"
								placeholder="Kun"
								selectorIcon={<SelectorIcon />}
							>
								{animals.map((animal) => (
									<SelectItem key={animal.key}>{animal.label}</SelectItem>
								))}
							</Select>
						</div>
						<div className="flex gap-10">
							<p>
								<span className="text-lg">Umumiy foyda </span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p>
							{/* <p>
								<span className="text-lg">Chiqim summa</span>{' '}
								<span className="text-[#4361EE]">$10,840</span>
							</p> */}
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
							<p className="text-lg">Statistika</p>
							<div className="flex gap-4 text-base">
								<Select
									disableSelectorIconRotation
									className="max-w-xs"
									labelPlacement="outside"
									placeholder="Select an animal"
									selectorIcon={<SelectorIcon />}
								>
									{animals.map((animal) => (
										<SelectItem key={animal.key}>{animal.label}</SelectItem>
									))}
								</Select>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div>
								<span className="text-[#515365] text-[13px] font-[600]">
									Bugungi kun
								</span>
								<h4 className="text-[#F8538D] text-[18px] font-[600] my-2">
									423,964
								</h4>
								<span className="text-[#00AB55] text-[13px]">$170.84 1.9%</span>
							</div>

							<div className="pr-[120px]">
								<span className="text-[#515365] text-[13px] font-[600]">
									O`tgan kun
								</span>
								<h4 className="text-[#F8538D] text-[18px] font-[600] my-2">
									423,964
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-6 gap-6 mt-11">
					<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
						<div className="flex items-center gap-5">
							<div className="w-[40px] h-[40px] rounded-full bg-[#F7931A] flex items-center justify-center p-[10px]">
								<FaUserDoctor className="text-[30px]" />
							</div>
							<p className="text-[14px]">Ishchilar oyligi</p>
						</div>
						<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
							$20,000
						</h3>
					</div>

					<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
						<div className="flex items-center gap-5">
							<div className="w-[40px] h-[40px] rounded-full bg-[#E2A03F] flex items-center justify-center p-[10px]">
								<RiMoneyPoundCircleLine className="text-[30px]" />
							</div>
							<p className="text-[14px]">Kommunal To`lovlar</p>
						</div>
						<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
							$21,000
						</h3>
					</div>

					<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
						<div className="flex items-center gap-5">
							<div className="w-[40px] h-[40px] rounded-full bg-[#6EA6FF] flex items-center justify-center p-[10px]">
								<BiInjection className="text-[30px]" />
							</div>
							<p className="text-[14px]">Ish qurollar</p>
						</div>
						<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
							$11,657
						</h3>
					</div>

					<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
						<div className="flex items-center gap-5">
							<div className="w-[40px] h-[40px] rounded-full bg-[#53AE94] flex items-center justify-center p-[10px]">
								<SiMaterialformkdocs className="text-[30px]" />
							</div>
							<p className="text-[14px]">Materiallar</p>
						</div>
						<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
							$11,657
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalCost3;
