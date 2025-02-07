import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
	Chip,
	User,
	Pagination,
} from '@heroui/react';
import { FaRegNoteSticky, FaUserDoctor } from 'react-icons/fa6';

export const columns = [
	{ name: 'ID', uid: 'id', sortable: true },
	{ name: 'F.I.SH', uid: 'name', sortable: true },
	// { name: 'AGE', uid: 'age', sortable: true },
	{ name: 'Shifokorlar', uid: 'doctor' },
	{ name: 'ishvaqti/kunlik', uid: 'workinhHaour' },
	{ name: 'telefon raqami', uid: 'phone', sortable: true },
	{ name: 'ishchi oyligi', uid: 'salary', sortable: true },
	{ name: 'ishchi foizi', uid: 'pratsent', sortable: true },
	{ name: 'Kassalik varaqasi', uid: 'sickNote', sortable: true },
	{ name: 'TEAM', uid: 'team' },
	{ name: 'EMAIL', uid: 'email' },
	// { name: 'ACTIONS', uid: 'actions' },
];

export const statusOptions = [
	{ name: 'Active', uid: 'active' },
	{ name: 'Paused', uid: 'paused' },
	{ name: 'Vacation', uid: 'vacation' },
];

export const users = [
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
	{
		id: 1,
		name: 'Tony Reichert',
		doctor: 'Doctor',
		workinhHaour: '8 soat',
		phone: '+998 93 164 01 24',
		salary: '12 0000',
		pratsent: '60%',
		sickNote: <FaRegNoteSticky className="text-[18px] text-center " />,
		status: 'qarzdor',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
	},
];

export function capitalize(s) {
	return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
}

