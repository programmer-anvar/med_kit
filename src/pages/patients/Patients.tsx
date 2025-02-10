import { Button, Input } from '@heroui/react';
import PatientTable from './PatientTable';
import { SearchIcon } from '@/assets/hodimlar/HodimlarSvg';
import { FaPlus } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';

const Patients = () => {
	return (
		<div>
			<div className="mt-[41px]">
				<div className="flex justify-between ">
					<div className="flex">
						<div className="flex gap-[8px]">
							<Button color="primary">
								<FaPlus className="text-[16px]" />
								Add New
							</Button>
							<Button color="danger">
								<MdDeleteOutline className="text-[22px]" />
							</Button>
							<h2 className="text-[#0E1726] text-[20px] font-[700] ml-[28px]">
								Bemorlar
							</h2>
						</div>
					</div>
					<div className="flex gap-[13px]">
						<Input
							isClearable
							className="w-full sm:max-w-[230px]"
							placeholder="Search by name..."
							startContent={<SearchIcon />}
						/>
					</div>
				</div>
			</div>
			<PatientTable />
		</div>
	);
};

export default Patients;
