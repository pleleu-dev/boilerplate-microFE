import * as zustand from 'zustand';

interface IStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}
declare const useStore: zustand.UseBoundStore<zustand.StoreApi<IStore>>;

export { IStore, useStore };
