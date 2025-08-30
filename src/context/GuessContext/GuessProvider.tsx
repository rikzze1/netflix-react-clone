import { createContext } from 'react';

interface GuessContextProps {
	guessSessionId: string;
	expiresAt: string;
}

export const GuessContext = createContext<GuessContextProps | undefined>(
	undefined
);
