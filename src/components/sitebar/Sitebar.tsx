import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiCalendar } from 'react-icons/fi';
import { RiGroupFill } from 'react-icons/ri';
import { Groups } from '@/assets/sitebar/SitebarSvgIcons';
import { SiMaildotru } from 'react-icons/si';
import { FaDollarSign, FaLock } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';

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
				{ to: '/TotalIncome', label: '- Kirim' },
				{ to: '/totalCost', label: '-  Chiqim' },
				{ to: '/homePAge-1', label: '-  Sof foyda ' },
				{ to: '/homePAge-2', label: '-  Statistika' },
			],
		},
		{
			to: '/',
			label: 'Jadval',
			icon: <FiCalendar className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/bemorlar',
			label: 'Bemorlar',
			icon: <RiGroupFill className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Mailbox',
			icon: <SiMaildotru className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Invoice',
			icon: <FaDollarSign className="text-[30px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Bemorlar',
			icon: <RiGroupFill className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Boshqaruv paneli',
			icon: <MdLaptopMac className="text-[35px] text-[#0E1726] font-bold" />,
		},
		{
			to: '/',
			label: 'Tasdiqlash',
			icon: <FaLock className="text-[35px] text-[#0E1726] font-bold" />,
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
				<div className="">
					<h1 className="text-center">Logo</h1>
				</div>
				<div className="fixed top-[80px]">
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
								<div className="bg-[#fff] p-2 rounded-[5px] transition-all duration-500 cursor-pointer">
									{link.dropdown.map((sub) => (
										<div
											key={sub.label}
											onClick={() => handleLinkClick(sub.to, sub.label)}
											className="p-1 hover:bg-[#00E396] hover:text-white rounded-[3px] transition-all"
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