const statusColorMap = {
	tolangan: 'success',
	qarizdor: 'danger',
	vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS = [
	'name',
	'doctor',
	'workinhHaour',
	'phone',
	'salary',
	'pratsent',
];

import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { BiInjection } from 'react-icons/bi';
import { SiMaterialformkdocs } from 'react-icons/si';
import { IoIosAddCircle } from 'react-icons/io';
import { useCallback, useMemo, useState } from 'react';
export default function TotalCostTable() {
	const [filterValue] = useState('');
	const [selectedKeys, setSelectedKeys] = useState(new Set([]));
	const [visibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
	const [statusFilter] = useState('all');
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [sortDescriptor, setSortDescriptor] = useState({
		column: 'age',
		direction: 'ascending',
	});
	const [page, setPage] = useState(1);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = useMemo(() => {
		if (visibleColumns === 'all') return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [visibleColumns]);

	const filteredItems = useMemo(() => {
		let filteredUsers = [...users];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter((user) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptions.length
		) {
			filteredUsers = filteredUsers.filter((user) =>
				Array.from(statusFilter).includes(user.status)
			);
		}

		return filteredUsers;
	}, [users, filterValue, statusFilter]);

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = useMemo(() => {
		return [...items].sort((a, b) => {
			const first = a[sortDescriptor.column];
			const second = b[sortDescriptor.column];
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === 'descending' ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = useCallback((user, columnKey) => {
		const cellValue = user[columnKey];

		switch (columnKey) {
			case 'name':
				return (
					<User
						avatarProps={{ radius: 'lg', src: user.avatar }}
						name={cellValue}
					></User>
				);
			case 'sickNote':
				return (
					<div className="flex flex-col">
						<p className="text-bold text-small capitalize">{cellValue}</p>
						<p className="text-bold text-tiny capitalize text-default-400">
							{user.team}
						</p>
					</div>
				);
			case 'status':
				return (
					<Chip
						className="capitalize"
						color={statusColorMap[user.status] || 'default'}
						size="sm"
						variant="flat"
					>
						{cellValue}
					</Chip>
				);

			default:
				return cellValue;
		}
	}, []);

	const onNextPage = useCallback(() => {
		if (page < pages) {
			setPage(page + 1);
		}
	}, [page, pages]);

	const onPreviousPage = useCallback(() => {
		if (page > 1) {
			setPage(page - 1);
		}
	}, [page]);

	const onRowsPerPageChange = useCallback((e) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	}, []);

	const topContent = useMemo(() => {
		return (
			<>
				<div className="flex flex-col gap-4 mt-10">
					<div className="grid grid-cols-6 gap-6">
						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
							<div className="flex items-center gap-5">
								<div className="w-[40px] h-[40px] rounded-full bg-[#F7931A] flex items-center justify-center p-[10px]">
									<FaUserDoctor className="text-[30px]" />
								</div>
								<p className="text-[14px]">Ishchilar oyligi</p>
							</div>
							<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
								$20,000
							</h3>
						</div>

						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
							<div className="flex items-center gap-5">
								<div className="w-[40px] h-[40px] rounded-full bg-[#E2A03F] flex items-center justify-center p-[10px]">
									<RiMoneyPoundCircleLine className="text-[30px]" />
								</div>
								<p className="text-[14px]">Kommunal To`lovlar</p>
							</div>
							<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
								$21,000
							</h3>
						</div>

						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
							<div className="flex items-center gap-5">
								<div className="w-[40px] h-[40px] rounded-full bg-[#6EA6FF] flex items-center justify-center p-[10px]">
									<BiInjection className="text-[30px]" />
								</div>
								<p className="text-[14px]">Ish qurollar</p>
							</div>
							<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
								$11,657
							</h3>
						</div>

						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
							<div className="flex items-center gap-5">
								<div className="w-[40px] h-[40px] rounded-full bg-[#53AE94] flex items-center justify-center p-[10px]">
									<SiMaterialformkdocs className="text-[30px]" />
								</div>
								<p className="text-[14px]">Materiallar</p>
							</div>
							<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
								$11,657
							</h3>
						</div>

						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] p-[20px] cursor-pointer">
							<div className="flex items-center gap-5">
								<div className="w-[40px] h-[40px] rounded-full bg-[#AE9153] flex items-center justify-center p-[10px]">
									<SiMaterialformkdocs className="text-[30px]" />
								</div>
								<p className="text-[14px]">Materiallar</p>
							</div>
							<h3 className="text-[#0E1726] text-[32px] font-[700] mt-6">
								$11,657
							</h3>
						</div>

						<div className="rounded-[6px] bg-[#FFFFFF] w-[200px] h-[139px] flex items-center justify-center cursor-pointer">
							<IoIosAddCircle className="text-[70px]" />
						</div>
					</div>
					<div className="flex justify-between items-center">
						<span className="text-default-400 text-small">
							Total {users.length} users
						</span>
						<label className="flex items-center text-default-400 text-small">
							Rows per page:
							<select
								className="bg-transparent outline-none text-default-400 text-small"
								onChange={onRowsPerPageChange}
							>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
							</select>
						</label>
					</div>
				</div>
			</>
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onRowsPerPageChange,
		users.length,
		hasSearchFilter,
	]);

	const bottomContent = useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<span className="w-[30%] text-small text-default-400">
					{selectedKeys === 'all'
						? 'All items selected'
						: `${selectedKeys.size} of ${filteredItems.length} selected`}
				</span>
				<Pagination
					isCompact
					showControls
					showShadow
					color="primary"
					page={page}
					total={pages}
					onChange={setPage}
				/>
				<div className="hidden sm:flex w-[30%] justify-end gap-2">
					<Button
						isDisabled={pages === 1}
						size="sm"
						variant="flat"
						onPress={onPreviousPage}
					>
						Previous
					</Button>
					<Button
						isDisabled={pages === 1}
						size="sm"
						variant="flat"
						onPress={onNextPage}
					>
						Next
					</Button>
				</div>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	return (
		<Table
			isHeaderSticky
			aria-label="Example table with custom cells, pagination and sorting"
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			classNames={{
				wrapper: 'max-h-[382px]',
			}}
			selectedKeys={selectedKeys}
			// selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === 'actions' ? 'center' : 'start'}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={'No users found'} items={sortedItems}>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
