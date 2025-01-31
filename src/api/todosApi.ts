import axios from 'axios';

export interface Todo {
	id?: number;
	title: string;
	completed: boolean;
}
//thi is axios
const todosApi = axios.create({
	baseURL: 'http://localhost:8000	',
});

export const getTodos = async (): Promise<Todo[]> => {
	const response = await todosApi.get<Todo[]>('/todos');
	return response.data;
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
	const response = await todosApi.post<Todo>('/todos', todo);
	return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
	const response = await todosApi.patch<Todo>(`/todos/${todo.id}`, todo);
	return response.data;
};

export const deleteTodo = async ({ id }: { id: number }): Promise<void> => {
	await todosApi.delete(`/todos/${id}`);
};

export default todosApi;
