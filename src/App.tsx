import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';
import { ToastContainer } from 'react-toastify';
import { PrimeReactProvider } from 'primereact/api';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query
import { protectedRouter, publicRouter } from './routes/routes';
const ProtectedRoutes = () => {
	const accessToken = useSelector((state: RootState) => state.auth.accessToken);
	if (accessToken) {
		return <RouterProvider router={protectedRouter} />;
	}
	return <RouterProvider router={protectedRouter} />;
};
const queryClient = new QueryClient();
const App = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ToastContainer />
				<PrimeReactProvider>
					<ProtectedRoutes />
				</PrimeReactProvider>
			</QueryClientProvider>
		</Provider>
	);
};
export default App;
