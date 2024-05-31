import { create } from 'zustand';
import type { Carnivals, Events, News } from '~/interfaces/content';

type Store = {
	news: News[];
	carnivals: Carnivals[];
	events: Events[];
	loading: boolean;
	setNews: (news: News[]) => void;
	setCarnivals: (carnivals: Carnivals[]) => void;
	setEvents: (events: Events[]) => void;
	setLoading: (loading: boolean) => void;
};

const useStore = create<Store>(set => ({
	news: [],
	carnivals: [],
	events: [],
	loading: true,
	setNews: (news: News[]) => set({ news }),
	setCarnivals: (carnivals: Carnivals[]) => set({ carnivals }),
	setEvents: (events: Events[]) => set({ events }),
	setLoading: loading => set({ loading }),
}));

export default useStore;
