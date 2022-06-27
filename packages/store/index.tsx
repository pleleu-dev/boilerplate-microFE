import create from 'zustand';

export interface IStore{
    counter : number;
    increment : () => void;
    reset : () => void
}

const useStore = create<IStore>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 }),
}))

export {useStore}