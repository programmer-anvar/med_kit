import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiCalendar } from 'react-icons/fi';
import { RiGroupFill } from "react-icons/ri";
import {
	Employees,
	Groups,
	Kub,
	Rashods,
	Settings,
	Statistic,
	Zone,
} from '@/assets/sitebar/SitebarSvgIcons';

const Sitebar: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [activeLink, setActiveLink] = useState<string>('');
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
		setOpenDropdown(null); // Close all dropdowns when the mouse leaves the sidebar
	};

	const handleLinkClick = (to: string, label: string) => {
		setActiveLink(label);
		navigate(to);
	};

	const toggleDropdown = (label: string) => {
		if (openDropdown === label) {
			setOpenDropdown(null);
		} else {
			setOpenDropdown(label);
		}
	};

	const links = [
		// { to: '/', label: 'Xodimlar', icon: <FiHome className='text-[25px] text-[#0E1726]' /> },
		{
			to: '/',
			label: 'Dashboard',
			icon: <FiHome className="text-[25px] text-[#0E1726]" />,
			dropdown: [
				{ to: '/stat1', label: '- Kirim' },
				{ to: '/stat2', label: '-  Chiqim' },
				{ to: '/stat2', label: '-  Sof foyda ' },
				{ to: '/stat2', label: '-  Statistika' },
			],
		},
		{
			to: '/',
			label: 'Jadval',
			icon: <FiCalendar className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Bemorlar',
			icon: <RiGroupFill className="text-[35px] text-[#0E1726] font-bold" />,
			dropdown: [
				{ to: '/prod1', label: 'Production Submenu 1' },
				{ to: '/prod2', label: 'Production Submenu 2' },
			],
		},
		{
			to: '/ombor',
			label: 'Ombor',
			icon: <Zone />,
			dropdown: [
				{ to: '/', label: 'Storage 1' },
				{ to: '/', label: 'Storage 2' },
			],
		},
		{
			to: '/sozlamalar',
			label: 'Sozlamalar',
			icon: <Settings />,
			dropdown: [
				{ to: '/sett1', label: 'Settings Submenu 1' },
				{ to: '/sett2', label: 'Settings Submenu 2' },
			],
		},
		{ to: '/sotuv', label: 'Sotuv bo’limi', icon: <Groups /> },
	];

	return (
		<div
			className="w-[100px] h-[100vh] bg-[#FFFF] transition-all flex flex-col justify-between"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				width: isHovered ? '250px' : '100px',
				transition: 'width 0.3s ease',
			}}
		>
			<div className="w-full py-6 pt-[40px] px-5">
				<div className="flex flex-col justify-center items-center">
					<h1>Logo</h1>
				</div>
				<div>
					{links.map((link) => (
						<div key={link.label}>
							<div
								onClick={() =>
									link.dropdown
										? toggleDropdown(link.label)
										: handleLinkClick(link.to, link.label)
								}
								className={`flex gap-2 p-2 mt-2 cursor-pointer rounded-[5px] ${
									!isHovered ? 'justify-center' : 'justify-start'
								} ${
									activeLink === link.label
										? 'bg-[#ffff] text-[]'
										: 'text-[#9EA3B5]'
								} `}
							>
								<div className="w-[22px] h-[22px] flex justify-center items-center">
									{link.icon}
								</div>
								<div
									className={`text-base overflow-hidden whitespace-nowrap transition-all duration-500 ${
										isHovered
											? 'opacity-100 max-w-[200px]'
											: 'opacity-0 max-w-0'
									}`}
								>
									{isHovered && <h3 className="text-[15px] ">{link.label}</h3>}
								</div>
							</div>
							{openDropdown === link.label && link.dropdown && (
								<div className="bg-[#fff] p-2 rounded-[5px] transition-all duration-500">
									{link.dropdown.map((sub) => (
										<div
											key={sub.label}
											onClick={() => handleLinkClick(sub.to, sub.label)}
											className="p-1 hover:bg-[#00E396] hover:text-white rounded-[3px]"
										>
											{sub.label}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sitebar;
