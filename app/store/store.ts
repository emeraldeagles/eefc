// store.js
import {create} from 'zustand'
import type { Carnivals, Events, News } from '~/interfaces/content';

type Store = {
    news: News[];
    carnivals: Carnivals[];
    events: Events[];
    setNews: (news: News[]) => void;
    setCarnivals: (carnivals: Carnivals[]) => void;
    setEvents: (events: Events[]) => void;
};

const useStore = create<Store>(set => ({
    news: [],
    carnivals: [],
    events: [],
    setNews: (news: News[]) => set({ news }),
    setCarnivals: (carnivals: Carnivals[]) => set({ carnivals }),
    setEvents: (events: Events[]) => set({ events }),
}));

export default useStore;
