import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '@/router/router';

import './scss/style.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router />
	</StrictMode>
);
