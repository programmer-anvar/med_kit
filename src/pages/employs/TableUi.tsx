// pages/index.tsx
import EmploysTable from './EmploysTable';
import { IContact } from './IContact';

const ETable = () => {
	const contacts: IContact[] = [
		{
			id: 1,
			name: 'Alan Green',
			role: 'Sub Admin',
			profession: 'Doctor',
			phone: '+1 202 555 0197',
		},
		{
			id: 2,
			name: 'Alan Green',
			role: 'Doc',
			profession: 'Doctor',
			phone: '+1 202 555 0170',
		},
		// More contacts
	];

	return (
		<div className="container mx-auto px-4">
			<EmploysTable contacts={contacts} />
		</div>
	);
};

export default ETable;
