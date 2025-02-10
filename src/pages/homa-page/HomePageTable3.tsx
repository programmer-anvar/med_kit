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
	pay: string;
	avatar: string;
	email: string;
	invoice: string;
	kassalikVaraq: string;
	doctor: string;
	doctorAvatar: string;
	doktorPratsent: string;
};
export const users: User[] = [
	{
		id: 1,
		name: 'Tony Reichert',
		muolaja: '100.000',
		invoice: '#55652',
		doctor: 'Alen Green',
		doctorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		pay: '+ 280.000',
		doktorPratsent: '12%',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
		kassalikVaraq: '60%',
	},
	{
		id: 2,
		name: 'Tony Reichert',
		muolaja: '100.000',
		invoice: '#55652',
		doctor: 'Alen Green',
		doctorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		pay: '+ 280.000',
		doktorPratsent: '12%',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
		kassalikVaraq: '60%',
	},
	{
		id: 3,
		name: 'Tony Reichert',
		muolaja: '100.000',
		invoice: '#55652',
		doctor: 'Alen Green',
		doctorAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		pay: '+ 280.000',
		doktorPratsent: '12%',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
		kassalikVaraq: '60%',
	},
];
const HomePageTable3: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage] = useState<number>(5);

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		return users.slice(start, end);
	}, [page, rowsPerPage]);

	return (
		<div className="mt-14">
			<Table isHeaderSticky aria-label="Simple table with pagination">
				<TableHeader>
					<TableColumn>Invoice</TableColumn>
					<TableColumn>F.I.SH</TableColumn>
					<TableColumn>Shifokor</TableColumn>
					<TableColumn>Summa</TableColumn>
					<TableColumn>Shifokor foizi</TableColumn>
					<TableColumn>Xarajat</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((user) => (
						<TableRow key={user.id}>
							<TableCell>
								<p className="text-blue-400 font-bold">{user.invoice}</p>
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
							<TableCell>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<img
										src={user.doctorAvatar}
										alt="User Avatar"
										style={{
											width: '40px',
											height: '40px',
											borderRadius: '10px',
											marginRight: '10px',
										}}
									/>
									{user.doctor}
								</div>
							</TableCell>

							<TableCell>
								<p className="text-green-400">{user.pay}</p>
							</TableCell>
							<TableCell>{user.doktorPratsent}</TableCell>
							<TableCell>{user.muolaja}</TableCell>
							{/*
							<TableCell style={getXolatStyle(user.xolat)} className="h-[10px]">
								{user.xolat}
							</TableCell>
							 */}
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
export default HomePageTable3;
