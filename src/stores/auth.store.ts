import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface GuessInfo {
	expiresAt: string;
	guessSessionId: string;
	setSessionId: (id: string) => void;
	setExpiresAt: (expiration: string) => void;
}

export const useGuessSessionStore = create<GuessInfo>()(
	persist(
		set => ({
			expiresAt: '',
			guessSessionId: '',
			setExpiresAt: (id: string) => set({ expiresAt: id }),
			setSessionId: (expiration: string) =>
				set({ guessSessionId: expiration }),
		}),
		{
			name: 'guest-session',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
