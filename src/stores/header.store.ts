import { create } from 'zustand';

interface MovieInfoStore {
	trackTrailerState: boolean;
	setTrackTrailerState: (state: boolean) => void;
}

export const useMovieInfoStore = create<MovieInfoStore>(set => ({
	trackTrailerState: false,
	setTrackTrailerState: state => set({ trackTrailerState: state }),
}));
