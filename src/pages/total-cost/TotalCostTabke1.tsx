import React, { useCallback, useMemo, useState } from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	Chip,
	User,
	Pagination,
} from '@heroui/react';
type Column = {
	name: string;
	uid: string;
	sortable: boolean;
};

// Define the type for a user
type User = {
	id: number;
	name: string;
	shifokorlar: string;
	ishVAqti: string;
	telefon: string;
	avatar: string;
	email: string;
	ishchiOyligi: string;
	ishchiFoyzi: string;
};

// Define the type for sorting descriptor
type SortDescriptor = {
	column: keyof User;
	direction: 'ascending' | 'descending';
};

// Define the type for icon props, used by all SVG icons
interface IconProps {
	size?: number;
	width?: number;
	height?: number;
}

// Define props type for the component if needed

export const statusOptions = [
	{ name: 'Active', uid: 'active' },
	{ name: 'Paused', uid: 'paused' },
	{ name: 'Vacation', uid: 'vacation' },
];

export const columns: Column[] = [
	{ name: 'F.I.SH', uid: 'name', sortable: true },
	{ name: 'Shifolorlar', uid: 'shifokorlar', sortable: true },
	{ name: 'Ish vaqti/kunlik', uid: 'ishVaqti', sortable: true },
	{ name: 'Telefon raqam', uid: 'telefon', sortable: true },
	{ name: 'Ishchi oyligi', uid: 'ishchiOyligi', sortable: true },
	{ name: 'ishchi foyzi', uid: 'ishchiFoyzi', sortable: true },
	{
		name: 'Actions',
		uid: 'actions',
		sortable: false,
	},
];

export const users: User[] = [
	{
		id: 1,
		shifokorlar: '#081451',
		ishVAqti: 'ishVaqti',
		telefon: '998 91 177 44 33',
		ishchiOyligi: '12.2222',
		ishchiFoyzi: '12%',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
	{
		id: 2,
		shifokorlar: '#081451',
		ishVAqti: 'ishVaqti',
		telefon: '998 91 177 44 33',
		ishchiOyligi: '12.2222',
		ishchiFoyzi: '12%',
		avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
		email: 'tony.reichert@example.com',
	},
];

export function capitalize(s: string): string {
	return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
}

export const SearchIcon = ({ ...props }: IconProps) => {
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
	tolangan: 'success',
	Qarzdor: 'danger',
	vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS: Set<string> = new Set([
	'name',
	'shifokorlar',
	'ishVAqti',
	'telefon',
	'ishchiOyligi',
	'ishchiFoyzi',
]);

const TotalCostTabke1: React.FC = () => {
	const [filterValue, setFilterValue] = useState<string>('');
	const [selectedKeys, setSelectedKeys] = useState<Set<number>>(new Set());
	const [visibleColumns] = useState<Set<string>>(INITIAL_VISIBLE_COLUMNS);
	const [statusFilter] = useState<string>('all');
	const [rowsPerPage, setRowsPerPage] = useState<number>(5);
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
		column: 'age',
		direction: 'ascending',
	});
	const [page, setPage] = useState<number>(1);

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
			case 'xolat':
				return (
					<Chip
						className="capitalize"
						color={statusColorMap[user.xolat]}
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
			<div className="flex flex-col gap-4 mt-28">
				<div className="flex justify-between gap-3 items-end">
					<Input
						isClearable
						className="w-full sm:max-w-[44%]"
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
};

export default TotalCostTabke1;
