import React, { useMemo, useState } from 'react';
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
	name: string;
	job: string;
	stavka: string;
	daromad: string;
	avatar: string;
	email: string;
	xolat: string;
};
export const users: User[] = [
	{
		id: 1,
		name: 'Tony Reichert',
		job: 'Implantolog',
		stavka: '0.5',
		daromad: '$56.07',
		xolat: 'Keldi',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		job: 'Implantolog',
		stavka: '0.5',
		daromad: '$56.07',
		xolat: 'Kelmadi',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
];
const SalesTable: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage] = useState<number>(5);

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return users.slice(start, end);
	}, [page, rowsPerPage]);
	const getXolatStyle = (xolat: string) => {
		if (xolat.toLowerCase() === 'kelmadi') {
			return {
				color: 'red',
			};
		} else if (xolat.toLowerCase() === 'keldi') {
			return { color: 'green' };
		} else {
			return {};
		}
	};

	return (
		<div className="mt-24">
			<Table isHeaderSticky aria-label="Simple table with pagination">
				<TableHeader>
					<TableColumn>Isimlar</TableColumn>
					<TableColumn>Kasblar</TableColumn>
					<TableColumn>Stavka</TableColumn>
					<TableColumn>Daromad</TableColumn>
					<TableColumn>Xolat</TableColumn>
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
							<TableCell>{user.job}</TableCell>
							<TableCell>{user.stavka}</TableCell>
							<TableCell>{user.daromad}</TableCell>
							<TableCell style={getXolatStyle(user.xolat)} className="h-[10px]">
								{user.xolat}
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
export default SalesTable;
