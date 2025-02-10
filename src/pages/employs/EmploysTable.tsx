const EmploysTable: React.FC<ContactsTableProps> = ({ contacts }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table-auto w-full">
				<thead className="bg-gray-200">
					<tr>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Role</th>
						<th className="px-4 py-2">Profession</th>
						<th className="px-4 py-2">Phone</th>
						<th className="px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<tr key={contact.id}>
							<td className="border px-4 py-2">{contact.name}</td>
							<td className="border px-4 py-2">{contact.role}</td>
							<td className="border px-4 py-2">{contact.profession}</td>
							<td className="border px-4 py-2">{contact.phone}</td>
							<td className="border px-4 py-2">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
									Edit
								</button>
								<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EmploysTable;
