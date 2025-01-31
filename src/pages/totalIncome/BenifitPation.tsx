import React, { useCallback, useState, useMemo } from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Chip,
	User,
	Pagination,
} from '@heroui/react';
import { SiGooglesheets } from "react-icons/si";

export const columns = [
	{ name: 'Invoice', uid: 'invoice', sortable: true },
	{ name: 'ID', uid: 'id', sortable: true },
	{ name: 'NAME', uid: 'name', sortable: true },
	{ name: 'Muolaja', uid: 'muolaja', sortable: true },
	{ name: 'To`langan', uid: 'tologan', sortable: true },
	{ name: 'AGE', uid: 'age', sortable: true },
	{ name: 'ROLE', uid: 'role', sortable: true },
	{ name: 'TEAM', uid: 'team' },
	{ name: 'Xolat', uid: 'Tolangan', sortable: true },
	{ name: 'Kassalik varaqasiga otish', uid: <SiGooglesheets/> },
	{ name: 'ACTIONS', uid: 'actions' },
];

export const statusOptions = [
	{ name: 'Active', uid: 'active' },
	{ name: 'Paused', uid: 'paused' },
	{ name: 'Vacation', uid: 'vacation' },
];

export const users = [
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 1,
		invoice: '#225223',
		name: 'Tony Reichert',
        muolaja:'Implant',
        tologan:'To`langan ',
		role: 'CEO',
		team: 'Management',
		status: 'active',
		age: '29',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	
	
];

export function capitalize(s) {
	return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
}



export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height={size || height}
			role="presentation"
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
				fill="currentColor"
			/>
		</svg>
	);
};

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

const statusColorMap = {
	active: 'success',
	paused: 'danger',
	vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS = [
    'muolaja',
	'invoice',
    'tologan',
	'name',
	'role',
	'status',
	'actions',
];

export default function BenifitPation() {
	const [filterValue, setFilterValue] = useState('');
	const [selectedKeys, setSelectedKeys] = useState(new Set([]));
	const [visibleColumns, setVisibleColumns] = useState(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [statusFilter, setStatusFilter] = useState('all');
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
						description={user.email}
						name={cellValue}
					>
						{user.email}
					</User>
				);
			case 'role':
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
						color={statusColorMap[user.status]}
						size="sm"
						variant="flat"
					>
						{cellValue}
					</Chip>
				);
			case 'actions':
				return (
					<div className="relative flex justify-end items-center gap-2">
						<Dropdown>
							<DropdownTrigger>
								<Button isIconOnly size="sm" variant="light">
									<VerticalDotsIcon className="text-default-300" />
								</Button>
							</DropdownTrigger>
							<DropdownMenu>
								<DropdownItem key="view">View</DropdownItem>
								<DropdownItem key="edit">Edit</DropdownItem>
								<DropdownItem key="delete">Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
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

	const onPreviousPage =useCallback(() => {
		if (page > 1) {
			setPage(page - 1);
		}
	}, [page]);

	const onRowsPerPageChange = useCallback((e) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	}, []);

	const onSearchChange = useCallback((value) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue('');
		}
	}, []);

	const onClear = useCallback(() => {
		setFilterValue('');
		setPage(1);
	}, []);

	const topContent = useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-3 ">
					<h2>Beardmore</h2>
					<Input
						isClearable
						className="w-full sm:max-w-[24%]"
						placeholder="Search by name..."
						startContent={<SearchIcon />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
					/>
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
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onRowsPerPageChange,
		users.length,
		onSearchChange,
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
			selectionMode="multiple"
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
