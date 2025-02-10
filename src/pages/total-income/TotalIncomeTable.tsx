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
	muolaja: string;
	xolat: string;
	pay: string;
	avatar: string;
	email: string;
	invoice: string;
	kassalikVaraq: string;
};
export const users: User[] = [
	{
		id: 1,
		name: 'Tony Reichert',
		muolaja: '1)implant',
		invoice: '#081451',
		pay: 'tolangan',
		xolat: 'tolangan',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
		kassalikVaraq: 'P',
	},
	{
		id: 2,
		name: 'Jane Doe',
		muolaja: '2)orthodontics',
		invoice: '#081452',
		pay: 'Tolangan',
		xolat: 'Qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e290267e',
		email: 'jane.doe@example.com',
		kassalikVaraq: 'P',
	},
];
const TotalIncomeTable: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage] = useState<number>(5);

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return users.slice(start, end);
	}, [page, rowsPerPage]);
	const getXolatStyle = (xolat: string) => {
		if (xolat.toLowerCase() === 'qarzdor') {
			return {
				// borderColor: 'red',
				// borderStyle: 'solid',
				// borderWidth: '2px',
				// height: '10px',
				color: 'red',
			};
		} else if (xolat.toLowerCase() === 'tolangan') {
			return { color: 'green' };
		} else {
			return {};
		}
	};

	return (
		<div>
			<Table isHeaderSticky aria-label="Simple table with pagination">
				<TableHeader>
					<TableColumn>Invoice</TableColumn>
					<TableColumn>F.I.SH</TableColumn>
					<TableColumn>Muolaja</TableColumn>
					<TableColumn>To'langan</TableColumn>
					<TableColumn>Xolat</TableColumn>
					<TableColumn>Kassalik varaqasi</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((user) => (
						<TableRow key={user.id}>
							<TableCell>{user.invoice}</TableCell>
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
							<TableCell>{user.muolaja}</TableCell>
							<TableCell>{user.pay}</TableCell>
							<TableCell style={getXolatStyle(user.xolat)} className="h-[10px]">
								{user.xolat}
							</TableCell>
							<TableCell>{user.kassalikVaraq}</TableCell>
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
export default TotalIncomeTable;
