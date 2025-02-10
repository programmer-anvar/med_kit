import React, { useMemo, useState } from 'react';
import { SlNote } from 'react-icons/sl';
import { FaRegStickyNote } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Pagination,
} from '@heroui/react';
type User = {
	id: number;
	invoice: string;
	name: string;
	phone: string;
	date: string;
	amount: string;
	avatar: string;
	email: string;
	status: string;
};
export const users: User[] = [
	{
		id: 1,
		name: 'Tony Reichert',
		invoice: '#4444',
		phone: '+998 999 55 66',
		date: '15 Dec 2020',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 2,
		name: 'Tony Reichert',
		invoice: '#4444',
		phone: '+998 999 55 66',
		date: '15 Dec 2020',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
];
const PatientTable: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage] = useState<number>(5);

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return users.slice(start, end);
	}, [page, rowsPerPage]);
	const getXolatStyle = (xolat: string) => {
		if (xolat.toLowerCase() === 'paid') {
			return {
				color: 'red',
			};
		} else if (xolat.toLowerCase() === 'pending') {
			return { color: 'green' };
		} else {
			return {};
		}
	};

	return (
		<div className="mt-24">
			<Table isHeaderSticky aria-label="Simple table with pagination">
				<TableHeader>
					<TableColumn>Invoice</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Phone</TableColumn>
					<TableColumn>Date</TableColumn>
					<TableColumn>Amount</TableColumn>
					<TableColumn>Status</TableColumn>
					<TableColumn>Action</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="text-blue-700 font-bold">
								{user.invoice}
							</TableCell>
							<TableCell>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<img
										src={user.avatar}
										alt="User Avatar"
										style={{
											width: '40px',
											height: '40px',
											borderRadius: '10px',
											marginRight: '10px',
										}}
									/>
									{user.name}
								</div>
							</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell>{user.date}</TableCell>
							<TableCell>{user.amount}</TableCell>
							<TableCell
								style={getXolatStyle(user.status)}
								className="h-[10px]"
							>
								{user.status}
							</TableCell>
							<TableCell className="flex gap-5">
								<SlNote size={18} className="mt-2" />
								<FaRegStickyNote size={18} className="mt-2" />
								<MdDelete size={22} className="mt-2" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="flex justify-center mt-4">
				<Pagination
					isCompact
					showControls
					showShadow
					color="primary"
					page={page}
					total={pages}
					onChange={setPage}
				/>
			</div>
		</div>
	);
};
export default PatientTable;
