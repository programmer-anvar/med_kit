import { Button, Input } from '@heroui/react';
import EmployeesTable from './EmployeesTable';
import { IoPersonAddOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { GrCubes } from 'react-icons/gr';
import { SearchIcon } from '@/assets/hodimlar/HodimlarSvg';

const Employees = () => {
	return (
		<div className="mt-[41px]">
			<div className="flex justify-between ">
				<h2 className="text-[#0E1726] text-[20px] font-[700]">Hodimlar</h2>
				<div className="flex gap-[13px]">
					<Button color="primary">
						<IoPersonAddOutline className="text-[16px]" />
						Add Contact
					</Button>
					<Button color="primary">
						<FaBars className="text-[16px]" />
					</Button>
					<Button color="primary" variant="bordered">
						<GrCubes />
					</Button>

					<Input
						isClearable
						className="w-full sm:max-w-[44%]"
						placeholder="Search by name..."
						startContent={<SearchIcon />}
					/>
				</div>
			</div>
			<EmployeesTable />
		</div>
	);
};

export default Employees;
