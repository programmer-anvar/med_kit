import { MdOutlineCalendarToday } from 'react-icons/md';
import { PiNotePencil } from 'react-icons/pi';
import { BsChat } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Input } from '@heroui/react';
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
					/>
				</div>

				<div className="flex items-center gap-5 absolute right-[120px] px-[150px]">
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
