import { QueryResult } from '@/types';
import { useQuery } from '@tanstack/react-query';

type TData = {
	id: string;
};
type TodoListCache = {
	data: QueryResult<TData[]>;
};
export const useTodoListCache = (): TodoListCache => {
	const data = useQuery({
		queryKey: ['test'],
		queryFn: async (): Promise<TData[]> => {
			const response = await fetch('http://localhost:8000/todos');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		},
	});
	return {
		data,
	};
};
