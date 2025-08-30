import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '@/router/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './scss/style.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GuessContextProvider } from './context/GuessContext/GuessContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<GuessContextProvider>
				<Router />
			</GuessContextProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</StrictMode>
);
