import { MdOutlineCalendarToday } from 'react-icons/md';
import { PiNotePencil } from 'react-icons/pi';
import { BsChat } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Input } from '@heroui/react';
export const SearchIcon = (props) => {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			{...props}
		>
			<path
				d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<path
				d="M22 22L20 20"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
};
const Header = () => {
	return (
		<header className="w-full">
			<nav className="bg-white h-[80px] px-4 flex items-center justify-between fixed z-50  w-full">
				<div className="hidden md:flex items-center gap-5 ">
					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<MdOutlineCalendarToday className="  text-[20px]" />
					</div>
					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<PiNotePencil className="  text-[20px]" />
					</div>
					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<BsChat className="  text-[20px]" />
					</div>
					{/* <Search placeholder="input search text" style={{ width: 250 }} /> */}
					<Input
						isClearable
						className="w-full sm:max-w-[44%]"
						placeholder="Search by name..."
						startContent={<SearchIcon />}
					/>
				</div>

				<div className="flex items-center gap-5 absolute right-[120px]">
					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<FaRegMoon className="  text-[20px]" />
					</div>

					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<img
							src="https://archive.uz/source/images/GetPDF-(2).gif"
							className="w-[30px]"
							alt="sfsfsf"
						/>
					</div>

					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<BsChat className="  text-[20px]" />
					</div>

					<div className="bg-[#FAFBFA] h-[45px] w-[45px]  rounded-[50%] flex items-center justify-center">
						<IoMdNotificationsOutline className="  text-[25px]" />
					</div>

					<img
						className="w-[40px] h-[40px] object-cover rounded-[50%]"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
						alt=""
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
