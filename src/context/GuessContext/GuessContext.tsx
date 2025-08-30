import { useEffect, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

import { useGuessSessionStore } from '@/stores/auth.store';
import { useCreateGuessSession } from '@/services/queries/auth.query';
import { GuessContext } from '@/context/GuessContext/GuessProvider';
import { isSessionExpired } from '@/util/dateChecker';

export const GuessContextProvider = ({ children }: PropsWithChildren) => {
	const { guessSessionId, expiresAt, setSessionId, setExpiresAt } =
		useGuessSessionStore();

	const isExpired = isSessionExpired(expiresAt);
	const shouldFetchSession = !guessSessionId || !expiresAt || isExpired;

	const {
		data,
		isSuccess: isGuessSessionSuccess,
		isError: isCreateCreateSessionError,
		error,
	} = useCreateGuessSession({
		enabled: shouldFetchSession,
	});

	const { guest_session_id: sessionId, expires_at: expiration } = data ?? {};

	useEffect(() => {
		const hasData = isGuessSessionSuccess && sessionId && expiration;

		if (hasData) {
			console.log('trigger set session');
			setSessionId(sessionId);
			setExpiresAt(expiration);
		}
	}, [
		expiration,
		isGuessSessionSuccess,
		sessionId,
		setExpiresAt,
		setSessionId,
	]);

	const contextValue = useMemo(
		() => ({
			guessSessionId,
			expiresAt,
		}),
		[expiresAt, guessSessionId]
	);

	if (isCreateCreateSessionError) {
		return <div>Error: {error?.message || 'Something went wrong'}</div>;
	}

	return (
		<GuessContext.Provider value={contextValue}>
			{children}
		</GuessContext.Provider>
	);
};
