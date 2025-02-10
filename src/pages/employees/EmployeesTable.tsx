import React, { useMemo, useState } from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Pagination,
	Button,
} from '@heroui/react';
type User = {
	id: number;
	invoice: string;
	name: string;
	phone: string;
	job: string;
	amount: string;
	avatar: string;
	email: string;
	status: string;
};
export const users: User[] = [
	{
		id: 1,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 2,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 3,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 4,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 5,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 6,
		name: 'Tony Reichert',
		invoice: 'Sub Admin',
		phone: '+998 999 55 66',
		job: 'Doctor',
		amount: '2275.45',
		status: 'Paid',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
];
const EmployeesTable: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage] = useState<number>(5);

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return users.slice(start, end);
	}, [page, rowsPerPage]);
	return (
		<div className="mt-[31px]">
			<Table isHeaderSticky aria-label="Simple table with pagination">
				<TableHeader>
					<TableColumn>Name</TableColumn>
					<TableColumn>Holati</TableColumn>
					<TableColumn>Kasbi</TableColumn>
					<TableColumn>Phone</TableColumn>
					<TableColumn>Amount</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((user) => (
						<TableRow key={user.id}>
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
							<TableCell>{user.invoice}</TableCell>
							<TableCell>{user.job}</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell className="flex gap-5">
								<Button size="sm" color="primary" variant="bordered">
									Edit
								</Button>
								<Button size="sm" color="danger" variant="bordered">
									Delete
								</Button>
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
export default EmployeesTable;
